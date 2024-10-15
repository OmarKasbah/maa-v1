import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TrailerModal from "../../modals/TrailerModal.tsx";

const Header = ({ activeSection, isVisible }) => {
    const [open, setOpen] = useState(false); // For trailer modal
    const [drawerOpen, setDrawerOpen] = useState(false); // State for burger menu

    const sections = ['Plot', 'Synopsis', 'Produzenten', 'Entstehung', 'Cast', 'Stabsliste'];

    // Open the modal for trailer
    const handleOpen = () => setOpen(true);

    // Close the modal for trailer
    const handleClose = () => setOpen(false);

    // Toggle the burger menu drawer
    const toggleDrawer = (open) => (event) => {
        setDrawerOpen(open);
    };

    // Smooth scroll to section and close the menu
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId.toLowerCase());
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        setDrawerOpen(false); // Close drawer after selecting an item
    };

    return (
        <>
            {/* Header: Logo and Trailer Button */}
            <AppBar
                sx={{
                    backgroundColor: 'black',
                    height: 'auto',
                    padding: '8px 0',
                    position: 'fixed',
                    top: 0,
                    width: '100%',
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out',
                    pointerEvents: isVisible ? 'auto' : 'none',
                }}
            >
                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        maxWidth: '1200px',
                        padding: '0 24px',
                        margin: '0 auto',
                    }}
                >
                    {/* Logo: Centered in normal mode, Left in responsive mode */}
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' }, // Hidden on small screens
                            justifyContent: 'center',
                            flexGrow: 1,
                        }}
                    >
                        <img
                            src="/assets/logo.png" // Corrected path
                            alt="Logo"
                            style={{ height: '50px', cursor: 'pointer', marginLeft: '140px' }}
                            onClick={() => scrollToSection('what')} // Scroll to top on logo click
                        />
                    </Box>

                    {/* Trailer Button: Shown on larger screens */}
                    <Box sx={{ display: { xs: 'none', md: 'flex', marginRight: '12px'}, alignItems: 'center' }}>
                        <Button
                            sx={{
                                color: '#6b014f', // Updated active color
                                border: '1px solid #6b014f',
                                textTransform: 'none', // Ensure text remains as it is
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    color: '#FF56FF',
                                    borderColor: '#FF56FF',
                                }
                            }}
                            onClick={handleOpen}
                        >
                            Trailer anschauen {/* Changed to lowercase "a" */}
                        </Button>
                    </Box>

                    {/* Burger Menu: Shown on small screens */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                            sx={{ color: '#FF56FF' }} // Pink for the burger icon
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>

                {/* Bottom row: Tabs for Navigation (visible on larger screens) */}
                <Box
                    sx={{
                        display: { xs: 'none', md: 'flex' }, // Hidden on small screens
                        position: 'relative',
                        alignItems: 'center',
                        width: '100%',
                        justifyContent: 'flex-start', // Left-aligned tabs
                        maxWidth: '1200px',
                        margin: '0 auto',
                        paddingLeft: '24px',
                    }}
                >
                    {/* Connected line above the tabs */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '-2px',
                            left: '0',
                            right: '0', // Added to make it stretch across the container
                            width: '96%', // Set the width to a smaller percentage
                            height: '1px',
                            backgroundColor: '#6b014f',
                            zIndex: 0, // Place the line behind the buttons
                            margin: '0 auto', // Center the line horizontally
                            marginLeft: 'auto', // Add auto margin to both sides to center
                            marginRight: 'auto', // This will ensure it's centered
                        }}
                    />

                    {sections.map((section, index) => {
                        const displaySection = section.charAt(0).toUpperCase() + section.slice(1).toLowerCase(); // Format section name
                        return (
                            <Box
                                key={section}
                                sx={{ textAlign: 'center', position: 'relative', zIndex: 1, marginRight: index !== sections.length - 1 ? 0.5 : 0 }} // Decreased margin between sections
                            >
                                {activeSection === section.toLowerCase() && (
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: '-2px',
                                            left: 0,
                                            right: 0,
                                            height: '1px',
                                            backgroundColor: '#FF56FF', // Updated active color
                                            transition: 'background-color 0.3s ease',
                                        }}
                                    />
                                )}
                                <Button
                                    sx={{
                                        color: activeSection === section.toLowerCase() ? '#FF56FF' : '#6b014f', // Updated inactive color to a lighter gray
                                        fontSize: '1rem', // Increased font size for sections
                                        fontFamily: 'Crimson Pro, serif',
                                        textTransform: 'none', // Ensure text remains as it is
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                        }
                                    }}
                                    onClick={() => scrollToSection(section)}
                                >
                                    {displaySection} {/* Use formatted section name */}
                                </Button>
                            </Box>
                        );
                    })}
                </Box>
            </AppBar>

            {/* Burger menu drawer (opens from top) */}
            <Drawer
                anchor="top" // Drawer opens from the top
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            >
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: '500px', // Center the drawer with a max width
                        margin: '0 auto', // Center the drawer horizontally
                        backgroundColor: 'black',
                        color: 'white',
                        padding: '16px',
                    }}
                >
                    <List>
                        {sections.map((section) => (
                            <ListItem
                                button
                                key={section}
                                onClick={() => scrollToSection(section)}
                            >
                                <ListItemText primary={section.charAt(0).toUpperCase() + section.slice(1).toLowerCase()} sx={{ color: '#FF56FF', textTransform: 'none' }} />
                            </ListItem>
                        ))}
                        <ListItem
                            button
                            onClick={handleOpen} // Add action for trailer button
                        >
                            <ListItemText primary="Trailer anschauen" sx={{ color: '#FF56FF', textTransform: 'none' }} />
                        </ListItem>
                    </List>
                </Box>
            </Drawer>

            {/* Trailer Modal */}
            <TrailerModal open={open} handleClose={handleClose} />
        </>
    );
};

export default Header;
