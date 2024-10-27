import { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    Button,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material'; // Import SelectChangeEvent here
import MenuIcon from '@mui/icons-material/Menu';
import TrailerModal from "../../modals/TrailerModal.tsx";
import { useTranslation } from 'react-i18next';

interface HeaderProps {
    activeSection: string;
    isVisible: boolean;
}

const Header = ({ activeSection, isVisible }: HeaderProps) => {
    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState(false); // For trailer modal
    const [drawerOpen, setDrawerOpen] = useState(false); // State for burger menu

    // Load language from localStorage or default to 'en'
    const savedLanguage = localStorage.getItem('language') || 'en';
    const [language, setLanguage] = useState(savedLanguage);

    useEffect(() => {
        i18n.changeLanguage(language); // Set the language on component mount
    }, [language, i18n]);

    const sections = [
        t('header.sections.plot'),
        t('header.sections.synopsis'),
        t('header.sections.producers'),
        t('header.sections.creation'),
        t('header.sections.cast'),
        t('header.sections.crew'),
        t('header.sections.nextProject'),
    ];

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

    // Change language and save to localStorage
    const handleLanguageChange = (event: SelectChangeEvent<string>) => {
        const newLanguage = event.target.value;
        i18n.changeLanguage(newLanguage);
        setLanguage(newLanguage);
        localStorage.setItem('language', newLanguage); // Save selection to localStorage
    };

    return (
        <>
            {/* Header: Logo, Language Select, and Trailer Button */}
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
                    {/* Language Dropdown: Shown on larger screens */}
                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
                        <Select
                            value={language}
                            onChange={handleLanguageChange}
                            sx={{
                                color: '#FF56FF',
                                '& .MuiSelect-icon': { color: '#FF56FF' },
                                backgroundColor: 'black'
                            }}
                            MenuProps={{
                                PaperProps: {
                                    sx: {
                                        backgroundColor: 'black', // Set dropdown background color to black
                                        color: '#FF56FF', // Set dropdown text color
                                    },
                                },
                            }}
                        >
                            <MenuItem sx={{ backgroundColor: 'black', color: '#FF56FF' }} value="en">English</MenuItem>
                            <MenuItem sx={{ backgroundColor: 'black', color: '#FF56FF' }} value="de">Deutsch</MenuItem>
                        </Select>
                    </Box>

                    {/* Logo */}
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
                            style={{ height: '50px', cursor: 'pointer' }}
                            onClick={() => scrollToSection('video')} // Scroll to top on logo click
                        />
                    </Box>

                    {/* Trailer Button: Shown on larger screens */}
                    <Box sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' }, alignItems: 'center' }}>
                        <Button
                            sx={{
                                color: '#FF56FF',
                                border: '1px solid #FF56FF',
                                textTransform: 'none',
                                marginRight: { xs: '0', sm: '40px', md: '40px' },
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    color: 'white',
                                    borderColor: 'white',
                                }
                            }}
                            onClick={handleOpen}
                        >
                            {t('header.trailer')}
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

                    {sections.map((section, index) => (
                        <Box
                            key={section}
                            sx={{ textAlign: 'center', position: 'relative', zIndex: 1, marginRight: index !== sections.length - 1 ? 0.5 : 0 }}
                        >
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
                                {section}
                            </Button>
                        </Box>
                    ))}
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
                                component="button"
                                key={section}
                                onClick={() => scrollToSection(section)}
                                sx={{
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                }}
                            >
                                <ListItemText primary={section} sx={{ color: '#FF56FF', textTransform: 'none' }} />
                            </ListItem>
                        ))}
                        <ListItem
                            component="button"
                            onClick={handleOpen}
                            sx={{
                                padding: '10px 16px',
                                cursor: 'pointer',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                }
                            }}
                        >
                            <ListItemText primary={t('header.trailer')} sx={{ color: '#FF56FF', textTransform: 'none' }} />
                        </ListItem>

                        {/* Language Selector in Burger Menu */}
                        <ListItem>
                            <Select
                                value={language}
                                onChange={handleLanguageChange}
                                sx={{ color: '#FF56FF', width: '100%' }}
                                MenuProps={{
                                    PaperProps: {
                                        sx: {
                                            backgroundColor: 'black', // Set dropdown background color to black
                                            color: '#FF56FF', // Set dropdown text color
                                        },
                                    },
                                }}
                            >
                                <MenuItem value="en">English</MenuItem>
                                <MenuItem value="de">Deutsch</MenuItem>
                            </Select>
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
