import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
// import { Link } from 'react-router-dom';

export default function ActionCard() {
    return (
        <Card 
            sx={{ maxWidth: 250, textDecoration: "none" }} 
            // component={Link} 
            // to={path}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    image='https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp'
                    alt='png'
                    sx={{
                        height: 150,
                        objectFit: "cover", 
                    }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Card Title
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                       Card Decs
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
