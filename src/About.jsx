import author from './assets/author.png';
import about from './assets/about.png';
import { useEffect } from 'react';

function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Singh Publication | About Us';
    }, []);
    return (
        <>
            <div className="from-publication  px-[5vw] lg:px-[10vw] my-5 sm:my-10">
                <h1 className="text-5xl w-fit mx-auto font-medium text-center my-5 md:my-10" style={{ 'color': '#315ED2' }}>From the Publication</h1>
                <div className='w-full h-max px-[5vw] lg:px-[10vw] justify-center  flex flex-col md:flex-row sm:flex-col items-center gap-10 my-5 md:my-10'>
                    <div className='max-w-xs'>
                        <img src={about} className="w-full" alt="..." />

                    </div>
                    <div className='w-full text-center lg:text-left'>
                        {/* <h1 className='font-bold text-xl ' style={{ 'color': '#315ED2' }}>Dr. (Prof) Sher Singh Morodiya</h1>
                    <h1 className='font-semibold text-sm mb-3' style={{ 'color': '#315ED2' }}>Director & Author (Singh Publication)</h1> */}
                        <p className='text-sm font-medium text-justify'>
                            <q> It gives us immense pleasure to share with you that "Singh Publication" is a new initiative in field of publication. Keeping in mind, the New Education Policy of our country and changing trends in nursing education, "Singh publication" have taken up a mission of such books, those will student-friendly, syllabus based, written by subject experts in whole country. In this light, the Singh Publication aimed to those students who are unable to understand the books available in difficult English language. To fulfil this gap, it has been published first easily understandable book, named, "A concise Book of Nursing Research & Statistics." The author of this book as well as initiator of the publication is one person who has lot of experience in areas of clinical, teaching, guiding, research, writing, editing, translating and administration/ management in government as well as private sector. The growth of the publication cannot possible without invaluable contribution of reader, author, reviewer, contributor and recommender, these all are pillars of any publication. We need your support and contributions. We will happy and grateful to you if you join hands with us in form of author, contributor and reviewer. Let's us join together and share ideas and knowledge in field of your expertness. We are looking forward to your cooperation in future as well. Share your CV to singhpublicationjaipur@gmail.com
                            </q>
                        </p>
                    </div>
                </div>
            </div>

            <div className="about-author  px-[5vw] lg:px-[10vw] sm:my-10" id='about-author'>
                <h1 className="text-5xl w-fit mx-auto font-medium text-center my-5 md:my-10" style={{ 'color': '#315ED2' }}>About the Director</h1>
                <div className='w-full h-max px-[5vw] lg:px-[10vw] justify-center  flex flex-col md:flex-row sm:flex-col items-center gap-10 my-5 md:my-10'>
                    <div className='max-w-xs'>
                        <img src={author} className="w-full" alt="..." />

                    </div>
                    <div className='w-full text-center lg:text-left'>
                        <h2 className='font-bold text-3xl ' style={{ 'color': '#315ED2' }}>Prof. (Dr.) Sher Singh Morodiya</h2>
                        <h2 className='font-semibold text-lg mb-3' style={{ 'color': '#315ED2' }}>Director & Author (Singh Publication)</h2>
                        <p className='text-sm font-medium text-justify'>
                            completed Diploma in General Nursing in 1983 from Government School of Nursing, S.K. Hospital, Sikar (Rajasthan). He got his B.Sc. Nursing Degree in 2004 from
                            IGNOU, New Delhi. He received his Master of Nursing Degree
                            (Medical Surgical Nursing) in 2008 from Raj Kumari Amrit Kaur College of Nursing, University of Delhi. He has been awarded Ph.D. Degree in 2013 from Pacific Academy of Higher Education and
                            Research University, Udaipur, Rajasthan.
                        </p>
                        <h2 className="text-xl font-medium mt-3">Experience:</h2>
                        <p className='text-justify'>He started his career after General Nursing Diploma as Nurse Grade II
                            (Basic Nurse) at Government dispensary in 1984. He worked at various health care settings i.e. Primary Health Centre, Community Health Centre, District Hospital and Medical
                            College Hospital in various capacities as Basic nurse, Nurse Manager/ Ward In-charge,
                            Nursing Superintendent. He experienced as Lecturer and Founder Principal, Government
                            Colleges of Nursing and engaged in Under Graduate and Post Graduate programmes. He
                            got chance to work on the post of the Officer on Special Duty to the Additional Chief
                            Secretary (Medical & Health) along with the responsibility of Deputy Director (Nursing)
                            i.e. highest post in Government of Rajasthan for nursing personnel. </p>
                        <p className='text-justify'>He is having <span className="font-bold">39 Years of experience in the field of Nursing.</span> He has lot of confidence
                            in area of teaching, guiding, examining/evaluating, care of clients, research and management/administration at various levels of health care settings. Now he is working as
                            Professor, Principal & Dean, Faculty of Nursing, Apex university, Jaipur. Here, he is also
                            registered as research supervisor/guide for Doctoral Programmes. </p>
                        <p className='text-justify'>He is authour of one book named; "Performance Appraisal of Nursing Personnel
                            (Issues and Challenges)." He has been translated six nursing books from English to Hindi.
                            He is Editor-in-Chief of International Journal of Medical Surgical Nursing and member of
                            editorial board in seven peer reviewed/refereed journals from India and two foreign
                            (USA) journals. He published 26 articles in International & National Journals, one Article
                            Published in Conference Proceeding Book, eight articles published in News Papers.
                            He has been presented seven research papers in International Conferences and four in
                            National conferences. He has received <span className="font-bold">BEST PAPER AWARD</span>  in an International
                            Conference held at Pacific University, Udaipur in 2019. He is life time member in ten professional bodies.
                        </p>
                    </div>
                </div>
            </div>

            {/* <div className="board-directors bg-gray-300 px-[5vw] lg:px-[10vw] ">
                <h1 className="text-5xl w-fit mx-auto font-medium text-center my-5 md:my-10" style={{ 'color': '#315ED2' }}>Meet Our Board Of Directors</h1>
                <div className="box py-10">
                    <div className="img">
                        <img src="" alt="img" className='h-40 w-40 mx-auto object-cover rounded-[50%] border-2 border-gray-500' />
                    </div>
                    <div className="content text-center gap-1">
                        <h2 className='text-xl font-semibold'>Mr. HR Gupta</h2>
                        <h2 className='text-base font-semibold'>Former Secretary, CBSE</h2>
                        <h2 className='text-base font-semibold'>President</h2>
                    </div>
                </div>
                <div className="card flex justify-center items-center py-10 flex-wrap gap-16">
                    <div className="box">
                        <div className="img">
                            <img src="" alt="img" className='h-40 w-40 mx-auto object-cover rounded-[50%] border-2 border-gray-500' />
                        </div>
                        <div className="content text-center grid gap-1">
                            <h2 className='text-xl font-semibold'>Mr. Lalit Gupta</h2>
                            <h2 className='text-base font-semibold'>Chairman and Managing Director</h2>
                            <div className="social flex justify-center items-center gap-4  list-none">
                                <li className=''><i className="fa-brands fa-facebook-f"></i></li>
                                <li className=''><i className="fa-brands fa-instagram"></i></li>
                                <li className=''><i className="fa-brands fa-linkedin-in"></i></li>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img">
                            <img src="" alt="img" className='h-40 w-40 mx-auto object-cover rounded-[50%] border-2 border-gray-500' />
                        </div>
                        <div className="content text-center grid gap-1">
                            <h2 className='text-xl font-semibold'>CA (Dr.) Rajeev Gupta</h2>
                            <h2 className='text-base font-semibold'>CEO</h2>
                            <div className="social flex justify-center items-center gap-4 list-none">
                                <li className=''><i className="fa-brands fa-facebook-f"></i></li>
                                <li className=''><i className="fa-brands fa-instagram"></i></li>
                                <li className=''><i className="fa-brands fa-linkedin-in"></i></li>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img">
                            <img src="" alt="img" className='h-40 w-40 mx-auto object-cover rounded-[50%] border-2 border-gray-500' />
                        </div>
                        <div className="content text-center grid gap-1">
                            <h2 className='text-xl font-semibold'>Mr. Neeraj Gupta</h2>
                            <h2 className='text-base font-semibold'>Managing Director</h2>
                            <div className="social flex justify-center items-center gap-4 list-none">
                                <li className=''><i className="fa-brands fa-facebook-f"></i></li>
                                <li className=''><i className="fa-brands fa-instagram"></i></li>
                                <li className=''><i className="fa-brands fa-linkedin-in"></i></li>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img">
                            <img src="" alt="img" className='h-40 w-40 mx-auto object-cover rounded-[50%] border-2 border-gray-500' />
                        </div>
                        <div className="content text-center grid gap-1">
                            <h2 className='text-xl font-semibold'>Mrs. Seema Gupta</h2>
                            <h2 className='text-base font-semibold'>Director</h2>
                            <div className="social flex justify-center items-center gap-4 list-none">
                                <li className=''><i className="fa-brands fa-facebook-f"></i></li>
                                <li className=''><i className="fa-brands fa-instagram"></i></li>
                                <li className=''><i className="fa-brands fa-linkedin-in"></i></li>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div className="available-globally px-[5vw] lg:px-[10vw]  ">
                <h1 className="text-5xl w-fit mx-auto font-medium text-center my-5 md:my-10" style={{ 'color': '#315ED2' }}>Are we logistically available Globally?</h1>
                <div className='w-full h-max px-[5vw] lg:px-[10vw] justify-center  flex flex-col md:flex-row sm:flex-col items-center gap-10 my-5 md:my-10'>
                    <p className='text-sm font-medium text-justify'>
                        To enhance awareness and avail updates on the user group, we regularly conduct and participate in workshops and exhibitions across the globe. The user thus gets the latest books. We are active on e-commerce platforms as well. We have acquired an invincible position in the industry. What we are today is thanks to the efforts of our team. Our Management has made our presence felt in the market. Apart from in-house Authors, Editors, Graphic Designers, Artists, IT Team including Animators, we also have sales and marketing professionals who are well versed in market dynamics and carry out extensive market research to understand the requirements of readers. Their efforts have enabled us to spread our client base and increase our business activities.
                    </p>
                </div>
            </div> */}
            
            {/* <div className='flex w-full md:flex-row flex-col'>
                <div className='w-full items-center justify-start lg:w-1/3 py-8 px-8 lg:p-8 flex flex-col'>
                    <img src={about} className="w-4/5 mt-4" alt="..." />

                </div>
                <div className='w-full  py-0 px-8 lg:p-8 '>

                    <p className='text-sm font-medium mb-10 text-justify'>
                        It gives us immense pleasure to share with you that "Singh Publication" is a new initiative in field of publication. Keeping in mind, the New Education Policy of our country and changing trends in nursing education, "Singh publication" have taken up a mission of such books, those will student-friendly, syllabus based, written by subject experts in whole country. In this light, the Singh Publication aimed to those students who are unable to understand the books available in difficult English language. To fulfil this gap, it has been published first easily understandable book, named, "A concise Book of Nursing Research & Statistics." The author of this book as well as initiator of the publication is one person who has lot of experience in areas of clinical, teaching, guiding, research, writing, editing, translating and administration/ management in government as well as private sector. The growth of the publication cannot possible without invaluable contribution of reader, author, reviewer, contributor and recommender, these all are pillars of any publication. We need your support and contributions. We will happy and grateful to you if you join hands with us in form of author, contributor and reviewer. Let's us join together and share ideas and knowledge in field of your expertness. We are looking forward to your cooperation in future as well. Share your CV to singhpublicationjaipur@gmail.com

                    </p>
                </div>
            </div> */}
        </>
    );
}
export default About;