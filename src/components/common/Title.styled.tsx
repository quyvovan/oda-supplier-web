import { Typography } from '@mui/material';
import * as React from 'react';

const TitleMain = (title: string) => {
    return (
        <Typography color="text.primary" gutterBottom sx={{fontSize: 14}}>
            {title}
        </Typography>
    )
};

export default TitleMain;
