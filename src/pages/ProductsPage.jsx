// Import react state hook and MUI hook
import { useState, useEffect } from 'react';
import { Container, Typography, Grid, TextField } from '@mui/material'; //For Material UI
import ProductCard from '../components/ProductCard';

function ProductsPage () {
    const [cameras, setCameras] = useState([]); //Holld state for cameras in json server
    const [search, setSearch] = useState(''); //Hold state for search when user types

    //fetch cameras on page load
    useEffect (() => {
        fetch('http://localhost:3001/cameras')
        .then(res => res.json())
        .then(data => {
            setCameras(data)
        })       
    }, []); //empty dependencies array to run the fetch request only once

    const filteredCameras = cameras.filter(camera =>
        camera.name.includes(search)
    ); // Filters list based on what user searches

    return (
        <Container>
            <Typography variant="h4">Products</Typography>
            <TextField
                label="Search cameras"
                variant="outlined"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                sx={{
                    backgroundColor: 'white',
                }}
            />
            <Grid>
                {filteredCameras.map(camera => (
                    <ProductCard camera={camera}/> //will be sent as prop to ProductCard
                ))};
           </Grid>
            
                
        </Container>
    );
};

export default ProductsPage;