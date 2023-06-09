import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingBar from "./comps/Loadingbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";


function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setloading] = React.useState(false);
    useEffect(() => {
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
            {loading && <LoadingBar />}
            <div className="log-in min-h-5/6  grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="welcome-singh h-full p-[3vw] w-full flex justify-center items-center text-white bg-[#315ED2]">
                    <h1 className="text-5xl pb-2  w-fit border-b-4 mx-auto border-white font-medium text-center my-5 md:my-10 leading-[4rem]">Welcome Back</h1>
                </div>
                <div className="log-in-form flex items-center w-full px-[5vw] py-[2vw] bg-white">
                    <form action="" className="mx-auto w-full grid gap-[3vw] p-[1vw] rounded-md shadow-2xl">
                        <div className="text">
                            <h1 className="py-5 text-6xl font-semibold">Log In</h1>
                        </div>
                        <div className="input grid gap-5">
                            <div className="">
                                <label htmlFor="email" className="block mb-2 text-lg ">Email Address</label>

                                <input value={email} onChange={(e) => {
                                    e.preventDefault();
                                    setEmail(e.target.value);
                                }} className="w-full px-3 py-5 bg-amber-100 rounded-md" type="email" id="email" placeholder="Email Address"
                                    style={{

                                    }}
                                />
                            </div>
                            <div className="">
                                <div className="flex justify-between mb-2">
                                    <label htmlFor="password" className="text-lg ">Password</label>
                                    <Link to="" className="text-lg focus:outline-none">Forgot password?</Link>
                                </div>

                                <input value={password} onChange={(e) => {
                                    e.preventDefault();
                                    setPassword(e.target.value);
                                }} className="w-full px-3 py-5  bg-amber-100 rounded-md"
                                    type="password"
                                    placeholder="Password"
                                    name="password" id="password"

                                />
                            </div>
                        </div>

                        <div className="flex justify-center">

                            <button onClick={(e) => {
                                e.preventDefault();
                                if (email.trim() === "") {
                                    toast.warning("Email is required");
                                    return;
                                }
                                if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
                                    toast.warning('Please enter a valid email');
                                    return;
                                }
                                if (password.trim() === "") {
                                    toast.warning("Password is required");
                                    return;
                                }
                                setloading(true);
                                axios.post("https://singhpublications.onrender.com/api/user/login", {
                                    email: email,
                                    // mobileNumber: mobileNumber,
                                    password: password,
                                }).then((res) => {
                                    console.log(res);
                                    setloading(false);
                                    if (res.status === 200) {
                                        // localStorage.setItem("pubuser", JSON.stringify(res.data));
                                        // console.log(localStorage.getItem("pubuser"));
                                        navigate("/otp", { state: { phone: res.data.phone_number, user: res.data } });
                                    } else {
                                        alert("Invalid Credentials");
                                    }
                                }).catch((err) => {
                                    setloading(false);
                                    alert("Something is wrong! Kindly check your EMAIL or PASSWORD.");
                                    console.log(err);
                                }
                                )

                            }} className="w-fit px-14 py-4 bg-white border-2 border-[#315ED2] text-[#315ED2] rounded-full">
                                Log In
                            </button>
                        </div>
                        <p className="text-lg text-center text-gray-400 flex w-fit mx-auto">Don&#x27;t have an account yet? <button onClick={(e) => {
                            e.preventDefault();
                            navigate("/signup");

                        }} className="text-[#315ED2] font-normal text-xl ml-2">
                            Sign up
                        </button>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Login;