import React, { useState } from 'react';
import { Grid, TextField, Button, Box, Typography } from '@mui/material';
import emailjs from 'emailjs-com';

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
        <Box
            sx={{
                padding: '20px',          // Padding inside the content area
                marginX: 'auto',          // Center the content horizontally
                maxWidth: '90%',          // Constrain the content width (similar to header behavior)
                backgroundColor: 'black',
                color: 'white',
                position: 'relative',     // Ensure proper positioning for lines
            }}
        >
            {/* White line on top */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: '0%',            // Adds inset to match the header
                    right: '0%',           // Adds inset to match the header
                    height: '1px',         // Thickness of the line
                    backgroundColor: 'white',
                    zIndex: 1,             // Ensure the line is above the content
                }}
            />

            {/* White line on bottom */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: '0%',            // Adds inset to match the header
                    right: '0%',           // Adds inset to match the header
                    height: '1px',         // Thickness of the line
                    backgroundColor: 'white',
                    zIndex: 1,             // Ensure the line is above the content
                }}
            />

            <Grid container spacing={4}>
                {/* Left side: Information and Imprint */}
                <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '50px' }}>
                        {/* Information Section */}
                        <Box sx={{ color: 'white', textAlign: 'left' }}>
                            <Typography variant="h6" gutterBottom sx={{ color: 'white', fontWeight: 'bold', paddingLeft: '20px',         fontFamily: 'Crimson Pro, serif', // Apply the Crimson Pro font
                            }}>
                                Information
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'white', paddingLeft: '20px', fontFamily: 'Crimson Pro, serif', // Apply the Crimson Pro font
                            }}>
                                Plot,<br />
                                Synopsis,<br />
                                Regie,<br />
                                Produzenten,<br />
                                Entstehung,<br />
                                Cast,<br />
                                Stabsliste
                            </Typography>
                        </Box>

                        {/* Imprint Section */}
                        <Box sx={{ color: 'white', textAlign: 'left' }}>
                            <Typography variant="h6" gutterBottom sx={{ color: 'white', fontWeight: 'bold', paddingLeft: '20px', fontFamily: 'Crimson Pro, serif' }}>
                                Imprint
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'white', paddingLeft: '20px', fontFamily: 'Crimson Pro, serif' }}>
                                Example Company <br />
                                Address: 1234 Fictional St, Berlin, DE <br />
                                Email: contact@example.com <br />
                                Phone: +49 123 456 789
                            </Typography>
                        </Box>

                    </Box>
                </Grid>

                {/* Right side: Contact form */}
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            padding: '20px',
                            backgroundColor: 'black',
                            color: 'white',
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
                                <Grid item xs={12} display="flex" justifyContent="flex-end">
                                    <Button
                                        type="submit"
                                        variant="outlined"
                                        sx={{
                                            backgroundColor: 'black',
                                            color: '#FF56FF',
                                            borderColor: '#FF56FF',
                                            borderWidth: '0.5',
                                            '&:hover': {
                                                borderColor: '#FF56FF',
                                            },
                                            width: '47%', // Allows the button to take its natural size
                                            marginTop: '8px',  // Adds space from the text area
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
