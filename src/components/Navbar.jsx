import { AppBar, Toolbar, Typography, Button } from '@mui/material'; //App will be styled using Material UI
import { Link } from 'react-router-dom'; //This handles navigation across all the pages on the app

function Navbar() { //Everything will align with Material UI styling principles
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1}}>Camera World</Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/products">Products</Button>
                <Button color="inherit" component={Link} to="/add-poduct">Add Product</Button>
                {/*component={Link} connects MUI button with react router link*/}
            </Toolbar>
        </AppBar>
    );
    
};

export default Navbar;