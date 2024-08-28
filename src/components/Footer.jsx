import React from "react";
import "../styles/App.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
    return (
        <>
            <div className="footerDiv">
                <h1>Bangla Path</h1>
                <div className="quickLinks">
                    <h3 style={{ color: "#f9c94a" }}>Quick Links</h3>
                    <ul style={{ listStyleType: "none" }}>
                        <li>Visa</li>
                        <li>Recommendation</li>
                        <li>Hospital Appointment</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="contact-footer">
                    <h3 style={{ color: "#f9c94a" }}>Contact</h3>
                    <p>irfansifat@gmail.com</p>
                    <p>Phone : +8801711325022</p>
                    <h3 style={{ color: "#f9c94a" }}>Address</h3>
                    <p>Thakurpara, Cumilla, Bangladesh - 3500</p>

                </div>
                <div className="social-media-icons" style={{ textAlign: "center" }}>
                    <h3 style={{ color: "#f9c94a" }}>Follow Us</h3>
                    <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
                        <FacebookIcon style={{ color: '#4267B2', fontSize: '30px', margin: '0 10px' }} />
                    </a>
                    <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon style={{ color: '#C13584', fontSize: '30px', margin: '0 10px' }} />
                    </a>
                    <a href="https://wa.me/+8801711325022" target="_blank" rel="noopener noreferrer">
                        <WhatsAppIcon style={{ color: '#25D366', fontSize: '30px', margin: '0 10px' }} />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Footer;
