import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import {useTranslation} from "react-i18next";

const Footer: React.FC = () => {
    const { t } = useTranslation();
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
                maxWidth: '1400px',
                paddingTop: '20px',
                paddingBottom: '20px',
                width: '100%',
                margin: '0 auto',  // Ensures footer stays centered
                flexDirection: { xs: 'column', md: 'row' }, // Responsive stacking on small screens
                textAlign: { xs: 'center', md: 'left' } // Center text on smaller screens
            }}
        >
            {/* Logo and Text on the left */}
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: { xs: 'column', md: 'row' } }}>
                <img src="./assets/logo.png" alt="Logo" style={{ height: '50px', marginRight: '20px' }} />

                {/* Registered symbol and text */}
                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: { xs: 'column', md: 'row' }, marginBottom: { xs: '10px', md: '0' } }}>
                    <Typography
                        variant="h6" // Larger font size for the registered symbol
                        sx={{ fontFamily: 'Crimson Pro, serif', marginRight: '8px', fontSize: '1.5rem' }}
                    >
                        ®
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ fontFamily: 'Crimson Pro, serif' }}
                    >
                        {t('footer.rights')}
                    </Typography>
                </Box>
            </Box>

            {/* Social media icons on the right */}
            <Box sx={{ display: 'flex', gap: '10px', marginTop: { xs: '10px', md: '0' } }}>
                <IconButton onClick={() => handleSocialClick('https://www.instagram.com/pinkpuzzle_official/')}>
                    <img
                        src="./assets/insta.png"
                        alt="Instagram"
                        style={{ width: '40px', height: '40px' }}
                    />
                </IconButton>
                <IconButton onClick={() => handleSocialClick('https://www.facebook.com/PinkPuzzleFilm/?locale=de_DE')}>
                    <img
                        src="./assets/face.png"
                        alt="Facebook"
                        style={{ width: '40px', height: '40px' }}
                    />
                </IconButton>
                <IconButton onClick={() => handleSocialClick('https://www.youtube.com/watch?v=cpXcCMnKsew')}>
                    <img
                        src="./assets/you.png"
                        alt="YouTube"
                        style={{ width: '40px', height: '40px' }}
                    />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Footer;
