import React, {useState} from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import TrailerModal from "../modals/TrailerModal.tsx";

const Header: React.FC = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
        <AppBar sx={{backgroundColor: 'black', height: 70}} position="static">
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                    <Button color="inherit" href="#what">What</Button>
                    <Button color="inherit" href="#who">Who</Button>
                    <Button color="inherit" href="#when">When</Button>
                </Box>

                <Button color="inherit" onClick={handleOpen}>
                    Click Me
                </Button>
            </Toolbar>
        </AppBar>

        <TrailerModal open={open} handleClose={handleClose} />
        </>
    );
};

export default Header;
