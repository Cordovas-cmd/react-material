import { Grid, Typography, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles( theme => ({
    mainContainer: {
        height: 400,
        // width: 400,
        margin: "auto",
        // backgroundImage: "url(https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg)",
        backgroundImage: "url(https://cdn.pixabay.com/photo/2022/03/15/15/19/gaming-setup-7070569_960_720.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: theme.palette.common.white
    },
    mainItem: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: theme.spacing(3),
        margin:"0 auto"
    }
}));

export default function MainGridItem() {

    const classes = useStyles();
    return (
        <Grid container className={classes.mainContainer}>
            <Grid item className={classes.mainItem} md={6}>

                {/* Component is what the actual element is supposed to be but the variant is the style */}
                <Typography component='h2' variant='h5'>
                    Hello Gamers
                </Typography>
                {/* variant is style for material ui */}
                <Typography variant='body1' paragraph>
                    Do you want to win every game and crush your enemies?
                    Increase your IQ to over 200 using my secret methodologies!!
                </Typography>

            </Grid>
        </Grid>
    );
}