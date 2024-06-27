import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography, Card, CardContent, CardActions } from '@mui/material';
import axios from 'axios';

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error(error.message));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`https://fakestoreapi.com/products/${id}`)
            .then(() => setProducts(products.filter(product => product.id !== id)))
            .catch(error => console.error(error.message));
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4">Products</Typography>
            <Button component={Link} to="/add" variant="contained" color="primary">Add Product</Button>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
                {products.map(product => (
                    <Card key={product.id} sx={{ width: '300px' }}>
                        <CardContent>
                            <Typography variant="h5">{product.title}</Typography>
                            <Typography variant="body2" color="textSecondary">{product.description}</Typography>
                            <Typography variant="h6">${product.price}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button component={Link} to={`/edit/${product.id}`} size="small" color="primary">Edit</Button>
                            <Button size="small" color="secondary" onClick={() => handleDelete(product.id)}>Delete</Button>
                        </CardActions>
                    </Card>
                ))}
            </Box>
        </Box>
    );
}

export default Home;


