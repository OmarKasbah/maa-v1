import React from 'react';
import { Modal, Box, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material'; // Ensure '@mui/icons-material' is installed
import { ModalComponentProps } from "../../utils/props.ts";
import VideoHandling from "../core/video/VideoHandling.tsx"; // Assuming VideoHandling is the video player component

const TrailerModal: React.FC<ModalComponentProps> = ({ open, handleClose }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    backgroundColor: 'black', // Modal background is black
                    border: '2px solid #f11cf1', // Purple-pink border color
                    boxShadow: 24,
                    width: '90%',  // Same as background video width
                    height: '80%', // Same as background video height
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {/* Close Icon (X) */}
                <IconButton
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        color: 'white', // Purple-pink color for the X icon
                    }}
                >
                    <CloseIcon />
                </IconButton>

                {/* Video Player */}
                <Box
                    sx={{
                        width: '90%',  // Make the video larger
                        height: '80%', // Make the video almost fill the modal
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {/* Assuming VideoHandling is your custom video component */}
                    <VideoHandling autoplay /> {/* Add autoplay to VideoHandling */}
                </Box>
            </Box>
        </Modal>
    );
};

export default TrailerModal;
