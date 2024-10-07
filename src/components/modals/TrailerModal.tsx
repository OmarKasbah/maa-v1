import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import {ModalComponentProps} from "../../utils/props.ts";

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
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                    width: '400px',
                    textAlign: 'center',
                }}
            >
                <Typography id="modal-title" variant="h6" component="h2">
                    Video Modal
                </Typography>

                <video width="320" height="240" controls>
                    <source src="/src/assets/sample.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <Button onClick={handleClose} sx={{ mt: 2 }}>
                    Close
                </Button>
            </Box>
        </Modal>
    );
};

export default TrailerModal;
