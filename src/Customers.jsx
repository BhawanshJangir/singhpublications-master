import { useNavigate } from "react-router-dom";
// import refund from './assets/career.png';
function Customers() {
    const navigate = useNavigate();
    return (
        <>
            <div className="w-full relative flex items-center h-[100vh] bg-gray-400 px-[5vw]">
                {/* <img src={career} className="w-screen" alt="" /> */}
                <div className="content absolute">
                <h1 className="text-5xl font-medium" style={{ 'color': '#315ED2' }}>Customers Page</h1>
                {/* <h1 className="text-4xl font-normal my-5" style={{ 'color': '#777777' }}>Refund.</h1> */}
                {/* <button onClick={(e) => {
                    e.preventDefault();
                    navigate('/contact');



                }} className=" text-white px-10 py-2 mt-3 rounded-lg focus:outline-none" style={{ 'backgroundColor': "#315ED2" }}>
                    Join Today
                </button> */}
                </div>
                
            </div>
            <div className="career h-[600px]">
            <h1 className="text-sm font-medium mx-auto w-3/4 text-center pt-20 md:w-2/3">r</h1>
            </div>
            
                
        </>
    );

}
export default Customers;