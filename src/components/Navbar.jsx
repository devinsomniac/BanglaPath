import React from "react";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#f9c94a" , height:"80px", fontSize:"larger"}}>
            <div className="container-fluid" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                
                {/* Left: Brand Name */}
                <Link className="navbar-brand" to="/">Bangla Path</Link>
                
                {/* Toggle Button */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                {/* Right: Nav Links and Buttons */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link" to="/visa">Visa</Link>
                        <Link className="nav-link" to="/recommendation">Recommendation</Link>
                        <Link className="nav-link" to="/appointment">Hospital Appointment</Link>
                        <Link className="nav-link" to="/about">About Us</Link>
                        <Link className="nav-link" to="/contact">Contact Us</Link>
                        <Link to="/login">
                            <Button sx={{backgroundColor:"#00183A", marginLeft: "10px"}} variant="contained">Log In</Button>
                        </Link>
                        <Link to="/signup">
                            <Button sx={{backgroundColor:"#00183A", marginLeft: "10px"}} variant="contained">Sign Up</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
