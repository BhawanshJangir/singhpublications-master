import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingBar from "./comps/Loadingbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [gender, setGender] = React.useState("male");
    const [birthDate, setBirthDate] = React.useState("");
    const [mobileNumber, setMobileNumber] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [password2, setPassword2] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    function isAlphanumericPassword(str) {
        return /^(?=.*[a-zA-Z])(?=.*\d).+$/.test(str);
    }
    const handleChange = (event) => {
        setGender(event.target.value);
    };
    useEffect(() => {
        document.title = "Singh Publication | Sign Up";
    }, []);

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
            <div className="sign-up min-h-5/6  grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="welcome-singh h-full p-[3vw] w-full flex justify-center items-center text-white bg-[#315ED2]">
                    <h1 className="text-5xl pb-2  w-fit border-b-4 mx-auto border-white font-medium text-center my-5 md:my-10 leading-[4rem]">
                        Welcome To <br /> Singh Publication
                    </h1>
                </div>

                <div className="sign-up-form flex items-center w-full px-[5vw] py-[2vw] bg-white">
                    <form className="mx-auto w-full grid gap-[.5vw] p-[1vw] rounded-md shadow-2xl">
                        <div className="text">
                            <h1 className="py-5 text-6xl font-semibold">Sign up</h1>
                        </div>
                        <div className="name grid sm:grid-cols-2 gap-5">
                            <div>
                                <label forhtml="first" className="block mb-2 text-lg">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="first"
                                    value={firstName}
                                    onChange={(e) => {
                                        e.preventDefault();
                                        setFirstName(e.target.value);
                                    }}
                                    id="first"
                                    placeholder="First Name"
                                    className="block w-full px-5 py-3 mt-2 bg-amber-100 rounded-md"
                                />
                            </div>

                            <div>
                                <label forhtml="last" className="block mb-2 text-lg">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="last"
                                    value={lastName}
                                    onChange={(e) => {
                                        e.preventDefault();
                                        setLastName(e.target.value);
                                    }}
                                    id="last"
                                    placeholder="Last Name"
                                    className="block w-full px-5 py-3 mt-2 bg-amber-100 rounded-md"
                                />
                            </div>
                        </div>

                        <div>
                            <label forhtml="phone" className="block mb-2 text-lg">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                value={mobileNumber}
                                onChange={(e) => {
                                    e.preventDefault();
                                    setMobileNumber(e.target.value);
                                }}
                                name="phone"
                                id="phone"
                                placeholder="Phone Number"
                                className="block w-full px-5 py-3 mt-2 bg-amber-100 rounded-md"
                            />
                        </div>

                        <div className="gender-date grid sm:grid-cols-2 gap-5">
                            <div className="">
                                <div className="flex justify-between items-center px-2"></div>
                                <div className="relative">
                                    <label className="block mb-2 text-lg">Gender</label>
                                    <div className="relative mt-2 flex justify-end items-center">
                                        <select
                                            value={gender}
                                            className="block appearance-none w-full bg-amber-100 text-grey-darker py-4 px-5 pr-8  leading-tight focus:outline-none rounded-md"
                                            id="reason"
                                            onChange={handleChange}
                                        >
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2">
                                            <svg
                                                className="fill-current h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label forhtml="date" className="block mb-2 text-lg">
                                    Date Of Birth
                                </label>
                                <input
                                    type="date"
                                    value={birthDate}
                                    onChange={(e) => {
                                        e.preventDefault();
                                        setBirthDate(e.target.value);
                                    }}
                                    name="date"
                                    id="date"
                                    className="block w-full px-5 py-3 mt-2 bg-amber-100 rounded-md"
                                />
                            </div>
                        </div>

                        <div>
                            <label forhtml="email" className="block mb-2 text-lg">
                                Email address
                            </label>
                            <input
                                value={email}
                                onChange={(e) => {
                                    e.preventDefault();
                                    setEmail(e.target.value);
                                }}
                                type="email"
                                name="email"
                                id="email"
                                placeholder="test1@gmail.com"
                                className="block w-full px-5 py-3 mt-2 bg-amber-100 rounded-md"
                            />
                        </div>

                        <div>
                            <label forhtml="password" className="block mb-2 text-lg">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    e.preventDefault();
                                    setPassword(e.target.value);
                                }}
                                name="password"
                                id="password"
                                placeholder="Enter your password"
                                className="block w-full px-5 py-3 mt-2 bg-amber-100 rounded-md"
                            />
                        </div>

                        <div>
                            <label forhtml="confirm" className="block mb-2 text-lg">
                                Confirm password
                            </label>
                            <input
                                type="password"
                                value={password2}
                                onChange={(e) => {
                                    e.preventDefault();
                                    setPassword2(e.target.value);
                                }}
                                name="confirm"
                                id="confirm"
                                placeholder="Confirm your password"
                                className="block w-full px-5 py-3 mt-2 bg-amber-100 rounded-md"
                            />
                        </div>
                        <p className="text-lg text-red-700 w-fit">
                            Password must be alphanumeric.
                        </p>
                        <div className=" flex justify-center my-5">
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (firstName.trim().length === 0) {
                                        toast.warning("First Name is required");
                                        return;
                                    }
                                    if (lastName.trim().length === 0) {
                                        toast.warning("Last Name is required");
                                        return;
                                    }
                                    if (mobileNumber.trim().length != 10) {
                                        toast.warning("Mobile Number not valid");
                                        return;
                                    }
                                    if (birthDate.trim().length === 0) {
                                        toast.warning("Birth Date is required");
                                        return;
                                    }
                                    if (email.trim().length === 0) {
                                        toast.warning("Email is required");
                                        return;
                                    }
                                    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
                                        toast.warning("Please enter a valid email");
                                        return;
                                    }
                                    if (password.trim().length < 8) {
                                        toast.warning("Password must be 8 characters long");
                                        return;
                                    }
                                    if (!isAlphanumericPassword(password)) {
                                        toast.warning(
                                            "Password must contain atleast one alphabet and one number"
                                        );
                                        return;
                                    }
                                    if (password != password2) {
                                        toast.warning("Passwords did not match");
                                        return;
                                    }
                                    setLoading(true);
                                    axios.post("https://singhpublications.onrender.com/api/user/register",
                                        {
                                            firstname: firstName,
                                            lastname: lastName,
                                            email: email,
                                            gender: gender,
                                            dob: birthDate,
                                            mobile: mobileNumber,
                                            password: password,
                                            password2: password2,
                                        }
                                    )
                                        .then((res) => {
                                            setLoading(false);
                                            if (res.data === "success") {
                                                navigate("/login");
                                            }
                                        })
                                        .catch((err) => {
                                            setLoading(false);
                                            alert("error");
                                        });
                                }}
                                className="w-fit px-14 py-4 bg-white border-2 border-[#315ED2] text-[#315ED2] rounded-full uppercase"
                            > Register
                            </button>
                        </div>
                        <p className="text-lg text-center text-gray-400 flex items-center w-fit mx-auto">
                            Already have an account?{" "}
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate("/login");
                                }}
                                className=" text-[#315ED2] text-xl font-normal ml-2"
                            >
                                Login
                            </button>
                            .
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Signup;
