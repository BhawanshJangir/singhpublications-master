import React, { useEffect } from "react";
import Logo from '../assets/logofinal.png';
import profile from '../assets/profile.png';
import { Save } from "@mui/icons-material";
import cart from '../assets/cart.png';
import { AccountBox, Visibility } from "@mui/icons-material";
import search from '../assets/search.png';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Logout } from "@mui/icons-material";
import { Favorite } from "@mui/icons-material";
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import app from '../Firebase';
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
// import Drawer from "@mui/material";
import { Menu } from "@mui/icons-material";
import { Box } from "@mui/material";

function Modal(props) {

    return (
        <>

            {props.showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}

                                {/*body*/}
                                <div className="relative pt-6 px-6 flex-auto">
                                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                        Are you sure you want to logout?
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b gap-5">
                                    <button
                                        className=" className= w-fit px-8 py-2 bg-white border-2 border-[#315ED2] text-[#315ED2] hover:text-white  hover:bg-[#315ED2] rounded-full"
                                        type="button"
                                        onClick={() => props.setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="  className= w-fit px-8 py-2 bg-white border-2 border-[#315ED2] text-white rounded-full"
                                        type="button"
                                        onClick={() => {
                                            props.logout();
                                            props.setShowModal(false);
                                        }}
                                        style={{ 'backgroundColor': "#315ED2" }}
                                    >
                                        Yes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}
function Navbar() {
    const navigate = useNavigate();
    const auth = getAuth(app);
    const [state, setState] = useState({
        // top: false,
        left: false,
        // bottom: false,
        // right: false,
    });
    async function checkuser() {
        const auth = getAuth(app);
        auth.onAuthStateChanged(async (user) => {
            if (!user) {
                return false;
            }
            return true;

        });

    }
    console.log(window.location.href);
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => (
        <Box className="p-3 h-full lg:hidden overflow-hidden " style={{ 'backgroundColor': 'white' }}
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 280 }}
            role="presentation"
        >


            <div className="flex flex-col">
                {/* <img src={navimg} alt="" className="w-full" /> */}
                <img src={require("../assets/navbar 1-04 2.png")} alt="" srcset="" />

                <Box onClick={toggleDrawer(anchor, false)}>
                    <div className="flex justify-start cursor-pointer text-white bg-[#315ED2]" onClick={(e) => {
                        e.preventDefault();
                        navigate('/');
                    }}><h3 className=" mx-2 font-semibold py-2" ><i className="fa-solid fa-house mr-2"></i>Home</h3> </div>
                </Box>

                <Box onClick={toggleDrawer(anchor, false)}>
                    <div className="flex justify-start cursor-pointer hover:text-white hover:bg-slate-400" onClick={(e) => {
                        e.preventDefault();
                        navigate('/about');
                    }}><h3 className=" mx-2 font-semibold py-2" ><i className="fa-solid fa-address-card mr-2"></i>About Us</h3> </div>
                </Box>

                <Box onClick={toggleDrawer(anchor, false)}>
                    <div className="flex justify-start cursor-pointer hover:text-white hover:bg-slate-400" onClick={(e) => {
                        e.preventDefault();
                        navigate('/contact');
                    }}><h3 className="mx-2 font-semibold py-2" ><i className="fa-solid fa-phone mr-2"></i>Contact Us</h3> </div>
                </Box>

                <Box onClick={toggleDrawer(anchor, false)}>
                    <div className="flex justify-start cursor"><a href="https://play.google.com/store/games?pcampaignid=MKT-EDR-apac-in-1003227-med-hasem-py-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700065205026415_creativeid_535350509927_device_c" className="w-full"><li className='w-full hover:text-white hover:bg-slate-400  px-2 py-2 list-none font-semibold'><i className="fa-solid fa-mobile mr-2"></i>Mobile App</li></a></div>
                </Box>

                <Box onClick={toggleDrawer(anchor, false)}>
                    <div className="flex justify-start cursor-pointer hover:text-white hover:bg-slate-400" onClick={(e) => {
                        e.preventDefault();
                        navigate('/careers');
                    }}><h3 className="mx-2 font-semibold py-2" ><i className="fa-solid fa-arrow-up-right-dots mr-2"></i>Careers</h3> </div>
                </Box>

            </div>
            {
                localStorage.getItem('pubuser') != null ? <ul className="flex flex-col">
                    <Box onClick={toggleDrawer(anchor, false)}>
                        <div className="flex justify-start cursor-pointer hover:text-white hover:bg-slate-400" onClick={(e) => {
                            e.preventDefault();
                            navigate('/cart');
                        }}><h3 className="mx-2 font-semibold py-2" ><i className="fa-solid fa-cart-shopping mr-2"></i>Cart</h3> </div>
                    </Box>

                    <Box onClick={toggleDrawer(anchor, false)}>
                        <div className="flex justify-start cursor-pointer hover:text-white hover:bg-slate-400" onClick={(e) => {
                            e.preventDefault();
                            navigate('/Wishlist');
                        }}><h3 className="mx-2 font-semibold py-2" ><i className="fa-solid fa-heart mr-2"></i>Wishlist</h3> </div>
                    </Box>
                    <Box onClick={toggleDrawer(anchor, false)}>
                        <div className="flex justify-start cursor-pointer hover:text-white hover:bg-slate-400" onClick={(e) => {
                            e.preventDefault();
                            navigate('/orders');
                        }}><h3 className="mx-2 font-semibold py-2" ><i className="fa-solid fa-cube mr-2"></i>Orders</h3> </div>
                    </Box>

                    <Box onClick={toggleDrawer(anchor, false)}>
                        <div className="flex justify-start cursor-pointer hover:text-white hover:bg-slate-400" onClick={(e) => {
                            e.preventDefault();
                            navigate('/accountsetting');
                        }}><h3 className="mx-2 font-semibold py-2" ><i className="fa-solid fa-gear mr-2"></i>Account Settings</h3> </div>
                    </Box>

                    <Box onClick={toggleDrawer(anchor, false)}>
                        <div className="flex justify-start cursor-pointer hover:text-white hover:bg-slate-400" onClick={(e) => {
                            // e.preventDefault();
                            // localStorage.removeItem("pubuser");
                            // auth.signOut();
                            // navigate('/');
                            setShowModal(true);
                        }}><h3 className="mx-2 font-semibold py-2" ><i className="fa-solid fa-arrow-right-from-bracket mr-2"></i>Logout</h3> </div>
                    </Box>



                </ul> : <div className="flex justify-around mt-5">
                    <button className=" text-white md:text-base text-xs  px-4 py-1 rounded-xl focus:outline-none" style={{ 'backgroundColor': "#315ED2" }} onClick={(e) => {
                        // console.log(user.accessToken);
                        e.preventDefault();
                        navigate('/login');
                    }}>
                        Login
                    </button>
                    <button className=" text-white md:text-base text-xs mx-3  px-4 py-1  rounded-xl focus:outline-none" style={{ 'backgroundColor': "#315ED2" }} onClick={(e) => {
                        // console.log(user.accessToken);
                        e.preventDefault();
                        navigate('/signup');
                    }}>
                        Sign Up
                    </button>
                </div>
            }
        </Box >
    );

    function logout() {
        auth.signOut();
        localStorage.removeItem("pubuser");
        navigate('/');
        setVisibility("hidden");
    }
    const [Visibility, setVisibility] = useState("hidden");
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <div className="navbar sticky top-0 z-50 bg-white list-none">
                <div className="upper w-full py-1 sm:py-2 bg-[#315ED2] flex flex-wrap gap-1 sm:gap-5  justify-center items-center text-white">
                    <div className="content flex flex-wrap text-xs sm:text-base justify-center items-center gap-1 ">
                        <li className=' md:px-8 h-full py-1 sm:py-2 border-white'><i className="fa-solid fa-clock mr-1"></i> 9:00 am - 6:00 pm | Mon-Fri</li>
                    </div>
                    <div className="social-icons flex items-center text-xs sm:text-base">
                        <li><a href="https://www.google.com/maps/place/Singh+Publication,+401,+New+Sanganer+Rd,+Katewa+Nagar,+Devi+Nagar,+Shyam+Nagar,+Jaipur,+Rajasthan+302019/@26.883908,75.761727,15z/data=!4m6!3m5!1s0x396db5558aea2575:0xd53fbb24d469e795!8m2!3d26.8839076!4d75.7617268!16s%2Fg%2F11tghjkpdy?hl=en&gl=IN" className='px-1 sm:px-5 md:px-8 h-full py-1 sm:py-2 border-l-2 border-white'> <i className="fa-solid fa-location-dot"></i></a></li>
                        <li><a href="tel:9414784402" className='px-1 sm:px-5 md:px-8 h-full py-1 sm:py-2 border-x-2 border-white'> <i className="fa-solid fa-phone"></i></a></li>
                        <li><a target="_blank" href="mailto: singhpublicationjaipur@gmail.com" className='px-1 sm:px-5 md:px-8 h-full py-1 sm:py-2 border-r-2 border-white'><i className="fa-solid fa-envelope"></i></a></li>
                        <li><a target="_blank" href="https://www.facebook.com/singhpublication" className='px-1 sm:px-5 md:px-8 h-full py-1 sm:py-2 border-r-2 border-white'> <i className="fa-brands fa-facebook-f"></i></a></li>
                        <li><a target="_blank" href="https://www.instagram.com/singhpublication/" className='px-1 sm:px-5 md:px-8 h-full py-1 sm:py-2 border-r-2 border-white'> <i className="fa-brands fa-instagram"></i></a></li>
                        <li><a target="_blank" href="https://twitter.com/SinghPub_Jaipur" className='px-1 sm:px-5 md:px-8 h-full py-1 sm:py-2 border-r-2 border-white'> <i className="fa-brands fa-linkedin-in"></i></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/company/singh-publication/" className='px-1 sm:px-5 md:px-8 h-full py-1 sm:py-2 border-white'> <i className="fa-brands fa-twitter"></i></a></li>
                    </div>
                </div>







                <Modal showModal={showModal} setShowModal={setShowModal} logout={logout} />
                <div className="lg:hidden block navbar">
                    {['left'].map((anchor) => (
                        <React.Fragment key={anchor}>
                            {/* <Button className='text-white mx-5 text-left w-20' onClick={toggleDrawer(anchor, true)}>Filters</Button> */}
                            <div className='lg:hidden xl:hidden relative w-full flex items-center justify-between 2xl:hidden' >
                                <div className="flex items-center absolute">
                                    <Menu className='text-black mx-5 mt-0' onClick={toggleDrawer(anchor, true)} />

                                </div>
                                {/* <div className="rounded-3xl flex items-center p-3 mr-0 mt-2 mb-2" style={{ 'border': '1px solid #D1D1D1' }}>
                                <input type="text" className="focus:outline-none text-center w-52" placeholder="Search Here" />
                                <img className="w-6 cursor-pointer" src={search} alt="" />
                            </div> */}

                                <div className="flex items-center w-full justify-center">
                                    <Link to="/"><img src={Logo} className="w-20 p-3 mt-0"></img></Link>
                                </div>
                            </div>
                            <Drawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                            >
                                {list(anchor)}
                            </Drawer>
                        </React.Fragment>
                    ))}
                </div>







                <div className="hidden main my-5 text-black lg:flex flex-wrap lg:flex-nowrap gap-5 items-center justify-between px-5">
                    <div className="logo w-fit">
                        <Link to="/"><img src={Logo} className=" w-32"></img></Link>
                    </div>
                    <div className="list  text-lg font-bold flex flex-wrap gap-4 justify-center items-center">

                        <div className="cursor-pointer" onClick={(e) => {
                            e.preventDefault();
                            navigate('/');
                        }}><li className='active:border-[#315ed2] px-2 py-2 border-b-4 text-[#315ed2] border-[#315ed2]'>Home</li> </div>
                        <div className="cursor-pointer" onClick={(e) => {
                            e.preventDefault();
                            navigate('/about');
                        }}><li className='active:border-[#315ed2] px-2 py-2 border-b-4 border-transparent hover:border-slate-400 duration-300'>About Us</li> </div>
                        {localStorage.getItem('pubuser') != null ? <div className="cursor-pointer" onClick={(e) => {
                            e.preventDefault();
                            navigate('/books');
                        }}> <li className='active:border-[#315ed2] px-2 py-2 border-b-4 border-transparent hover:border-slate-400 duration-300'>Books</li> </div> : null}
                        <div className="cursor-pointer" ><a href="https://play.google.com/store/games?pcampaignid=MKT-EDR-apac-in-1003227-med-hasem-py-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700065205026415_creativeid_535350509927_device_c"><li className='active:border-[#315ed2] px-2 py-2 border-b-4 border-transparent hover:border-slate-400 duration-300'>Mobile App</li></a>  </div>
                        <div className="cursor-pointer" onClick={(e) => {
                            e.preventDefault();
                            navigate('/careers');
                        }}><li className='active:border-[#315ed2] px-2 py-2 border-b-4 border-transparent hover:border-slate-400 duration-300'>Career</li> </div>
                        <div className="cursor-pointer" onClick={(e) => {
                            e.preventDefault();
                            navigate('/contact');
                        }}><li className='active:border-[#315ed2] px-2 py-2 border-b-4 border-transparent hover:border-slate-400 duration-300'>Contact Us</li> </div>

                    </div>
                    {localStorage.getItem('pubuser') != null ? <div className="flex items-center relative mr-4" >
                        {/* <div className="rounded-3xl flex items-center p-3 mr-6" style={{ 'border': '1px solid #D1D1D1' }}>
                        <input type="text" className="focus:outline-none text-center" placeholder="Search Here" />
                        <img className="w-6 cursor-pointer" src={search} alt="" />
                    </div> */}
                        <div onClick={(e) => {
                            e.preventDefault();
                            navigate('/wishlist');
                        }} className="w-12 h-12 ml-4 flex items-center justify-center rounded-full p-2 cursor-pointer" style={{ 'border': '1px solid #D1D1D1' }}>
                            <Favorite style={{ 'color': '#315ED2' }} className="w-5" alt="" />
                        </div>

                        <div onClick={(e) => {
                            e.preventDefault();
                            navigate('/cart');
                        }} className="w-12 h-12 ml-4 flex items-center justify-center rounded-full p-2 cursor-pointer" style={{ 'border': '1px solid #D1D1D1' }}>
                            <img className="w-5" src={cart} alt="" />
                        </div>
                        <div onClick={(e) => {
                            e.preventDefault();
                            if (Visibility === "hidden") {
                                setVisibility("visible");
                            }
                            else {
                                setVisibility("hidden");
                            }
                        }} className="z-20 w-12 h-12 ml-4 flex items-center justify-center rounded-full p-2 cursor-pointer" style={{ 'border': '1px solid #D1D1D1' }}>
                            <img className="w-5" src={profile} alt="" />
                        </div>
                        <div className={Visibility + " " + `absolute right-0 px-4 py-2 top-16 h-max w-48 rounded flex justify-center flex-col items-center related`}>
                            <div style={{
                                'border': '1px solid #777777',
                            }} onClick={(e) => {
                                e.preventDefault();
                                navigate('/accountsetting');
                                setVisibility("hidden");
                            }} className=" w-44  my-1 flex items-center justify-center cursor-pointer py-2 px-4 rounded" >
                                <h1 className="text-sm font-medium " style={{ 'color': 'rgba(153, 153, 153, 1)' }}>Account Settings</h1>
                            </div>



                            <div style={{
                                'border': '1px solid #777777',

                            }} onClick={(e) => {
                                e.preventDefault();
                                navigate('/orders');
                                setVisibility("hidden");
                            }} className=" w-44 py-2 px-4 rounded  my-1 flex items-center justify-center cursor-pointer" >
                                <h1 className="text-sm font-medium" style={{ 'color': 'rgba(153, 153, 153, 1)' }}>Orders</h1>
                            </div>
                            <div style={{
                                'border': '1px solid #777777',

                            }} onClick={(e) => {

                                setShowModal(true)
                            }} className="w-44 py-2 px-4 rounded  my-1 flex items-center justify-center cursor-pointer" >
                                <h1 className="text-sm font-medium " style={{ 'color': 'rgba(153, 153, 153, 1)' }}>Logout</h1>
                            </div>

                        </div>

                    </div> : <div className="flex gap-5">
                        <button className=" w-fit px-8 py-2 bg-white border-2 border-[#315ED2] text-[#315ED2] rounded-full" onClick={(e) => {
                            // console.log(user.accessToken);
                            e.preventDefault();
                            navigate('/login');
                        }}>
                            Log In
                        </button>
                        <button className=" w-fit px-8 py-2 bg-white border-2 border-[#315ED2] text-[#315ED2] rounded-full" onClick={(e) => {
                            // console.log(user.accessToken);
                            e.preventDefault();
                            navigate('/signup');
                        }}>
                            Sign Up
                        </button>
                    </div>
                    }
                </div>

            </div>
        </>
    );
}

export default Navbar;