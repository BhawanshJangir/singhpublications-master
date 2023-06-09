import React from "react";
import sample from './assets/sample.png';
import book from './assets/book.png';
import star from './assets/star.png';
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import app from './Firebase';
function BookComp(props) {
    return (
        <div className=' my-4 mx-2 rounded-xl p-2 flex items-center'>
            <div className='flex flex-wrap'>
                {props.order.items.map((item, index) => {
                    return <div key={index} className='flex my-2 flex-wrap gap-3'>
                        <img src={book} className="mx-auto h-auto" alt="" />
                        <div className='w-full md:w-auto ml-2 mr-5'>
                            <h1 className="text-md font-bold" style={{ 'color': '#315ED2' }}>{item.title}</h1>

                            <h1 className="text-sm font-medium" style={{ 'color': '#777777' }}>{item.subtitle}</h1>
                            <div className='mt-1 flex justify-center items-center'>
                                <h1 className="text-base font-medium mr-1" style={{ 'color': '#777777' }}>{item.rating}</h1>
                                <img className='mx-1 w-4' src={star} alt="" />
                                <img className='mx-1 w-4' src={star} alt="" />
                                <img className='mx-1 w-4' src={star} alt="" />
                                <img className='mx-1 w-4' src={star} alt="" />
                                <img className='mx-1 w-4' src={star} alt="" />
                            </div>
                            <h1 className="text-sm font-medium" style={{ 'color': '#777777' }}>11 Jan 2023</h1>
                            <div className='w-full md:w-fit mx-auto mt-10 flex flex-col items-center'>
                                <h1 className="text-2xl font-bold" style={{ 'color': '#315ED2' }}>{props.order.price} Rs.</h1>
                                <button onClick={(e) => {
                                    e.preventDefault();

                                }} className="btn mt-5 cursor-pointer w-fit px-7 py-2 bg-white border-2 border-[#315ED2] hover:bg-[#315ED2] hover:text-white text-[#315ED2] font-bold rounded-full">
                                    Invoice
                                </button>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
}



function Orderdetails() {
    const navigate = useNavigate();
    async function checkuser() {
        const auth = getAuth(app);
        auth.onAuthStateChanged(async (user) => {
            if (!user) {
                navigate('/login');
            }

        });
    }
    const location = useLocation();
    useEffect(() => {
        checkuser();
        document.title = 'Singh Publication | Order Details';
    }, []);
    return (
        <>
            <div className="w-full px-5 py-10 flex items-center justify-center ">
                <div className="w-full lg:w-4/5 p-5 bg-white flex flex-col items-center text-center justify-center rounded-lg shadow-2xl">
                    <h1 className="text-6xl font-medium text-center" style={{ 'color': '#315ED2' }}>Order Details</h1>
                    <BookComp order={location.state.order} />
                    <div className=' my-4 mx-2 rounded-3xl p-2 flex text-center items-center justify-center flex-wrap gap-3'>
                        <h1 className="text-lg font-semibold" style={{ 'color': '#777777' }}>Delivery Status  </h1><span className="text-4xl font-light hidden sm:block" style={{ 'color': '#777777' }}>|</span>
                        <h1 className="text-lg font-semibold flex items-center" style={{ 'color': '#315ED2' }}>{location.state.order.status} <span className="text-lg font-normal mr-1 text-gray-400">13 Jan 2023</span></h1>
                        <h1 className="text-lg font-normal mr-1" style={{ 'color': '#777777' }}>  </h1>
                    </div>
                    <h1 className="text-lg font-semibold ml-3" style={{ 'color': '#315ED2' }}>Add Review</h1>
                    <textarea className="mt-4 rounded-3xl p-4 focus:outline-none resize-none w-full max-w-xl" style={{  'border': '1px solid #777777' }} name="" id="" cols="20" rows="5" placeholder="Review"></textarea>
                    <div className=' mt-4 w-full flex justify-center items-center mx-auto'>
                        <img className='mx-1 w-8' src={star} alt="" />
                        <img className='mx-1 w-8' src={star} alt="" />
                        <img className='mx-1 w-8' src={star} alt="" />
                        <img className='mx-1 w-8' src={star} alt="" />
                        <img className='mx-1 w-8' src={star} alt="" />
                    </div>
                    <button className="btn mt-5 cursor-pointer w-fit px-14 py-4 bg-white border-2 border-[#315ED2] hover:bg-[#315ED2] hover:text-white text-[#315ED2] font-bold rounded-full">
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
}
export default Orderdetails;