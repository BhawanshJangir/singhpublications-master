import { useNavigate } from "react-router-dom";
// import refund from './assets/career.png';
function Refund() {
    const navigate = useNavigate();
    return (
        <>
            <div className="w-full">
                <div className="policy lg:w-1/2 grid gap-3 sm:gap-5 py-[2vw] px-[10vw] mx-auto">
                    <h1 className="text-2xl md:text-5xl font-medium text-center text-[#315ED2] mb-3 sm:mb-10">Return & Refund Policy</h1>
                    <p>Thanks for shopping at My Site (change this).</p>
                    <p>If you are not entirely satisfied with your purchase, we're here to help</p>
                    <h2 className="text-lg md:text-2xl font-medium ">Returns</h2>
                    <p>You have 30 (change this) calendar days to return an item from the date you received it.</p>
                    <p>To be eligible for a return, your item must be unused and in the same condition that you received it.</p>
                    <p>Your item must be in the original packaging.</p>
                    <p>Your item needs to have the receipt or proof of purchase.</p>
                    <h2 className="text-lg md:text-2xl font-medium ">Refunds</h2>
                    <p>Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item.</p>
                    <p>If your return is approved, we will initiate a refund to your credit card (or original method of payment). </p>
                    <p>You will receive the credit within a certain amount of days, depending on your card issuer's policies.

                    </p>
                    <h2 className="text-lg md:text-2xl font-medium ">Shipping</h2>
                    <p>You will be responsible for paying for your own shipping costs for returning your item. Shipping
                        costs are nonrefundable.</p>
                    <p>If you receive a refund, the cost of return shipping will be deducted from your refund</p>
                    <h2 className="text-lg md:text-2xl font-medium ">Contact Us</h2>
                    <p>If you have any questions on how to return your item to us, contact us.</p>
                </div>
                {/* <iframe src={policy}   title="testPdf" height="100%" width="100%"/> */}
            </div>


        </>
    );

}
export default Refund;