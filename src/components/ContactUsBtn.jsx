import React from "react";
import Button from '@mui/material/Button';

const ContactUs = () => {
    return(
        <>
        <Button
                        className="contactUsBtn"
                        sx={{
                            backgroundColor: "#f9c94a",
                            color: "#00183A",
                            border: "2px solid #00183A",
                            borderRadius: "30px",
                            fontWeight: "bolder",
                            margin:"20px",
                            '&:hover': {
                                backgroundColor: "#00183A",
                                color: "yellow",
                                border: "2px solid yellow",
                            }
                        }}
                        variant="outlined"
                    >
                        Contact Us
                    </Button>
        </>
    )
}

export default ContactUs