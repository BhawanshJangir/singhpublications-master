import React from "react";
import orderplaced from './assets/orderplaced.png';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import app from './Firebase';
import { useEffect } from "react";
function Orderplaced() {
    const navigate = useNavigate();
    async function checkuser() {
        const auth = getAuth(app);
        auth.onAuthStateChanged(async (user) => {
            if (!user) {
                navigate('/login');
            }

        });
    }
    useEffect(() => {
        checkuser();
        document.title = 'Singh Publication';
    }, []);

    return (
        <>
            <div className="flex items-center justify-center flex-col py-10">
                <div className="w-64">
                    <img src={orderplaced} alt="orderplaced" />
                </div>
                <h1 className="text-base w-max font-semibold mb-0 mt-5" style={{ 'color': '#315ED2' }}>Congratulations!</h1>
                <h1 className="text-base w-max font-semibold mb-0 mt-1" style={{ 'color': '#315ED2' }}>Order placed successfully</h1>
                <button onClick={(e) => {
                    e.preventDefault();
                    navigate('/');
                }} className=" text-white px-4 py-1 mt-5 rounded-2xl focus:outline-none" style={{ 'backgroundColor': "#315ED2" }}>
                    Home
                </button>
            </div>


            <div className="order-placed min-h-screen mt-10  grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="welcome-singh h-full p-[3vw] w-full flex justify-center items-center text-white bg-[#315ED2]">
                    <h1 className="text-5xl pb-2  w-fit border-b-4 mx-auto border-white font-medium text-center my-5 md:my-10 leading-[4rem]">Welcome To <br /> Singh Publication</h1>
                </div>
                <div className="order-placed flex items-center w-full px-[5vw] bg-white">
                    <form action="" className="mx-auto w-full grid gap-[1vw] p-[3vw] rounded-md shadow-2xl">
                        <div className="w-64 mx-auto">
                            <img src={orderplaced} alt="orderplaced" />
                        </div>
                        <div className="text text-center">
                            <h1 className="py-5 text-6xl font-semibold">Congratulations!</h1>
                            <h1 className="py-5 text-6xl font-semibold">Order placed successfully</h1>
                        </div>
                        <button onClick={(e) => {
                            e.preventDefault();
                            navigate('/');
                        }} className="w-fit mx-auto px-14 py-4 bg-white border-2 border-[#315ED2] text-[#315ED2] rounded-full">
                            Home
                        </button>
                    </form>
                </div>
            </div>



        </>
    );
}

export default Orderplaced;