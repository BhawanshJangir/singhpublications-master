import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import app from './Firebase';
import LoadingBar from "./comps/Loadingbar";
function BillingAddress() {
    const navigate = useNavigate();
    const [user, setuser] = useState(JSON.parse(localStorage.getItem('pubuser')));
    const [house, sethouse] = useState(user.billing_address.house);
    const [street, setstreet] = useState(user.billing_address.street);
    const [area, setarea] = useState(user.billing_address.area);
    const [city, setcity] = useState(user.billing_address.city);
    const [pincode, setpincode] = useState(user.billing_address.pincode);
    const [loading, setloading] = useState(false);
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
        document.title = 'Singh Publication | Billing Address';
    }, []);
    return (
        <>
            {loading && <LoadingBar />}
            <div className="billing min-h-5/6  grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="welcome-singh h-full p-[3vw] w-full flex justify-center items-center text-white bg-[#315ED2]">
                    <h1 className="text-5xl pb-2  w-fit border-b-4 mx-auto border-white font-medium text-center my-5 md:my-10 leading-[4rem]">Welcome To <br /> Singh Publication</h1>
                </div>
                <div className="billing-form flex items-center w-full px-[5vw] py-[2vw] bg-white">
                    <form action="" className="mx-auto w-full grid gap-[1vw] p-[1vw] rounded-md shadow-2xl">
                        <div className="text">
                            <h1 className="py-5 text-6xl font-semibold">Billing Address</h1>
                        </div>
                        <div className="input grid gap-5 ">
                            <div className="">
                                <label htmlFor="house" className="block mb-2 text-lg ">Enter House Or Plot Number</label>
                                <input value={house} id="house" name="house" onChange={(e) => { e.preventDefault(); sethouse(e.target.value); }} className="p-4 w-full bg-amber-100 rounded-md focus:outline-none " type="text" placeholder="House/Plot No." />
                            </div>
                            <div className="">
                                <label htmlFor="street" className="block mb-2 text-lg ">Enter Street or Landmark</label>
                                <input value={street} id="street" name="street" onChange={(e) => { e.preventDefault(); setstreet(e.target.value); }} className="p-4 w-full bg-amber-100 rounded-md focus:outline-none " type="text" placeholder="Street/Landmark" />
                            </div>
                            <div className="">
                                <label htmlFor="area" className="block mb-2 text-lg ">Enter Area</label>
                                <input value={area} id="area" name="area" onChange={(e) => { e.preventDefault(); setarea(e.target.value); }} className="p-4 w-full bg-amber-100 rounded-md focus:outline-none " type="text" placeholder="Area" />
                            </div>
                            <div className="">
                                <label htmlFor="city" className="block mb-2 text-lg ">Enter City</label>
                                <input value={city} id="city" name="city" onChange={(e) => { e.preventDefault(); setcity(e.target.value); }} className="p-4 w-full bg-amber-100 rounded-md focus:outline-none " type="text" placeholder="City" />
                            </div>
                            <div className="">
                                <label htmlFor="pin" className="text-lg mb-2">Pincode</label>
                                <input type="number" value={pincode} onChange={(e) => {
                                    e.preventDefault();
                                    setpincode(e.target.value);
                                }} min={1} name="pin" id="pin" placeholder="Pincode" className="w-full p-4  bg-amber-100 rounded-md" />
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <button type="button" className="btn mt-10 cursor-pointer w-fit px-14 py-4 bg-white border-2 border-[#315ED2] hover:bg-[#315ED2] hover:text-white text-[#315ED2] font-bold rounded-full" onClick={(e) => {
                                // console.log(user.accessToken);

                                e.preventDefault();
                                setloading(true);
                                axios.post("https://singhpublications.onrender.com/api/user/updatebillingaddress", {


                                    "house": house,
                                    "street": street,
                                    "area": area,
                                    "city": city,
                                    "pincode": pincode

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
                                    setuser(newuser);
                                    console.log(res.data);
                                    navigate('/accountsetting');
                                    // localStorage.setItem('pubuser', JSON.stringify(res.data));
                                }
                                ).catch((err) => {
                                    setloading(false);
                                    alert("error");
                                    console.log(err);
                                }
                                )

                            }}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default BillingAddress;