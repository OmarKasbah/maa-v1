import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Grid, TextField, Button, Box, Typography } from '@mui/material';

const ContactSection: React.FC = () => {
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
            'u5FGLsjYZLeVLfuD2'           // Replace with your EmailJS User ID
        )
            .then((result) => {
                setStatusMessage('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' }); // Clear the form after submission
            }, (error) => {
                setStatusMessage('Failed to send the message. Please try again.');
            });
    };

    return (
        <Box sx={{ padding: '20px', backgroundColor: 'black', color: 'white' }}>
            <Typography variant="h4" gutterBottom sx={{ color: 'white', textAlign: 'center' }}>
                Contact Us
            </Typography>

            <Grid container spacing={4}>
                {/* Left side: Information and Imprint */}
                <Grid item xs={12} md={6}>
                    <Box sx={{ padding: '20px', color: 'white' }}>
                        <Typography variant="h5" gutterBottom sx={{ color: 'white' }}>
                            Information
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white' }}>
                            Plot, Synopsis, Regie, Produzenten, Entstehung, Cast, Stabsliste
                        </Typography>

                        <Typography variant="h5" gutterBottom sx={{ color: 'white', marginTop: '20px' }}>
                            Imprint
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white' }}>
                            Example Company <br />
                            Address: 1234 Fictional St, Berlin, DE <br />
                            Email: contact@example.com <br />
                            Phone: +49 123 456 789
                        </Typography>
                    </Box>
                </Grid>

                {/* Right side: Contact form */}
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            padding: '20px',
                            backgroundColor: 'black',
                            color: 'white',  // Set font color to white
                            borderRadius: '8px', // Rounded corners
                        }}
                    >
                        <form onSubmit={sendEmail}>
                            <Grid container spacing={2}>
                                {/* Name and Email side by side on larger screens */}
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        variant="outlined"
                                        InputLabelProps={{
                                            style: { color: 'white' },  // White label
                                        }}
                                        InputProps={{
                                            style: { color: 'white' },  // White input text
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

                                <Grid item xs={12} sm={6}>
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
                                            style: { color: 'white' },  // White label
                                        }}
                                        InputProps={{
                                            style: { color: 'white' },  // White input text
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

                                {/* Message textarea */}
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
                                            style: { color: 'white' },  // White label
                                        }}
                                        InputProps={{
                                            style: { color: 'white' },  // White input text
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

                                {/* Send button aligned to the right */}
                                <Grid item xs={12}>
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
                                            width: '100%' // Make the button the same width as the fields
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
            </Grid>
        </Box>
    );
};

export default ContactSection;
