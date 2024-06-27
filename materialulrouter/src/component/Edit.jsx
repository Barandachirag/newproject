import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

function Edit() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        description: '',
        category: '',
        image: '',
        rate: '',
        count: ''
    });

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                setFormData({
                    title: response.data.title,
                    price: response.data.price.toString(),
                    description: response.data.description,
                    category: response.data.category,
                    image: response.data.image,
                    rate: response.data.rating.rate.toString(),
                    count: response.data.rating.count.toString()
                });
            })
            .catch(error => console.error(error.message));
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleEdit = () => {
        axios.patch(`https://fakestoreapi.com/products/${id}`, {
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
            console.log('Product updated:', response.data);
            navigate('/');
        }) 
        .catch(error => console.error(error.message));
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4">Edit Product</Typography>
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
            <Button onClick={handleEdit} variant='contained' color='primary'>Submit</Button>
        </Box>
    );
}

export default Edit;




