import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Grid, TextField, Button, Box, Typography } from '@mui/material';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [statusMessage, setStatusMessage] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.send(
            'service_18rakli',           // Replace with your EmailJS Service ID
            'template_obojjgl',           // Replace with your EmailJS Template ID
            formData,                     // Send formData as the email content
            'u5FGLsjYZLeVLfuD2'                // Replace with your EmailJS User ID
        )
            .then((result) => {
                setStatusMessage('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' }); // Clear the form after submission
            }, (error) => {
                setStatusMessage('Failed to send the message. Please try again.');
            });
    };

    return (
        <Grid container justifyContent="flex-end">
            <Box
                sx={{
                    padding: '20px',
                    backgroundColor: 'black',
                    color: 'white',  // Set font color to white
                    width: '600px',  // Increased width for the form
                    borderRadius: '8px', // Rounded corners
                }}
            >
                <form onSubmit={sendEmail}>
                    <Grid container spacing={2}>
                        {/* Name and Email side by side */}
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                variant="outlined"
                                InputLabelProps={{
                                    style: { color: 'white' },
                                }}
                                InputProps={{
                                    style: { color: 'white' },
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#FF56FF', // Outline color
                                            borderWidth: '0.5px', // Reduced outline thickness
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#FF56FF',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#FF56FF',
                                        },
                                    },
                                }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                variant="outlined"
                                InputLabelProps={{
                                    style: { color: 'white' },
                                }}
                                InputProps={{
                                    style: { color: 'white' },
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#FF56FF', // Outline color
                                            borderWidth: '0.5px', // Reduced outline thickness
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#FF56FF',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#FF56FF',
                                        },
                                    },
                                }}
                            />
                        </Grid>

                        {/* Message textarea below */}
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                multiline
                                rows={6}  // Bigger text area for message
                                variant="outlined"
                                InputLabelProps={{
                                    style: { color: 'white' },
                                }}
                                InputProps={{
                                    style: { color: 'white' },
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#FF56FF', // Outline color
                                            borderWidth: '0.5px', // Reduced outline thickness
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#FF56FF',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#FF56FF',
                                        },
                                    },
                                }}
                            />
                        </Grid>

                        {/* Send button aligned to the right and same size as email box */}
                        <Grid item xs={12} md={6} ml="auto">
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    backgroundColor: '#FF56FF',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: '#E048E0',
                                    },
                                    width: '100%' // Make the button the same width as the email field
                                }}
                            >
                                Send Message
                            </Button>
                        </Grid>
                    </Grid>
                </form>

                {statusMessage && (
                    <Typography variant="body1" sx={{ marginTop: '10px', color: '#FF56FF' }}>
                        {statusMessage}
                    </Typography>
                )}
            </Box>
        </Grid>
    );
};

export default ContactForm;
