import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

function Add() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        description: '',
        category: '',
        image: '',
        rate: '',
        count: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAdd = () => {
        axios.post('https://fakestoreapi.com/products', {
            title: formData.title,
            price: parseFloat(formData.price),
            description: formData.description,
            category: formData.category,
            image: formData.image,
            rating: {
                rate: parseFloat(formData.rate),
                count: parseInt(formData.count)
            }
        })
        .then(response => {
            console.log('Product added:', response.data);
            navigate('/');
        })
        .catch(error => console.error(error.message));
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4">Add Product</Typography>
            {Object.keys(formData).map((key) => (
                <TextField
                    key={key}
                    name={key}
                    value={formData[key]}
                    onChange={handleInputChange}
                    label={key.charAt(0).toUpperCase() + key.slice(1)}
                    variant="filled"
                    fullWidth 
                    margin="normal"
                />
            ))}
            <Button onClick={handleAdd} variant='contained' color='primary'>Submit</Button>
        </Box>
    );
}

export default Add;




