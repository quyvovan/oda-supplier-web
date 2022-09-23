import { Typography } from '@mui/material';
import * as React from 'react';

interface ITitleMainProps {
    name: String
}

const TitleMain = ({name}: ITitleMainProps) => {
    return (
        <Typography color="text.primary" gutterBottom sx={{fontSize: 14}}>
            {name}
        </Typography>
    )
};

export default TitleMain;
