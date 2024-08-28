import React from "react";
import '../styles/App.css'
import ContactUs from "../components/ContactUsBtn";
import beach from "../assets/beach.jpg"
import Adbeach from "../assets/AdBeach.jpg"
import AdMountains from "../assets/AdMountains.jpg"
const About = () => {
    return (
        <>
            <div className="AboutUsContent">
                <div className="sub-us">
                    <div className="content" style={{ width: "50%", margin: "30px", textAlign: "right", fontSize: "x-large" }}>
                        <hr style={{ border: "5px solid green", width: "50px", backgroundColor: "yellow" }}></hr>
                        <h3>Who Are we ?</h3>
                        <h1>Explore the World with Us!</h1>
                        <p>Bangla Path is a trusted travel agency with over 10 years of experience,
                            specializing in customized itineraries and affordable visa services.
                            We also provide dedicated assistance and guidance for patients needing to
                            visit hospitals in India, ensuring a smooth and hassle-free journey.To Know more about us you can give contact us at any time.</p>
                        <ContactUs />
                    </div>
                    <div className="AboutImage" style={{ width: "50%", textAlign: "left" }}>
                        <img src={beach} alt="beach" height={500} width={500} style={{ borderRadius: "50%" }} />
                    </div>
                </div>
                <div className="count" style={{ backgroundColor: "#d3e4e8", borderRadius: "20px", width: "100%", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                    <div className="country" style={{ textAlign: "center" }}>
                        <h1 style={{ color: "#f9c94a" }}>150+</h1>
                        <h3>Countries</h3>
                    </div>
                    <div className="destination" style={{ textAlign: "center" }}>
                        <h1 style={{ color: "#f9c94a" }}>1000+</h1>
                        <h3>Destinations</h3>
                    </div>
                    <div className="Top-Destination" style={{ textAlign: "center" }}>
                        <h1 style={{ color: "#f9c94a" }}>200+</h1>
                        <h3>Top Destination</h3>
                    </div>
                </div>
                <div className="advertisement" style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "150px" }}>
                    <div className="AdImages" style={{ width: "50%", display: "flex", justifyContent: "end", marginRight: "20px" }}>
                        <img src={Adbeach} alt="as Beach" height={500} width={450} style={{ margin: "20px", borderRadius: "20px" }} />
                        <img src={AdMountains} alt="as Beach" height={500} width={450} style={{ margin: "20px", borderRadius: "20px" }} />
                    </div>
                    <div className="AdContent" style={{ width: "50%" }}>
                        <hr style={{ border: "5px solid green", width: "50px", backgroundColor: "yellow" }}></hr>
                        <h3>Explore The World</h3>
                        <h1>From Mountains to Beaches, We Make Your Journey Amazing!</h1>
                        <p>At Bangla Path, we craft unforgettable travel experiences,
                            from the serene mountains to the beautiful beaches.
                            With our personalized itineraries and comprehensive visa services,
                            we ensure every trip is seamless and memorable. Let us take care of
                            your travel needs, so you can focus on making memories.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
