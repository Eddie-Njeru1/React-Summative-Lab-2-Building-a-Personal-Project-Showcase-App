import { useState } from "react"; //Track form input
import { Container, Typography, TextField, Button, Box } from '@mui/material' //MUI styling
import { useNavigate } from 'react-router-dom' //to redirect after form submission

function AddProductPage() {
    const navigate = useNavigate() //handle Redirect to another page after product is added 
    const [formData, setFormData] = useState({ //Hold form values
        name: '',
        brand: '',
        description: '',
        origin: '',
        price: '',

    })

    function handleChange(e) { //Runs when user types 
        setFormData({...formData, [e.target.name]: e.target.value}) //update the changed field only
    }

    function handleSubmit(e) { //Runs when user clicks submit
        e.preventDefault()

        fetch('http://localhost:3001/cameras', { //sends request to json server to add new camera
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(() => {
            navigate('/products')
        })
    }

    return (
        <Container>
            <Typography variant="h4">Add Product</Typography>
            <Box>
                <TextField label="Name" name="name" value={formData.name} onChange={handleChange}/>
                <TextField label="Brand" name="brand" value={formData.brand} onChange={handleChange}/>
                <TextField label="Description" name="description" value={formData.description} onChange={handleChange}/>
                <TextField label="Origin" name="origin" value={formData.origin} onChange={handleChange}/>
                <TextField label="Price" name="price" value={formData.price} onChange={handleChange}/>
                <Button variant="contained" onClick={handleSubmit}>Add Product</Button>
            </Box>
        </Container>
    );
};

export default AddProductPage;