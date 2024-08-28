import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import beach from "../assets/beach.jpg"

const Contact = () => {
    return (
        <div className="contactDiv" style={{ height: "100vh", display: "flex", justifyContent: "center", margin:"50px" }}>
            <div className="form-contact" style={{width:"50%",display:"flex", justifyContent:"end", alignItems:"center"}}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '100%' },
                        maxWidth: '500px', // Adjust the width as needed
                        margin: '50px', // Center the form
                        padding: '20px',
                        borderRadius: '8px',
                        textAlign: "center",
                        height: "600px",
                        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)"

                    }}
                    noValidate
                    autoComplete="off"
                >
                    <h1>Contact Us</h1>
                    <TextField
                        required
                        id="first-name"
                        label="First Name"
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="last-name"
                        label="Last Name"
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="email"
                        label="Email"
                        type="email"
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="phone-number"
                        label="Phone Number"
                        type="tel"
                        variant="outlined"
                    />
                    <TextField
                        id="message"
                        label="Message"
                        multiline
                        rows={4}
                        variant="outlined"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        sx={{ mt: 2, width: '100%' }}
                    >
                        Submit
                    </Button>
                </Box>
            </div>

            <div className="contactContent" style={{width:"50%",display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"start", fontSize:"x-large"}}>
                <hr style={{ border: "5px solid green", width: "50px", backgroundColor: "yellow" }}></hr>
                <h3>Who Are we ?</h3>
                <h1>Explore the World with Us!</h1>
                <p>Bangla Path is a trusted travel agency with over 10 years of experience,
                    specializing in customized itineraries and affordable visa services.
                    We also provide dedicated assistance and guidance for patients needing to
                    visit hospitals in India, ensuring a smooth and hassle-free journey.To Know more about us you can give contact us at any time.</p>
                    <img src={beach} alt="beach" height={500} width={500} style={{ borderRadius: "10%" }} />
            </div>
        </div>
    );
};

export default Contact;
