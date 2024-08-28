import React from "react";
import Navbar from "../components/Navbar";
import girl from "../assets/woman-Home.png"
import ContactUs from "../components/ContactUsBtn";
import MyCard from "../components/Card";
import AirplanemodeActiveRoundedIcon from '@mui/icons-material/AirplanemodeActiveRounded';
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';
import ModeOfTravelRoundedIcon from '@mui/icons-material/ModeOfTravelRounded';
import AssistantIcon from '@mui/icons-material/Assistant';
import map from "../assets/map.jpg"
import medical from "../assets/medical.jpg"
import Rajasthan from "../assets/Rajasthan.jpg"
import Trekking from "../assets/Trekking.jpg"
import Footer from "../components/Footer";


const Home = () => {
    return (
        <>
            <div className="title-welcome" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="title-div">
                    <h4>WELCOME TO BANGLA PATH</h4>
                    <h1 style={{ fontSize: "100px" }}>Your Journey Architect</h1>
                    <p>With unparalleled expertise, insider tips, and tailor-made itineraries,
                        Bangla Path crafts the perfect travel experiences,
                        ensuring your journeys are seamless,
                        unforgettable adventures.</p>
                    <ContactUs />

                </div>
                <div className="title-image">
                    <img src={girl} style={{border: "2px solid #00183A", borderRadius: "0 50px 0 50px", height: "60%", width: "60%" }} />
                </div>
            </div>
            <div className="services-div">
                <hr style={{ border: "5px solid green", width: "50px", backgroundColor: "yellow" }}></hr>
                <div className="service-heading">
                    <h3 style={{ fontSize: "80px" }}>Prime Services</h3>
                    <h4>Remarkable Travels and Discoveries</h4>
                </div>

                <div className="card-Details">
                    <MyCard
                        image={AirplanemodeActiveRoundedIcon}
                        Name="Curated Travel Spots"
                        Details="Discover the world's most breathtaking destinations, carefully selected to match your preferences and interests."

                    />
                    <MyCard
                        image={AssistantIcon}
                        Name="Recommendation using AI"
                        Details="Our system analyzes your preferences and past trips to deliver tailored recommendations, making your travel planning effortless and precise."

                    />
                    <MyCard
                        image={ModeOfTravelRoundedIcon}
                        Name="Curated Travel Spots"
                        Details="Enjoy personalized itineraries designed just for you, ensuring a memorable journey that caters to your unique travel style."
                    />
                    <MyCard
                        image={TravelExploreRoundedIcon}
                        Name="Seamless Visa Applications"
                        Details="Experience hassle-free visa processing with our expert assistance, making your international travel smooth and worry-free."

                    />
                </div>
                <h2 style={{ marginTop: "100px" }}>A journey that will forever linger in my heart, etched with moments of wonder and growth, impossible to forget.</h2>
                <ContactUs />
            </div>
            <div className="WhoWeAre">
                <div className="map-image" >
                    <img src={map} alt="map-image" height={500} style={{ borderRadius: "200px 0 200px 0" }} />
                </div>
                <div className="our-Details">
                    <hr style={{ border: "5px solid green", width: "50px", backgroundColor: "yellow" }}></hr>
                    <h2>Who are we ?</h2>
                    <h1>
                        Bangla Path - Where Unforgettable Adventures Start!
                    </h1>
                    <p>Embark on adventures, uncover hidden gems, and immerse yourself
                        in rich cultures. We carefully curate exceptional travel experiences
                        to fuel your wanderlust, and with our AI-powered recommendation system,
                        we craft personalized itineraries just for you. Let us lead you to the
                        remarkable destinations that await.</p>
                    <ContactUs />
                </div>
            </div>
            <div className="activities">
            
                <div className="activity-details">
                <hr style={{ border: "5px solid green", width: "50px", backgroundColor: "yellow" }}></hr>
                    <h1>Activities with Bangla Path:</h1>
                    <p>
                        Discover the World,Find Your Relaxation! Embark on adventures to
                        uncover stunning destinations, from serene beaches to lush forests.
                        Step away from your daily routine and let Bangla Path guide you to places
                        where you can rejuvenate, recharge, and gain a fresh perspective on life.
                    </p>
                </div>
                <div className="slideshow">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={Trekking} class="d-block w-100" alt="..." style={{borderRadius:"50px 0 50px 0"}}/>
                                <h2>Trekking</h2>
                            </div>
                            <div className="carousel-item">
                                <img src={medical} class="d-block w-100" alt="..." style={{borderRadius:"50px 0 50px 0"}}/>
                                <h2>Medical</h2>
                            </div>
                            <div className="carousel-item">
                                <img src={Rajasthan} class="d-block w-100" alt="..." style={{borderRadius:"50px 0 50px 0"}}/>
                                <h2>Culture</h2>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </>
    );
}

export default Home;
