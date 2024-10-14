import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';
import TrailerModal from "../../modals/TrailerModal.tsx";

const Header = ({ activeSection }) => {
    const [open, setOpen] = useState(false);

    const sections = ['Plot', 'Synopsis', 'Regie', 'Produzenten', 'Entstehung', 'Cast', 'Stabsliste'];

    // Open the modal for trailer
    const handleOpen = () => setOpen(true);

    // Close the modal for trailer
    const handleClose = () => setOpen(false);

    // Function to determine the button color
    const getButtonColor = (section) => {
        const activeColor = '#f11cf1'; // Active color
        const inactiveColor = '#f46cf4'; // Slightly dimmer version of the active color

        return activeSection === section.toLowerCase() ? activeColor : inactiveColor;
    };

    // Smooth scroll to section
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId.toLowerCase());
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <>
            {/* Header for Logo and Trailer Button */}
            <AppBar sx={{ backgroundColor: 'black', height: 80 }} position="fixed">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    {/* Centered Logo */}
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                        <img src="/public/assets/logo.png" alt="Logo" style={{ height: '50px' }} />
                    </Box>

                    {/* Right-aligned Trailer Button */}
                    <Box sx={{ flexShrink: 0 }}>
                        <Button
                            sx={{
                                color: '#f11cf1',
                                border: '1px solid #f46cf4',
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    borderColor: '#f11cf1',
                                }
                            }}
                            onClick={handleOpen}
                        >
                            Trailer Anschauen
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Header for Tabs */}
            <AppBar sx={{ backgroundColor: 'black', height: 60, marginTop: 7 }} position="fixed">
                <Toolbar>
                    {/* Left-aligned Tabs */}
                    <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                        {/* Connected line above the tabs */}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '-2px', // Make the line closer and thinner
                                left: 0,
                                right: 0,
                                height: '1px', // Thinner line
                                backgroundColor: '#f46cf4', // Default grey color for the line
                            }}
                        />

                        {sections.map((section, index) => (
                            <Box
                                key={section}
                                sx={{ textAlign: 'center', position: 'relative', zIndex: 1, marginRight: index !== sections.length - 1 ? 2 : 0 }} // Add margin between buttons
                            >
                                {/* Highlighted line above the active tab */}
                                {activeSection === section.toLowerCase() && (
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: '-2px', // Align with the thinner connected line
                                            left: 0,
                                            right: 0,
                                            height: '1px', // Thinner line
                                            backgroundColor: '#f11cf1', // Active section color
                                            transition: 'background-color 0.3s ease',
                                        }}
                                    />
                                )}
                                <Button
                                    sx={{
                                        color: getButtonColor(section), // Custom color for active/inactive
                                        fontSize: '0.875rem', // Smaller font size for tabs
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                        }
                                    }}
                                    onClick={() => scrollToSection(section)}
                                >
                                    {section}
                                </Button>
                            </Box>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Trailer Modal */}
            <TrailerModal open={open} handleClose={handleClose} />
        </>
    );
};

export default Header;
