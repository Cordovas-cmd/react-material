import React from 'react';
import { Container, makeStyles } from '@material-ui/core/';
import { Toolbar } from '@material-ui/core/';
import { Typography } from '@material-ui/core/';
import { Box } from  '@material-ui/core';
import { Link } from '@material-ui/core';

// styled using material UI https://mui.com/material-ui/getting-started/overview/
// material UI is designed with mobile first development in mind. SO we will style based on mobile first.
const useStyles = makeStyles((theme) => ({

    siteTitle: {
        fontWeight:"bold",
        letterSpacing: 1.5
    },

    toolbar: {
        display: "flex",
        flexDirection:"column",
        [theme.breakpoints.up('md')]: {
            flexDirection: "row",
            justifyContent: "space-between",
            // alignItems: "flex-end"
        }
    },

    menuBox: {
        display: "flex",
        flexDirection: "column",
        // justifyContent: "space-between",
        // set screen size styling in this case "mid size" and higher.
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row'
        }
    },

    menuOption: {
        padding: theme.spacing(1),
        [theme.breakpoints.up('md')]: {
        paddingLeft: theme.spacing(3)
        }
    }
    
}))

export default function NavigationBar() {
    
    // const refers to function for styles.
    const classes = useStyles()
    return (
        <Container>

            <Toolbar className={classes.toolbar}>

            <Typography
            component='h1'
            variant='h4' 
            className={classes.siteTitle}>
                Pachi-Tech
            </Typography>

            <Box className={classes.menuBox}>

                {['Home', 'Courses', 'Sign up'].map((menuOptions) => (
                    <Link 
                    component='button'
                    variant= 'body1'
                    className={classes.menuOption}

                    >
                    {menuOptions.toUpperCase()}
                    </Link>
                ))}

            </Box>
    
            </Toolbar>

        </Container>
    );
}