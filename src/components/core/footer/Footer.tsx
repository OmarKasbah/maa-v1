import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram'; // If using Material Icons
import FacebookIcon from '@mui/icons-material/Facebook'; // If using Material Icons
import YouTubeIcon from '@mui/icons-material/YouTube'; // If using Material Icons

const Footer: React.FC = () => {
    const handleSocialClick = (url: string) => {
        window.open(url, '_blank'); // Open social links in a new tab
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'black',
                color: 'white',
                padding: '20px',
                marginTop: '20px',
            }}
        >
            {/* Logo on the left */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src="/public/assets/logo.png" alt="Logo" style={{ height: '50px', marginRight: '20px' }} />
                <Typography variant="h6">Your Company Name</Typography>
            </Box>

            {/* Social media icons on the right */}
            <Box>
                <IconButton onClick={() => handleSocialClick('https://instagram.com')}>
                    <InstagramIcon sx={{ color: 'white' }} />
                </IconButton>
                <IconButton onClick={() => handleSocialClick('https://facebook.com')}>
                    <FacebookIcon sx={{ color: 'white' }} />
                </IconButton>
                <IconButton onClick={() => handleSocialClick('https://youtube.com')}>
                    <YouTubeIcon sx={{ color: 'white' }} />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Footer;
