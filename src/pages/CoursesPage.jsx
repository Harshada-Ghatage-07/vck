import Header from "../components/Header/Header";

const CoursesPage = () => {
    return(
       
        <div className="root">
            <Header/>
            <div className="box">
            
            <div className="b2">
            <h1>Our Academic Programs</h1>
            </div>
            <p>Vivekanand College offers a comprehensive range</p>
            <p>of undergraduate and postgraduate programs </p>
            <p>designed to equip students with the knowledge and</p>
            <p>skills demanded by today's dynamic global</p>
            <p>landscape. Our curriculum is regularly updated to </p>
            <p>reflect industry trends and academic</p>
            <p>advancements.</p>
            <h1>Discover Campus Life</h1>
            <hr></hr>
<video width="700" hieght="auto" controls src="https://vck-ojt.vercel.app/assets/college-tour-FAmcnyfF.mp4" ></video> 
<h2>Undergraduate Programs (UG)</h2> 
<hr></hr> 
 <ul>
    
    <li><b>Bachelor of Science (B.Sc.)</b></li>
    <ul>
            <li>Computer Science (3 years)</li> 
            <li>Information Technology (3 years)</li>
            <li>Biotechnology (3 years)</li>
    </ul>
    
    <li><b>Bachelor of Commerce (B.Com)</b></li>
    <ul>
            <li>Accounting & Finance (3 years)</li>
            <li>Banking & Insurance (3 years)</li>
    </ul>
    <li><b>Bachelor of Arts (B.A.)</b></li>
    <ul>
            <li>English Literature (3 years)</li>
            <li>Psychology (3 years)</li>
    </ul>
    </ul>
    <h2>Postgraduate Programs (PG)</h2>
    <hr></hr>
    <ul>
        <li><b>Master of Science (M.Sc.)</b></li>
    
        <ul>
                <li>Computer Science (2 years)</li>
                <li>Information Technology (2 years)</li>
        </ul>
        
            <li><b>Master of Commerce (M.Com) (2 years)</b></li>
            
            <li><b>Master of Arts (M.A.) (2 years)</b></li>
        </ul>
    <h1>Program Details & Fee Structure (Annual)</h1>
    <hr></hr>
    <table className="table">
        <tr>
            <th>Program Type</th>
            <th>Course Name</th>
            <th>Duration</th>
            <th>Annual Fee (INR)</th>
            <th>Eligibility</th>
        </tr>
        <tr>
            <td>UG</td>
            <td>B.Sc. Computer Science</td>
            <td>3 Years</td>
            <td>₹ 85,000</td>
            <td>0+2 with PCM (50%)</td>
        </tr>
        <tr>
            <td>UG</td>
            <td>B.Com. Accounting & Finance</td>
            <td>3 Years</td>
            <td>₹ 70,000</td>
            <td>10+2 Commerce (45%)</td>
        </tr>
        <tr>
            <td>PG</td>
            <td>M.Sc. Information Technology</td>
            <td>2 Years</td>
            <td>₹ 95,000</td>
            <td>B.Sc. IT/CS (50%)</td>
        </tr>
        </table>
        <h1>Specialized & Vocational Courses</h1>
        <hr></hr>
        <p>n addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.</p>
        <center><p>Have questions about a specific course?</p>
        <a href="/contact" className="nav-item">Inquire About Courses</a></center>



    

            

        </div>
        </div>
        
    )
}

export default CoursesPage;