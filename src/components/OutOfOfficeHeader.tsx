import React from 'react';
import { Box, Typography } from '@mui/material';

const OutOfOfficeHeader: React.FC = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#ffcc00',
                color: '#333',
                textAlign: 'center',
                padding: '10px 0',
                fontSize: '16px',
                fontWeight: 'bold',
                position: 'fixed',
                top: 0,
                width: '100%',
                zIndex: 1000,
            }}
        >
            <Typography variant="body1">
                We will be closed on November 28th, 2024 for Thanksgiving Day.
            </Typography>
        </Box>
    );
};

export default OutOfOfficeHeader;