import sample from './assets/sample.png';
import book from './assets/book.png';
import star from './assets/star.png';
import author from './assets/author.png';
import Logo from './assets/logofinal.png';
import playstore from './assets/banner-5-10 1.png';
import retailer from './assets/Singh Retail banner (2).jpg';
import homepagebg from './assets/homepagebg.png';
import homepagebg2 from './assets/homepagebg2.png';
import homepagebg3 from './assets/homepagebg3.png';
import testimonial1 from './assets/testimonial1.JPG';
import testimonial2 from './assets/testimonial2.jfif';
import app from './Firebase';
import axios from 'axios';
import Carousel from 'react-material-ui-carousel'
import { Favorite } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { useEffect } from 'react';
import LoadingBar from './comps/Loadingbar';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from 'react';


function BookComp(props) {
    const navigate = useNavigate();
    const [loading, setloading] = React.useState(false);
    const [user, setuser] = useState(JSON.parse(localStorage.getItem('pubuser')));
    return (
        <div className=' my-4 max-w-md rounded-xl p-5' style={{ 'border': '1px solid #777777' }} >
            <div className="img-content cursor-pointer" onClick={(e) => {
                e.preventDefault();
                navigate('/product', { state: props.prod })
            }}>
                <img src={props.prod.image_url} className="w-1/2 py-5 mx-auto rounded-xl" alt="" />
                <h2 className="text-lg text-[#315ED2]  font-bold" >{props.prod.title}</h2>
                <h2 className="text-base text-[#777777] font-semibold" >{props.prod.category}</h2>
                <h2 className="text-sm text-[#777777]  font-medium">{props.prod.subtitle}</h2>
                <div className='w-full mt-1 flex items-center'>
                    <h1 className="text-base font-medium mr-2" style={{ 'color': '#777777' }}>{props.prod.rating}</h1>
                    <img className='mx-1 w-4' src={star} alt="" />
                    <img className='mx-1 w-4' src={star} alt="" />
                    <img className='mx-1 w-4' src={star} alt="" />
                    <img className='mx-1 w-4' src={star} alt="" />
                    <img className='mx-1 w-4' src={star} alt="" />
                </div>
            </div>

            <div className="flex justify-between mt-2 gap-5">
                <button type="button" className="w-full px-5 py-4 bg-white border border-[#777777] text-[#777777] font-bold rounded-l-xl" onClick={(e) => {
                    let user = JSON.parse(localStorage.getItem('pubuser'));
                    if (user === null) {
                        navigate('/login');
                        return;
                    }
                    // console.log(user.accessToken);
                    e.preventDefault();
                    setloading(true);
                    axios.post("https://singhpublications.onrender.com/api/user/addtocart", {


                        "product_id": props.prod.id,

                        //how to pass query params and headers in axios

                    }, {
                        headers: {
                            'Authorization': `Bearer ${user.accessToken}`
                        },
                        params: {
                            'id': user.id
                        }
                    },).then((res) => {
                        setloading(false);
                        let newuser = res.data;
                        newuser['accessToken'] = user.accessToken;
                        localStorage.setItem('pubuser', JSON.stringify(newuser));
                        window.location.reload(false)
                        // localStorage.setItem('pubuser', JSON.stringify(res.data));
                    }
                    ).catch((err) => {
                        setloading(false);
                        console.log(err);
                        if (err.response.status === 400) {
                            toast.info("Product already in cart");
                        }
                    }
                    )

                }}>
                    {user != null && user.cart.includes(props.prod.id) ?
                        "Added to Cart" : "Add to Cart"
                    }
                </button>
                {user != null && user.wishlist.includes(props.prod.id) ?
                    <button type="button" onClick={(e) => {
                        toast.info("Product already in wishlist");
                    }} className="w-16 h-full flex justify-center items-center px-4 py-4 bg-white border border-[#777777] text-[red]  rounded-r-xl text-2xl"><i className="fa-solid fa-heart"></i></button> : <button type="button" onClick={(e) => {
                        let user = JSON.parse(localStorage.getItem('pubuser'));
                        e.preventDefault();
                        if (user) {

                            axios.post("https://singhpublications.onrender.com/api/user/addtowishlist", {


                                "product_id": props.prod.id,

                            }, {
                                headers: {
                                    'Authorization': `Bearer ${user.accessToken}`
                                },
                                params: {
                                    'id': user.id
                                }
                            },).then((res) => {
                                let newuser = res.data;
                                newuser['accessToken'] = user.accessToken;
                                localStorage.setItem('pubuser', JSON.stringify(newuser));
                                window.location.reload(false)

                            }
                            ).catch((err) => {
                                console.log(err);
                                if (err.response.status === 400) {
                                    toast.info("Product already in wishlist");
                                }

                            }
                            )
                            // navigate('/wishlist')
                        }
                        else {
                            navigate('/login');
                        }
                    }} className="w-16 h-full flex justify-center items-center px-5 py-5 bg-white border border-[#777777] text-[#777777] rounded-r-xl  text-2xl"><i className="fa-regular fa-heart"></i></button>
                }

            </div>


            {/* {props.user != null && props.user.wishlist.includes(props.prod.id) && <div onClick={(e) => {
                let user = JSON.parse(localStorage.getItem('pubuser'));
                e.preventDefault();
                if (user) {

                    axios.post("https://singhpublications.onrender.com/api/user/addtowishlist", {


                        "product_id": props.prod.id,

                    }, {
                        headers: {
                            'Authorization': `Bearer ${user.accessToken}`
                        },
                        params: {
                            'id': user.id
                        }
                    },).then((res) => {
                        let newuser = res.data;
                        newuser['accessToken'] = user.accessToken;
                        localStorage.setItem('pubuser', JSON.stringify(newuser));
                        toast.info("Added to wishlist");
                    }
                    ).catch((err) => {
                        console.log(err);
                        if (err.response.status === 400) {
                            toast.info("Product already in wishlist");
                        }

                    }
                    )
                }
                else {
                    toast.warning("Please login to add to wishlist");
                }
            }} >
            </div>} */}
        </div>
    );
}


function Home() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const [user, setuser] = useState(JSON.parse(localStorage.getItem('pubuser')));
    const [loading, setLoading] = useState(true);
    async function getallprods() {
        setLoading(true);
        axios.get('https://singhpublications.onrender.com/api/product/getproducts').then((res) => {
            // console.log(res);
            setLoading(false);
            setProducts(res.data);
        }).catch((err) => {
            console.log(err);
            setLoading(false);
            alert("error");
            return;
        });
    }
    async function checkuser() {
        const auth = getAuth(app);
        auth.onAuthStateChanged(async (user) => {
            if (!user) {
                navigate('/login');
            }
            else
                alert("Already logged in");
        });
    }
    useEffect(() => {
        // localStorage.removeItem('pubuser')
        // const auth = getAuth(app);
        // auth.signOut();
        // console.log(localStorage.getItem('pubuser'));
        // if (checkuser() === "push") {
        //     navigate('/login');
        // }
        // checkuser();
        getallprods();
        document.title = 'Singh Publication | Home';
    }, []);
    function Item(props) {
        const navigate = useNavigate();
        return (
            // <Paper style={{'borderRadius':'0px !important'}}>
            <div onClick={() => {
                if (props.prod == 'empty') {
                    checkuser();
                }
                else if (props.prod)
                    navigate('/product', { state: props.prod })
                else
                    alert("Wait for the prodcts to load")
            }} >
                <img src={props.image} className='w-full h-72 md:h-max' style={{ "maxHeight": '50vw' }} alt="..." />
            </div>
            // </Paper>
        )
    } function Testimonial(props) {
        return (
            // <Paper style={{'borderRadius':'0px !important'}}>
            <div className='w-full flex  justify-center'>
                <div className='p-5 md:p-10 md:w-[70%] flex flex-wrap md:flex-nowrap md:gap-10 rounded-3xl '>
                    <div className='max-w-3xl mx-auto'>
                        <img src={props.image} className="w-full rounded-lg" alt="..." />
                    </div>
                    <div className='w-full text-center md:text-left'>
                        <h1 className=' font-semibold  md:font-bold text-[#315ED2] md:text-3xl' >{props.name}</h1>
                        <h3 className='font-normal  md:font-semibold text- black text-xs md:text-lg' >{props.desig1}</h3>
                        <h3 className='font-normal  md:font-semibold text- black text-xs md:text-lg mb-3' >{props.desig2}</h3>
                        <div className="box py-10 relative mt-10">
                            <p className='text-sm md:text-lg font-medium text-justify md:px-10'>
                                {props.review}
                            </p>
                            <div className="icon-left absolute top-0 left-0 text-3xl text-blue-400"><i className="fa-solid fa-quote-left"></i></div>
                            <div className="icon-right absolute bottom-0 right-0 text-3xl text-blue-400"><i className="fa-solid fa-quote-right"></i></div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            {loading && <LoadingBar />}
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className="w-full flex flex-col justify-center pb-5">
                <div id='mainslider'>

                    <Carousel navButtonsAlwaysVisible="true" indicators="false" animation='slide' duration="800" className='w-full h-full'>

                        <Item image={homepagebg} prod={products[0]} />
                        <Item image={homepagebg2} prod={products[0]} />
                        <Item image={homepagebg3} prod='empty' />

                    </Carousel>

                </div>
                <div className="w-full ">
                    <h1 className="text-5xl font-medium text-center my-5 md:my-10" style={{ 'color': '#315ED2' }}>About The Director</h1>
                    <div className='w-full h-max px-5 md:px-10 justify-center  flex flex-col lg:flex-row sm:flex-col md:flex-col items-center gap-10 my-5 md:my-10'>
                        <div className='max-w-xs'>
                            <img src={author} className="w-full" alt="..." />

                        </div>
                        <div className='sm:w-4/6 text-center lg:text-left'>
                            <h2 className='font-bold text-3xl ' style={{ 'color': '#315ED2' }}>Dr. (Prof) Sher Singh Morodiya</h2>
                            <h2 className='font-semibold text-lg mb-3' style={{ 'color': '#315ED2' }}>Director & Author (Singh Publication)</h2>
                            <p className='text-sm md:text-lg font-medium text-justify'>
                                Dr. (Prof.) Sher Singh Morodiya, received his Master of
                                Nursing Degree from Raj Kumari Amrit Kaur College of Nursing,
                                University of Delhi. He has got Ph.D. Degree in 2013. He started his
                                career after General Nursing Diploma as Basic Nurse at Government
                                dispensary in 1984 and step by step; obtained a chance to work on the
                                post of the Officer on Special Duty to the Additional Chief Secretary
                                (Medical & Health) along with the responsibility of Deputy Director
                                (Nursing) i.e. highest post in Government of Rajasthan for nursing personnel.
                                He is having 39 Years of experience in the field of nursing He has lot of
                                confidence in area of teaching, guiding, examining/evaluating, care of clients,
                                research and management/administrationat various levels of health care settings. He
                                is author and translator of books. He is Editor-in-Chief and member of editorial
                                board in seven peer reviewed/refereed journals from India and abroad. He has been
                                presented many research papers International Conferences and four in National
                                conferences. He has received BEST PAPER AWARD in an International Conference
                                held in 2019. He is life time member in ten professional bodies.
                            </p>
                            <div className="btn mt-5 sm:mt-10 cursor-pointer mx-auto sm:mx-0 w-fit px-14 py-4 bg-white border-2 border-[#315ED2] hover:bg-[#315ED2] hover:text-white text-[#315ED2] font-bold rounded-full" onClick={(e) => {
                                e.preventDefault();
                                navigate('/about');
                            }}>Know More</div>
                        </div>
                    </div>

                </div>
                <h1 className="text-5xl font-medium text-center my-5 md:my-10" style={{ 'color': '#315ED2' }}>Best Sellers</h1>
                <div className='w-full flex md:px-0 px-3 mx-auto flex-wrap gap-10 justify-center sm:mb-10'>
                    {/* <BookComp />
                        <BookComp />
                        <BookComp />
                        <BookComp />
                        <BookComp />
                        <BookComp /> */}
                    {products.map((prod, index) => {
                        return <BookComp key={index} prod={prod} user={user} />
                    })}

                </div>
                <div className='w-full' style={{ 'backgroundColor': '#315ED2' }}>
                    {/* <h1 className="text-2xl font-semibold text-center" style={{ 'color': 'white' }}>Also Available on Playstore</h1>
                    <h1 className="text-sm font-normal my-2" style={{ 'color': 'white' }}>Enjoy the Best collection book here</h1>
                    <h1 className="text-sm font-semibold" style={{ 'color': 'white' }}>Download Now!</h1> */}
                    <Link target='_blank' to="https://play.google.com/store/games?pcampaignid=MKT-EDR-apac-in-1003227-med-hasem-py-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700065205026415_creativeid_535350509927_device_c"><img src={playstore} className="w-full" alt="..."></img></Link>
                </div>
                <h1 className="text-5xl font-medium mx-auto w-max my-5 sm:my-10" style={{ 'color': '#315ED2' }}>Testimonials</h1>
                <div id='mainslider' className='mb-5'>

                    <Carousel navButtonsAlwaysVisible="true" indicators="false" animation='slide' duration="800">

                        <Testimonial name="Mrs. Deby Chakraborty" desig1="Ph.D. Scholar, M.N.(OBG-RAKCON-DU)" desig2="Assistant Professor, Govt. College of Nursing, Agartalla (Tripura)" image={testimonial2} review="This book is written in a very simple language.It is easily understandable and very comprehensive.I hope that students can gain knowledge about research methodology and implement their knowledge.My best wishes to Prof Dr.Sher Singh." />
                        <Testimonial name="Mrs. Gulshan Roy Chowdhury" desig1="Ph.D. Scholar, M.N.(OBG-RAKCON-DU)" desig2="Lecturer, College of Nursing ABVIMS & Dr. R.M.L. Hospital, New Delhi" image={testimonial1} review="VERY SYSTEMATIC AND ORGANISED CONTENTS OF EACH CHAPTER IN A COMPREHENSIVE AND EASY LANGUAGE. EXAMPLES IN THE STATISTICS CHAPTER ARE VERY RELEVANT AND EFFECTIVELY MENTIONED." />
                        <Testimonial name="Mrs. Gulshan Roy Chowdhury" desig1="Ph.D. Scholar, M.N.(OBG-RAKCON-DU)" desig2="Lecturer, College of Nursing ABVIMS & Dr. R.M.L. Hospital, New Delhi" image={testimonial1} review="VERY SYSTEMATIC AND ORGANISED CONTENTS OF EACH CHAPTER IN A COMPREHENSIVE AND EASY LANGUAGE. EXAMPLES IN THE STATISTICS CHAPTER ARE VERY RELEVANT AND EFFECTIVELY MENTIONED." />
                        <Testimonial name="Mrs. Gulshan Roy Chowdhury" desig1="Ph.D. Scholar, M.N.(OBG-RAKCON-DU)" desig2="Lecturer, College of Nursing ABVIMS & Dr. R.M.L. Hospital, New Delhi" image={testimonial1} review="VERY SYSTEMATIC AND ORGANISED CONTENTS OF EACH CHAPTER IN A COMPREHENSIVE AND EASY LANGUAGE. EXAMPLES IN THE STATISTICS CHAPTER ARE VERY RELEVANT AND EFFECTIVELY MENTIONED." />
                        {/* <Testimonial />
                        <Testimonial /> */}
                    </Carousel>

                </div>
                <div className='retailer w-full sm:my-10'>
                    <button onClick={(e) => {
                        e.preventDefault();
                        navigate('/contact');
                    }} className='w-full'><img src={retailer} alt="" className='w-full' /></button>
                </div>
            </div>
        </>
    );
}
export default Home;



