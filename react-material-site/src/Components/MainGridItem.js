import { Grid, Typography, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles( theme => ({
    mainContainer: {
        height: 400,
        // width: 400,
        margin: "auto",
        backgroundImage: "url(https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: theme.palette.common.black
    }
}));

export default function MainGridItem() {

    const classes = useStyles();
    return (
        <Grid container className={classes.mainContainer}>
            <Grid item>

                <Typography>
                    Hello Gamers
                </Typography>

                <Typography>
                    Do you want to win every game and crush your enemies?
                    Increase your IQ to over 200 using my secret methodologies!!
                </Typography>

            </Grid>
        </Grid>
    );
}