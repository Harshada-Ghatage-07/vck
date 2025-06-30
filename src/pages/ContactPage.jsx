import Header from "../components/Header/Header";

const ContactPage = () => {
    return(
       
        <div className="root">
        <Header/>
    
        <div className="box">
            <div className="b1">
             <center><h1>Contact Us</h1></center>
             </div>
             <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
             <h1>General Enquiries</h1>
             <hr></hr>
             <p><b>Vivekanand College Main Campus</b></p> 
             <p>[Mahatma Gandhi Road, Chembur, Mumbai,</p>
             <p> Maharashtra 400071]</p>
             <p>India</p>
             <br></br>
            <p>phone:+91 1234567890</p>
            <p>Email:<b>info@vivekanandcollege.edu</b></p>
            <p>Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>
            <h1>Admission office</h1>
            <hr></hr>
            <p>For all admission-related queries regarding </p>
            <p>undergraduate or postgraduate programs:</p>  
            <p>Phone: +91 98765 43210</p>  
            <p>Email: admissions@vivekanandcollege.edu</p> 
            <h1>Student Support Services </h1> 
            <hr></hr>
            <p>For current student support, academic advising, or</p>
            <p>general assistance:</p>
            <p>Phone: +91 87654 32109</p>
            <p>Email: studentsupport@vivekanandcollege.edu</p>
            <h1>Find Us on the Map</h1>
            <hr></hr>
            <a href="https://maps.app.goo.gl/JdQm8mNNSNGQPL2s5"><u>View on Google Maps</u></a>
            <h1>Send Us a message</h1>
            <hr></hr>
            <p>[A contact form with fields for Name, Email,</p>
            <p>Subject, Message can be added here.]</p>


        </div>
        </div>
        
    )
}

export default ContactPage;