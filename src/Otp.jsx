import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import app from './Firebase';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Transform } from "@mui/icons-material";
function Otp() {
    const navigate = useNavigate();
    const location = useLocation();
    const [one, setcode1] = useState(1);
    const [two, setcode2] = useState(1);
    const [three, setcode3] = useState(1);
    const [four, setcode4] = useState(1);
    const [five, setcode5] = useState(1);
    const [six, setcode6] = useState(1);
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);
    const auth = getAuth(app);
    const [result, setresult] = useState();
    const generaterecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                // onSignInSubmit();
                console.log(response);
            }
        }, auth);
    }
    const verifyuser = async () => {
        generaterecaptcha();
        let appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, `+91${location.state.phone}`, appVerifier)
            .then((confirmationResult) => {
                // auth.setPersistence(auth.Persistence.LOCAL)
                console.log(confirmationResult);
                setresult(confirmationResult);
            }).catch((error) => {
                toast.warning(error);
                // Error; SMS not sent
                // ...
            });
    }
    const matchcode = async () => {
        let code = one + two + three + four + five + six;
        result.confirm(code).then((result) => {
            localStorage.setItem('pubuser', JSON.stringify(location.state.user));
            navigate('/')
        }).catch((error) => {
            console.log(error);
        });
    }
    useEffect(() => {
        verifyuser();
        console.log(location.state.user)
        document.title = 'Singh Publication | Login';
    }, []);

    return (
        <>
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
            <div id="sign-in-button"></div>
            <div className="w-screen h-max py-8 flex items-center justify-center">
            </div>
            <div className="otp min-h-5/6  grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="welcome-singh h-full p-[3vw] w-full flex justify-center items-center text-white bg-[#315ED2]">
                    <h1 className="text-5xl pb-2  w-fit border-b-4 mx-auto border-white font-medium text-center my-5 md:my-10 leading-[4rem]">Verify your <br /> OTP</h1>
                </div>
                <div className="otp-form flex items-center w-full px-[5vw] py-[5vw] bg-white">
                    <form action="" className="mx-auto w-full grid justify-center text-center gap-[1vw] p-[1vw] rounded-md shadow-2xl">
                        <div className="text">
                            <h1 className="py-5 text-3xl font-semibold ">OTP is sent to {location.state.phone}</h1>
                        </div>
                        <div className="input flex gap-5 ">
                            <div className='h-6 w-6 md:w-14 md:h-14 mx-4 related flex items-center rounded-md'>
                                <input ref={ref1} onChange={(e) => {
                                    e.preventDefault();
                                    setcode1(e.target.value);
                                    if (e.target.value.length === 1) {
                                        ref2.current.focus();
                                    }
                                }} type="text" className='outline-none w-full text-center h-full rounded-md' />
                            </div>
                            <div className='h-6 w-6 md:w-14 md:h-14 mx-4 related flex items-center rounded-md'>
                                <input onKeyDown={(e) => {
                                    if (e.key === 'Backspace') {
                                        ref1.current.focus();
                                    }
                                }} ref={ref2} onChange={(e) => {
                                    e.preventDefault();
                                    setcode2(e.target.value);
                                    if (e.target.value.length === 1) {
                                        ref3.current.focus();
                                    }
                                }} type="text" className='outline-none w-full text-center h-full rounded-md' />
                            </div>
                            <div className='h-6 w-6 md:w-14 md:h-14 mx-4 related flex items-center rounded-md'>
                                <input onKeyDown={(e) => {
                                    if (e.key === 'Backspace') {
                                        ref2.current.focus();
                                    }
                                }} ref={ref3} onChange={(e) => {
                                    e.preventDefault();
                                    setcode3(e.target.value);
                                    if (e.target.value.length === 1) {
                                        ref4.current.focus();
                                    }
                                }} type="text" className='outline-none w-full text-center h-full rounded-md' />
                            </div>
                            <div className='h-6 w-6 md:w-14 md:h-14 mx-4 related flex items-center rounded-md'>
                                <input onKeyDown={(e) => {
                                    if (e.key === 'Backspace') {
                                        ref3.current.focus();
                                    }
                                }} ref={ref4} onChange={(e) => {
                                    e.preventDefault();
                                    setcode4(e.target.value);
                                    if (e.target.value.length === 1) {
                                        ref5.current.focus();
                                    }
                                }} type="text" className='outline-none w-full text-center h-full rounded-md' />
                            </div>
                            <div className='h-6 w-6 md:w-14 md:h-14 mx-4 related flex items-center rounded-md'>
                                <input ref={ref5} onKeyDown={(e) => {
                                    if (e.key === 'Backspace') {
                                        ref4.current.focus();
                                    }
                                }} onChange={(e) => {
                                    e.preventDefault();
                                    setcode5(e.target.value);
                                    if (e.target.value.length === 1) {
                                        ref6.current.focus();
                                    }
                                }} type="text" className='outline-none w-full text-center h-full rounded-md' />
                            </div>
                            <div className='h-6 w-6 md:w-14 md:h-14 mx-4 related flex items-center rounded-md'>
                                <input onKeyDown={(e) => {
                                    if (e.key === 'Backspace') {
                                        ref5.current.focus();
                                    }
                                }} ref={ref6} onChange={(e) => {
                                    e.preventDefault();
                                    setcode6(e.target.value);
                                }} type="text" className='outline-none w-full text-center h-full rounded-md' />
                            </div>
                        </div>
                        <div className="flex mt-5 justify-center">
                            <button onClick={(e) => {
                                e.preventDefault();
                                // navigate('/');
                                matchcode()
                            }} className=" w-fit mt-10 px-14 py-3 bg-white border-2 border-[#315ED2] text-[#315ED2] rounded-full" >
                                Verify
                            </button>
                        </div>
                    </form>
                </div >
            </div >




        </>
    );
}
export default Otp;