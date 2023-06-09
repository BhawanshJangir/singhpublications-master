import { useEffect } from 'react';
import { useState } from 'react';
import map from './assets/map.png';
import axios from 'axios';
import LoadingBar from './comps/Loadingbar';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
    const [loading, setloading] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Singh Publication | Contact Us';
    }, [])
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
            <div className="contact-us w-full min-h-5/6 grid grid-cols-1 lg:grid-cols-2">
                <div className="contact-form bg-white md:pl-[5vw] py-[4vw]  flex justify-end items-center">
                    <div className="mx-auto w-full text-white p-5 md:p-[0.8vw] md:rounded-l-3xl bg-[#315ED2]">
                        <form action="" className="w-full grid gap-[1vw]">
                            <h1 className="text-5xl font-semibold text-center">Contact us</h1>
                            <div className="w-full grid gap-[1.1vw]">
                                <div className="relative z-0">
                                    <input type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-white bg-transparent py-4 px-0 text-lg  focus:outline-none focus:ring-0" placeholder=" " />
                                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-5 peer-focus:scale-75 peer-focus:text-white" value={name} onChange={(e) => {
                                        setName(e.target.value);
                                    }}>Your name</label>
                                </div>
                                <div className="relative z-0">
                                    <input type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-white bg-transparent py-4 px-0 text-lg  focus:outline-none focus:ring-0" placeholder=" " />
                                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-5 peer-focus:scale-75 peer-focus:text-white" value={phone} onChange={(e) => {
                                        setPhone(e.target.value);
                                    }}>Phone Number</label>
                                </div>
                                <div className="relative z-0">
                                    <input type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-white bg-transparent py-4 px-0 text-lg  focus:outline-none focus:ring-0" placeholder=" " />
                                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-5 peer-focus:scale-75 peer-focus:text-white" value={subject} onChange={(e) => {
                                        setSubject(e.target.value);
                                    }}>Subject</label>
                                </div>
                                <div className="relative z-0">
                                    <input type="text" name="email" className="peer block w-full appearance-none border-0 border-b border-white bg-transparent py-4 px-0 text-lg  focus:outline-none focus:ring-0" placeholder=" " />
                                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-5 peer-focus:scale-75 peer-focus:text-white" value={email} onChange={(e) => {
                                        setEmail(e.target.value);
                                    }
                                    }>Your email</label>
                                </div>
                                <div className="relative z-0">
                                    <textarea name="message" rows="5" className="peer block w-full appearance-none border-0 border-b border-white bg-transparent py-4 px-0 text-lg  focus:outline-none focus:ring-0" placeholder=" "></textarea>
                                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-5 peer-focus:scale-75 peer-focus:text-white" value={description} onChange={(e) => {
                                        setDescription(e.target.value);
                                    }}>Your message</label>
                                </div>
                            </div>
                            <div className="flex justify-center mt-5">
                                <button type="button" onClick={(e) => {
                                    if (name === '') {
                                        toast.warning('Please enter your name');
                                        return;
                                    }
                                    if (phone.trim().length != 10) {
                                        toast.warning('Please enter a valid phone number');
                                        return;
                                    }
                                    if (subject === '') {
                                        toast.warning('Please enter a subject');
                                        return;
                                    }
                                    if (email === '') {
                                        toast.warning('Please enter your email');
                                        return;
                                    }
                                    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
                                        toast.warning('Please enter a valid email');
                                        return;
                                    }
                                    if (description === '') {
                                        toast.warning('Please enter a description');
                                        return;
                                    }

                                    setloading(true);
                                    e.preventDefault();
                                    axios.post('https://singhpublications.onrender.com/contact', {
                                        name: name,
                                        phone: phone,
                                        subject: subject,
                                        email: email,
                                        message: description
                                    }).then((res) => {
                                        alert('Message sent successfully');
                                        setName('');
                                        setPhone('');
                                        setSubject('');
                                        setEmail('');
                                        setDescription('');

                                        setloading(false);
                                        console.log(res);
                                    }).catch((err) => {
                                        setloading(false);
                                        console.log(err);
                                    }
                                    )
                                }} className="w-fit px-14 py-4 text-white border-2 border-white bg-[#315ED2] rounded-full">Submit</button>
                            </div>

                        </form>
                    </div>

                    {/* <form action="" className="mx-auto w-full grid gap-[3vw] p-[3vw] bg-[#315ED2] rounded-md">
                        <div className="text">
                            <h1 className="text-5xl pb-2  w-fit border-b-4 mx-auto border-white font-medium text-center my-5 md:my-10 leading-[4rem]">Contact us</h1>
                        </div>
                        <div className="input grid gap-5">
                            <div className="">
                                <label htmlFor="email" className="block mb-2 text-lg ">Email Address</label>
                                <input type="email" name="email" id="email" placeholder="test1@gmail.com" className="w-full px-3 py-5 bg-amber-100 rounded-md" />
                            </div>
                            <div className="">
                                <div className="flex justify-between mb-2">
                                    <label htmlFor="password" className="text-lg ">Password</label>
                                    <a href="" className="text-lg focus:outline-none">Forgot password?</a>
                                </div>
                                <input type="password" name="password" id="password" placeholder="Your Password" className="w-full px-3 py-5  bg-amber-100 rounded-md" />
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <button type="button" className="w-fit px-14 py-4 text-white bg-[#315ED2] rounded-full">SIGN IN</button>
                        </div>
                        <p className="text-lg text-center text-gray-400">Don&#x27;t have an account yet? <a href="/src/Signup.jsx" className="text-[#315ED2]">Sign up</a>.</p>
                    </form> */}
                </div>
                <div className="address bg-[#315ED2] md:pr-[5vw] py-[4vw]  flex justify-end items-center">
                    <div className="content w-full grid gap-[2vw]  p-[1.9vw] md:rounded-r-3xl bg-white text-gray-500 font-medium">

                        <iframe className='w-full rounded-md h-80' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.6169804468354!2d75.76172679999999!3d26.883907599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5558aea2575%3A0xd53fbb24d469e795!2sSingh%20Publication!5e0!3m2!1sen!2sin!4v1683869607111!5m2!1sen!2sin" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                        <div className="address flex sm:flex-nowrap gap-6 text-lg">
                            <div className="icon text-2xl"><i className="fa-solid fa-location-dot text-black"></i></div>
                            <a href='https://www.google.com/maps/place/Singh+Publication,+401,+New+Sanganer+Rd,+Katewa+Nagar,+Devi+Nagar,+Shyam+Nagar,+Jaipur,+Rajasthan+302019/@26.883908,75.761727,15z/data=!4m6!3m5!1s0x396db5558aea2575:0xd53fbb24d469e795!8m2!3d26.8839076!4d75.7617268!16s%2Fg%2F11tghjkpdy?hl=en&gl=IN' className='text-sm sm:text-2xls'>401, katewa nagar, New sanganer road, Sodala, Jaipur, Jaipur, Rajasthan, 302019</a>
                        </div>
                        <div className="address flex flex-wrap sm:flex-nowrap gap-6 text-lg">
                            <div className="icon text-2xl"><i className="fa-solid fa-clock text-black"></i></div>
                            <h3 className='text-sm sm:text-2xl'> 9:00 am - 6:00 pm | Mon-Fri</h3>
                        </div>
                        <div className="number flex flex-wrap sm:flex-nowrap gap-6 text-lg ">
                            <div className="icon text-2xl"><i className="fa-solid fa-phone-volume text-black"></i></div>
                            <a href='tel:9414784402' className='text-sm sm:text-2xl'>9414784402</a>
                        </div>
                        <div className="email flex flex-wrap sm:flex-nowrap gap-6 text-lg">
                            <div className="icon text-2xl"><i className="fa-solid fa-envelope text-black"></i></div>
                            <a href="mailto: singhpublicationjaipur@gmail.com" className='text-sm sm:text-2xl'>singhpublicationjaipur@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Contact;