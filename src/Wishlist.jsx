import React from 'react';
import sample from './assets/sample.png';
import book from './assets/book.png';
import star from './assets/star.png';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import app from './Firebase';
import LoadingBar from './comps/Loadingbar';
function BookComp(props) {
    const navigate = useNavigate();
    return (
        <div className=' my-4 mx-2 rounded-xl p-5 flex flex-wrap gap-5' style={{ 'border': '1px solid #315ED2', }} >
            <img src={props.prod.image_url} className="h-40 mx-auto" alt="" onClick={(e) => {
                e.preventDefault();
                navigate('/product', { state: props.prod })
            }} />
            <div className="content flex flex-wrap gap-5" >
                <div className='' style={{}} onClick={(e) => {
                    e.preventDefault();
                    navigate('/product', { state: props.prod })
                }}>
                    <h1 className="text-md font-bold mb-0 mx-0 mt-0" style={{ 'color': '#315ED2' }}>{props.prod.title}</h1>
                    <h1 className="text-base font-semibold mb-0 mx-0  mt-0" style={{ 'color': '#777777' }}>{props.prod.category}</h1>
                    <h1 className="text-sm font-medium mb-0 mx-0  mt-0" style={{ 'color': '#777777' }}>{props.prod.subtitle}</h1>
                    <div className='w-max mt-1 ml-0 flex items-center'>
                        <h1 className="text-base font-medium mb-0 mr-1   mt-0" style={{ 'color': '#777777' }}>{props.prod.rating}</h1>
                        <img className='mx-1 w-4' src={star} alt="" />
                        <img className='mx-1 w-4' src={star} alt="" />
                        <img className='mx-1 w-4' src={star} alt="" />
                        <img className='mx-1 w-4' src={star} alt="" />
                        <img className='mx-1 w-4' src={star} alt="" />
                    </div>
                    <h1 className="text-sm font-medium mb-0 mx-0  mt-0" style={{ 'color': '#777777' }}>11 Jan 2023</h1>
                </div>

                <div className=' justify-center flex flex-col items-center'>
                    <h1 className="md:text-2xl text-lg font-bold" style={{ 'color': '#315ED2' }}>{props.prod.price} Rs.</h1>
                    <button className=" btn mt-2 cursor-pointer w-fit px-7 py-4 bg-white border-2 border-[#315ED2] hover:bg-[#315ED2] hover:text-white text-[#315ED2] font-bold rounded-full" onClick={(e) => {
                        // console.log(user.accessToken);
                        props.setloading(true);
                        e.preventDefault();
                        axios.post("https://singhpublications.onrender.com/api/user/removefromwishlist", {


                            "product_id": props.prod.id,

                            //how to pass query params and headers in axios

                        }, {
                            headers: {
                                'Authorization': `Bearer ${props.user.accessToken}`
                            },
                            params: {
                                'id': props.user.id
                            }
                        },).then((res) => {
                            props.setloading(false);
                            let newuser = res.data;
                            newuser['accessToken'] = props.user.accessToken;
                            localStorage.setItem('pubuser', JSON.stringify(newuser));
                            props.setuser(newuser);
                            props.getitems();
                            // localStorage.setItem('pubuser', JSON.stringify(res.data));
                        }
                        ).catch((err) => {
                            props.setloading(false);
                            alert("error");
                            console.log(err);
                        }
                        )

                    }}>
                        Remove
                    </button>
                </div>
            </div>

        </div>
    );
}


function Wishlist() {
    const navigate = useNavigate();
    const [user, setuser] = useState(JSON.parse(localStorage.getItem('pubuser')));
    const [items, setitems] = useState([]);
    const [loading, setloading] = useState(false);
    async function checkuser() {
        const auth = getAuth(app);
        auth.onAuthStateChanged(async (user) => {
            if (!user) {
                navigate('/login');
            }

        });
    }
    async function getitems() {
        setloading(true);
        let arr = [];
        console.log(localStorage.getItem('pubuser'));
        let wishlist = JSON.parse(localStorage.getItem('pubuser')).wishlist;
        for (let index = 0; index < wishlist.length; index++) {
            const element = wishlist[index];
            await axios.get(`https://singhpublications.onrender.com/api/product/products`, { params: { id: element } }).then((res) => {
                arr.push(res.data);
            }
            ).catch((err) => {
                console.log(err);
                alert("error");
            }
            )
        }
        setloading(false);
        setitems(arr);
    }
    useEffect(() => {
        checkuser();
        getitems();
        document.title = 'Singh Publication | Wishlist';
    }, []);
    return (
        <>
            {loading && <LoadingBar />}
            <div className='w-full flex py-10 justify-center'>
                <div className='md:w-4/5 w-full  flex justify-center flex-col items-center flex-wrap' >
                    <h1 className="text-5xl w-max font-medium mb-5 mt-5" style={{ 'color': '#315ED2' }}>Wishlist</h1>
                    <div className='w-full flex justify-center flex-wrap gap-5 my-10'>

                        {items.length != 0 ? items.map((item, index) => {
                            return (
                                <BookComp setloading={setloading} key={index} prod={item} user={user} setuser={setuser} getitems={getitems} />
                            )
                        }) : <h1 className="text-2xl font-medium mb-5 mt-5" style={{ 'color': 'gray' }}>No item in wishlist</h1>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Wishlist;