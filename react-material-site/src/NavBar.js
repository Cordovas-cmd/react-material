import React from 'react';
import { Container } from '@material-ui/core/';
import { Toolbar } from '@material-ui/core/';
import { Typography } from '@material-ui/core/';

export default function NavigationBar() {
    return (
        <Container>

            <Toolbar>

            <Typography>
                Pachi-Tech
            </Typography>

            </Toolbar>

        </Container>
    );
}