import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { yellow } from "@mui/material/colors";

const MyCard = ({ image: Icon, Name, Details }) => {
    return (
        <>
            <Card sx={{ 
                height: "90%",
                width: "30%",
                margin: '1rem', 
                textAlign: 'center', 
                backgroundColor: "#f9c94a", 
                borderRadius: "30px 0 30px 0", 
                color: "#00183A",
                boxShadow:"0 4px 8px rgba(0, 0, 0, 0.5)",
                transition: 'background-color 0.5s, color 0.5s',
                '&:hover': {
                                backgroundColor: "#00183A",
                                color: "#f9c94a",
                            } }}>
                <CardContent>
                    {Icon && <Icon sx={{ fontSize: 50, marginBottom: '1rem', borderRadius: "50% 0 50% 0" }} />}

                    <Typography gutterBottom variant="h3" component="div">
                        {Name}
                    </Typography>
                    <Typography variant="body8">
                        {Details}
                    </Typography>
                </CardContent>
            </Card>
        </>

    )
}

export default MyCard