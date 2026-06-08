import {Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; //sends user to product detail page

function ProductCard ({ camera }) { //Receive camera prop from products page
    const navigate =useNavigate() // To allow navigation to another page

    return (
        <Card>
            <CardContent> {/* will show camera details using camera prop*/}
                <Typography variant="h6">{camera.name}</Typography>
                <Typography>Brand: {camera.brand}</Typography>
                <Typography>Description:{camera.description}</Typography>
                <Typography>Origin: {camera.origin}</Typography>
                <Typography>Price: {camera.price}</Typography>

                {/* Button to take user to the camera detail page*/}
                <Button variant="contained" onClick={() => navigate('/product/${camera.id}')}>View Details</Button>
            </CardContent> 
            
        </Card>
    );

};

export default ProductCard;