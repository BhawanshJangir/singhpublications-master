import { useNavigate } from "react-router-dom";
import career from './assets/Singh AppNavbar and Career-06 1.png';
import about from './assets/about.png';
import { Link } from "react-router-dom";

function Career() {
    const navigate = useNavigate();
    return (
        <>
            <div className='w-full' style={{ 'backgroundColor': '#315ED2' }}>
                    {/* <h1 className="text-2xl font-semibold text-center" style={{ 'color': 'white' }}>Also Available on Playstore</h1>
                    <h1 className="text-sm font-normal my-2" style={{ 'color': 'white' }}>Enjoy the Best collection book here</h1>
                    <h1 className="text-sm font-semibold" style={{ 'color': 'white' }}>Download Now!</h1> */}
                    <Link target='_blank' to="../contact"><img src={career} className="w-full" alt="..."></img></Link>
                </div>
        </>
    );

}
export default Career;