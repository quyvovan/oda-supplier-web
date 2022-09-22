import { Button } from '@mui/material';
import * as React from 'react';

const ButtonStatus = (status: string) => {
    return (
        <Button size='small' color='primary'>
            {status}
        </Button>
    )
};

export default ButtonStatus;
