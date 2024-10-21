import { useState } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TrailerModal from "../../modals/TrailerModal.tsx";

interface HeaderProps {
    activeSection: string;
    isVisible: boolean;
}

const Header = ({ activeSection, isVisible }: HeaderProps) => {
    const [open, setOpen] = useState(false); // For trailer modal
    const [drawerOpen, setDrawerOpen] = useState(false); // State for burger menu

    const sections = ['Plot', 'Synopsis', 'Produzenten', 'Entstehung', 'Cast', 'Stabsliste', 'Nächstes Projekt'];

    // Open the modal for trailer
    const handleOpen = () => setOpen(true);

    // Close the modal for trailer
    const handleClose = () => setOpen(false);

    // Toggle the burger menu drawer
    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    // Smooth scroll to section and close the menu
    const scrollToSection = (sectionId: string) => {
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
                        maxWidth: '1400px',
                        padding: '0 24px',
                        margin: '0 auto',
                    }}
                >
                    {/* Logo: Centered in normal mode, Left in responsive mode */}
                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'flex', md: 'flex' },
                            justifyContent: 'center',
                            flexGrow: 1,
                        }}
                    >
                        <img
                            src="./assets/logo.png"
                            alt="Logo"
                            style={{ height: '50px', cursor: 'pointer', marginLeft: '140px' }}
                            onClick={() => scrollToSection('video')} // Scroll to top on logo click
                        />
                    </Box>

                    {/* Trailer Button: Shown on larger screens */}
                    <Box sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' }, alignItems: 'center' }}>
                        <Button
                            sx={{
                                color: '#FF56FF', // Updated active color
                                border: '1px solid #FF56FF',
                                textTransform: 'none',
                                marginRight: { xs: '0', sm: '40px', md: '40px' }, // Add margin right for medium screens (900px and below)
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    color: 'white',
                                    borderColor: 'white',
                                }
                            }}
                            onClick={handleOpen}
                        >
                            Trailer anschauen
                        </Button>
                    </Box>


                    {/* Burger Menu: Shown on small screens */}
                    <Box sx={{ display: { xs: 'flex', sm: 'none', md: 'none' }, alignItems: 'space-between' }}>
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                            sx={{ color: '#FF56FF' }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>

                {/* Bottom row: Tabs for Navigation (visible on larger screens) */}
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex', md: 'flex' },
                        position: 'relative',
                        alignItems: 'center',
                        width: '100%',
                        maxWidth: '1400px',
                        justifyContent: 'flex-start',
                        margin: '0 auto',
                        paddingLeft: '24px',
                        paddingRight: '24px',
                    }}
                >
                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'flex', md: 'flex' },
                            position: 'absolute',
                            top: '-2px',
                            left: '-5%',
                            right: '-5%',
                            width: '1400px',
                            height: '1px',
                            backgroundColor: '#FF56FF',
                            zIndex: 0,
                            margin: '0 auto',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}
                    />

                    {sections.map((section, index) => {
                        const displaySection = section.charAt(0).toUpperCase() + section.slice(1).toLowerCase(); // Format section name
                        return (
                            <Box
                                key={section}
                                sx={{ textAlign: 'center', position: 'relative', zIndex: 1, marginRight: index !== sections.length - 1 ? 0.5 : 0 }}
                            >
                                {activeSection === section.toLowerCase() && (
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: '-2px',
                                            left: 0,
                                            right: 0,
                                            height: '1px',
                                            backgroundColor: 'white',
                                            transition: 'background-color 0.3s ease',
                                        }}
                                    />
                                )}
                                <Button
                                    sx={{
                                        color: activeSection === section.toLowerCase() ? 'white' : '#FF56FF',
                                        fontSize: '1.1rem',
                                        fontFamily: 'Crimson Pro, serif',
                                        textTransform: 'none',
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                        }
                                    }}
                                    onClick={() => scrollToSection(section)}
                                >
                                    {displaySection}
                                </Button>
                            </Box>
                        );
                    })}
                </Box>
            </AppBar>

            {/* Burger menu drawer (opens from top) */}
            <Drawer
                anchor="top"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            >
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: '500px',
                        margin: '0 auto',
                        backgroundColor: 'black',
                        padding: '16px',
                    }}
                >
                    <List>
                        {sections.map((section) => (
                            <ListItem
                                component="button" // Specify that this should be rendered as a button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                sx={{
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                }}
                            >
                                <ListItemText primary={section.charAt(0).toUpperCase() + section.slice(1).toLowerCase()} sx={{ color: '#FF56FF', textTransform: 'none' }} />
                            </ListItem>
                        ))}
                        <ListItem
                            component="button" // Specify button behavior
                            onClick={handleOpen}
                            sx={{
                                padding: '10px 16px',
                                cursor: 'pointer',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                }
                            }}
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
