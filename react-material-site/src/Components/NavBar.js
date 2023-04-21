import React from 'react';
import { Container } from '@material-ui/core/';
import { Toolbar } from '@material-ui/core/';
import { Typography } from '@material-ui/core/';
import { Box } from  '@material-ui/core';
import { Link } from '@material-ui/core';

export default function NavigationBar() {
    return (
        <Container>

            <Toolbar>

            <Typography>
                Pachi-Tech
            </Typography>

            <Box>

                {['Home', 'Courses', 'Sign up'].map((menuOptions) => (
                    <Link 
                    component='button'
                    variant= 'body1'
                    
                    >
                    {menuOptions.toUpperCase()}
                    </Link>
                ))}

            </Box>
    
            </Toolbar>

        </Container>
    );
}