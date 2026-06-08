// Import react state hook and MUI hook
import { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material'; //For Material UI

function LandingPage () {
    const [storeInfo, setStoreInfo] = useState(null) //Holds info received from json server 
    useEffect(() => { //Runs on first page load
        fetch('http://localhost:3001/store_info/1') //Gets info about the store from json server
        .then(res => res.json())
        .then(data => {
            setStoreInfo(data) //Stores the state of store info
        })
    }, []);

    if (!storeInfo) return <Typography>Loading...</Typography> //When data doesn't load
    
    //Store info returned from db.json which has all the store info 
    return (
        <Container> 
            <Box mt={5} textAlign="center">
                <Typography variant="h3">{storeInfo.name}</Typography>
                <Typography variant="h6">{storeInfo.description}</Typography>
                <Typography variant="h7">{storeInfo.phone_number}</Typography>
            </Box>
        </Container>
    );
};

