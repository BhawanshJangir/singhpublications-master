import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import app from './Firebase';
import LoadingBar from "./comps/Loadingbar";
function ProfileSetting() {
    const navigate = useNavigate();
    const [loading, setloading] = React.useState(false);
    const [user, setuser] = useState(JSON.parse(localStorage.getItem('pubuser')));
    const [fname, setfname] = useState(user.firstname);
    const [lname, setlname] = useState(user.lastname);
    const [email, setemail] = useState(user.email);
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
        document.title = 'Singh Publication | Profile Settings';
    }, []);
    return (
        <>
            {loading && <LoadingBar />}

            <div className="profile min-h-5/6  grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="welcome-singh h-full p-[3vw] w-full flex justify-center items-center text-white bg-[#315ED2]">
                    <h1 className="text-5xl pb-2  w-fit border-b-4 mx-auto border-white font-medium text-center my-5 md:my-10 leading-[4rem]">Welcome To <br /> Singh Publication</h1>
                </div>

                <div className="profile-form flex items-center w-full px-[5vw] py-[2vw] bg-white">
                    <form className="mx-auto w-full grid gap-[.5vw] p-[3vw] rounded-md shadow-2xl">
                        <div className="text">
                            <h1 className="py-5 text-6xl font-semibold">Profile Setting</h1>
                        </div>
                        <div className="name-number-photo flex flex-col md:flex-row   justify-between gap-5">

                            <div className="w-full">
                                <label htmlFor="first" className="block mb-2 text-lg">First Name</label>
                                <input type="text" name="first" id="first" value={fname} onChange={(e) => {
                                    e.preventDefault();
                                    setfname(e.target.value);
                                }} placeholder="First Name" className="block w-full px-5 py-3 mt-2 bg-amber-100 rounded-md" />
                            </div>

                            <div className="w-full">
                                <label htmlFor="last" className="block mb-2 text-lg">Last Name</label>
                                <input type="text" name="last" value={lname} onChange={(e) => {
                                    e.preventDefault();
                                    setlname(e.target.value);
                                }} id="last" placeholder="Last Name" className="block w-full px-5 py-3 mt-2 bg-amber-100 rounded-md" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block mb-2 text-lg">Email address</label>
                            <input type="email" value={email} onChange={(e) => {
                                e.preventDefault();
                                setemail(e.target.value);
                            }} name="email" id="email" placeholder="test1@gmail.com" className="block w-full px-5 py-3 mt-2 bg-amber-100 rounded-md" />
                        </div>

                        <div className=" flex justify-center my-5"><button onClick={(e) => {
                            // console.log(user.accessToken);
                            setloading(true);
                            e.preventDefault();
                            axios.post("https://singhpublications.onrender.com/api/user/updateuser", {

                                'firstname': fname,
                                'lastname': lname,
                                'email': email,





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

                            }
                            ).catch((err) => {
                                setloading(false);
                                console.log(err);
                                alert("error");
                            }
                            )

                        }}
                            className="btn mt-10 cursor-pointer w-fit px-14 py-4 bg-white border-2 border-[#315ED2] hover:bg-[#315ED2] hover:text-white text-[#315ED2] font-bold rounded-full uppercase">
                            Submit
                        </button></div>

                    </form>
                </div>
            </div>


        </>
    );
}
export default ProfileSetting;