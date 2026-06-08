import { useState, useEffect } from 'react' //react hook needed
import {Container, Typography, TextField, Button, Box} from '@mui/material' //for MUI styling
import { useParams } from 'react-router-dom' // Gets the id from URL

function ProductDetailPage() {
    const { id } = useParams() // gets the id from URL
    const [camera, setCamera] = useState(null) //Holds data about camera from json server
    const [newPrice, setNewPrice] = useState('') //holds state when new value is entered

    useEffect(() => { //fetch a single camera when page is loaded
        fetch(`http://localhost:3001/cameras/${id}`)
        .then(res => res.json())
        .then(data => {
            setCamera(data)
        })
    }, [id])

    function handlePriceUpdate() { //Send PATCH request to server to update price
        fetch(`http://localhost:3001/cameras/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ price: newPrice })
        })
        .then(res => res.json())
        .then(updatedCamera => {
            setCamera(updatedCamera) //update camera state with new price
            setNewPrice('') // clears the typing input area
    })
}

if (!camera) return <Typography>Loading...</Typography> //Show loading page if data isn't loaded
return (
    <Container>
        <Box>
            <Typography variant="h4">{camera.name}</Typography>
            <Typography>Brand: {camera.brand}</Typography>
            <Typography>Description: {camera.description}</Typography>
            <Typography>origin: {camera.origin}</Typography>
            <Typography>Price: {camera.price}</Typography>

            <Box>
                <Typography variant="h4">Update Price</Typography>
                <TextField label="New Price" value={newPrice} onChange={(e) => setNewPrice(e.target.value)}/>
                    <Button variant="contained" onClick={handlePriceUpdate}>Update</Button>
            </Box>
        </Box>
    </Container>
)

}

export default ProductDetailPage;