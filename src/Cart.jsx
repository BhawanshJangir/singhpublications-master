import React, { useEffect } from 'react';
import sample from './assets/sample.png';
import book from './assets/book.png';
import star from './assets/star.png';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import app from './Firebase';
import LoadingBar from './comps/Loadingbar';
function BookComp(props) {
    const navigate = useNavigate();
    return (
        <div className=' my-10 mx-2 rounded-xl p-5 flex flex-wrap justify-center gap-5' style={{ 'border': '1px solid #315ED2', }} >
            <img src={props.prod.image_url} className="w-40 mx-auto" alt="" onClick={(e) => {
                e.preventDefault();
                navigate('/product', { state: props.prod })
            }} />
            <div className='' >
                <div onClick={(e) => {
                    e.preventDefault();
                    navigate('/product', { state: props.prod })
                }}>

                    <h1 className="text-md font-bold" style={{ 'color': '#315ED2' }}>{props.prod.title}</h1>
                    <h1 className="text-base font-semibold" style={{ 'color': '#777777' }}>{props.prod.category}</h1>
                    <h1 className="text-sm font-medium" style={{ 'color': '#777777' }}>{props.prod.subtitle}</h1>
                    <div className='w-fit mt-1 flex items-center'>
                        <h1 className="text-base font-medium mr-1" style={{ 'color': '#777777' }}>{props.prod.rating}</h1>
                        <img className='mx-1 w-4' src={star} alt="" />
                        <img className='mx-1 w-4' src={star} alt="" />
                        <img className='mx-1 w-4' src={star} alt="" />
                        <img className='mx-1 w-4' src={star} alt="" />
                        <img className='mx-1 w-4' src={star} alt="" />
                    </div>
                    <h1 className="text-sm font-medium" style={{ 'color': '#777777' }}>11 Jan 2023</h1>
                </div>
                <div className='mt-2 justify-center flex flex-col'>
                    <h1 className="md:text-2xl text-lg font-bold" style={{ 'color': '#315ED2' }}>{props.prod.price} Rs.</h1>
                    <button className=" btn mt-3 cursor-pointer w-fit px-7 py-3 bg-white border-2 border-[#315ED2] hover:bg-[#315ED2] hover:text-white text-[#315ED2] font-bold rounded-full" onClick={(e) => {
                        // console.log(user.accessToken);
                        props.setloading(true);
                        e.preventDefault();
                        axios.post("https://singhpublications.onrender.com/api/user/removefromcart", {


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
            {/* <div style={{ 'width': "1px", 'height': '150px', 'backgroundColor': '#315ED2' }}></div> */}
        </div>
    );
}

function Cart() {
    const navigate = useNavigate();
    const [user, setuser] = useState(JSON.parse(localStorage.getItem('pubuser')));
    const [loading, setloading] = useState(true);
    const [items, setitems] = useState([]);
    const [total_price, settotal_price] = useState(0);
    async function checkuser() {
        const auth = getAuth(app);
        auth.onAuthStateChanged(async (user) => {
            if (!user) {
                navigate('/login');
            }

        });
    }
    async function getitems() {
        let arr = [];
        let price = 0;
        setloading(true);
        console.log(localStorage.getItem('pubuser'));
        let cart = JSON.parse(localStorage.getItem('pubuser')).cart;
        console.log(cart);
        for (let index = 0; index < cart.length; index++) {
            const element = cart[index];
            await axios.get(`https://singhpublications.onrender.com/api/product/products`, { params: { id: element } }).then((res) => {
                arr.push(res.data);
                price += res.data.price;
            }
            ).catch((err) => {
                console.log(err);
                alert("error");
            }
            )
        }
        setloading(false);
        setitems(arr);
        settotal_price(price);
    }
    useEffect(() => {
        checkuser();
        getitems();
        document.title = 'Singh Publication | Cart';
    }, []);

    return (
        <>
            {loading && <LoadingBar />}
            <div className='w-full my-10 flex justify-center'>
                <div className=' w-full flex justify-center flex-col items-center flex-wrap' >
                    <h1 className="text-5xl w-max font-medium my-" style={{ 'color': '#315ED2' }}>Cart</h1>
                    <div className='w-full flex justify-center flex-wrap'>
                        {
                            items.length != 0 ?
                                items.map((item, index) => {
                                    return (
                                        <BookComp setloading={setloading} key={index} prod={item} user={user} setuser={setuser} getitems={getitems} />
                                    )
                                }
                                ) : <h1 className="text-2xl font-medium mb-5 mt-5" style={{ 'color': 'gray' }}>No item in Cart</h1>
                        }
                    </div>
                    <div className='my-4 mx-2 max-w-xs w-full rounded-xl p-3 relative flex items-center justify-around' style={{ 'border': '1px solid #315ED2' }} >

                        <div className='w-auto flex flex-col items-center'>
                            <h1 className="text-3xl font-bold" style={{ 'color': '#315ED2' }}>{total_price} <span className="text-3xl font-medium" style={{ 'color': '#315ED2' }}>Rs. Total</span> </h1>
                            <button onClick={(e) => {
                                e.preventDefault();
                                if (items.length == 0) {
                                    alert("No items in cart");
                                    return;
                                }
                                navigate('/deliveryaddress', { state: { "totalAmount": total_price } });
                            }} className=" btn mt-10 cursor-pointer w-fit px-5 py-4 bg-white border-2 border-[#315ED2] hover:bg-[#315ED2] hover:text-white text-[#315ED2] font-bold rounded-full">
                                Proceed to Buy
                            </button>

                        </div>
                        <div style={{ 'width': "1px", 'height': '80%', 'backgroundColor': '#315ED2' }}></div>
                        <div className='h-full w-auto justify-center flex flex-col items-center'>
                            <h1 className="text-3xl font-bold" style={{ 'color': '#315ED2' }}>{items.length}</h1>
                            <h1 className="text-lg font-semibold" style={{ 'color': '#315ED2' }}>Items</h1>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;