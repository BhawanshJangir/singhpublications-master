import { useNavigate } from "react-router-dom";
// import refund from './assets/career.png';
function Disclaimer() {
    const navigate = useNavigate();
    return (
        <>
            <div className="policy grid gap-5 px-[5vw] md:px-[15vw] mx-auto">
                {/* <img src={career} className="w-screen" alt="" /> */}
                <h1 className="text-2xl md:text-5xl w-fit mx-auto font-medium text-center my-5 md:my-10" style={{ 'color': '#315ED2' }}>Disclaimer from Authors & Publishers</h1>
                <p>Knowledge and practice in any field are changing regularly. The new research
                    and experience expand our understanding and changes in research methods. The
                    researchers must always depend on their own experience and knowledge in evaluating and using any information and methods. In using new information, they
                    should be mindful of their own safety and the safety of others, including their professional responsibility.
                </p>
                <p>The publication made every effort to avoid errors or omissions in this book.
                    In spite of this, some errors might have existed in. Any mistake, error or discrepancy noted may please be brought to publication notice which shall be taken
                    care of in the next edition. It is notified that neither the publisher nor the authors
                    or sellers will be responsible for any damage or loss to any one, of any kind, in
                    any manner, there from. The authors and publishers specifically disclaim any
                    implied warranties as to merchantability or fitness of the publication for any particular purpose.
                </p>
                <p>All Rights reserved. No part of this book may be reproduced or copied in any
                    form or by any means (electro-mechanical, photocopying, recording taping or
                    other information storage device, otherwise taping or information retrieval system, etc.),without the written permission of the publisher. Breach of this condition is liable for legal action.</p>
                <p>This book has been published in good faith as per the manuscript provided by
                    the author. However the publisher, the printer and the author will not be held
                    responsible for any inadvertent errors(s). All disputes will be subject to jurisdiction of Jaipur under the constitution of India.
                </p>
                <h2 className="text-lg font-medium text-right">Publisher</h2>
                <div className="published-isbn flex flex-wrap gap-5 md:pt-20 justify-between">
                    <div className="publishedgrid gap-5">
                        <h2 className="text-lg font-medium">Published By</h2>
                        <p>Singh Publication</p>
                        <p>401 Katewa Nagar </p>
                        <p>New Sanaganer Road</p>
                        <p>Jaipur 302019</p>
                        <p>Mail: singhpublicationjaipur@gmail.com</p>
                        <p>Website: www.singhpublication.in</p>
                    </div>
                    <div className="isbngrid gap-5">
                        <p>ISBN: 978-81-959960-0-1</p>
                        <p>First Edition: 2023
                        </p>
                        <p>MRP : 350/-</p>
                        <p>© Publisher</p>
                    </div>
                </div>
                {/* <h1 className="text-4xl font-normal my-5" style={{ 'color': '#777777' }}>Refund.</h1> */}
                {/* <button onClick={(e) => {
                    e.preventDefault();
                    navigate('/contact');



                }} className=" text-white px-10 py-2 mt-3 rounded-lg focus:outline-none" style={{ 'backgroundColor': "#315ED2" }}>
                    Join Today
                </button> */}
            </div>

            


        </>
    );

}
export default Disclaimer;