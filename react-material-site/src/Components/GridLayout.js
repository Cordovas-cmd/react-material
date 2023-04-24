import React from 'react';
// Make sure to put / after core... for some reason it threw an error without it.
import { Grid } from '@material-ui/core/';
import { Typography } from '@material-ui/core/';
import {  makeStyles } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({

    mainGridItem: {
        backgroundColor: 'blue' 
    },
    secondRowFirstItem: {
        backgroundColor: 'green'
    },
    secondRowSecondItem: {
        backgroundColor: 'orange'
    }
    
}))

export default function GridLayout() {
    const classes = useStyles()
    return (
        // three columns
        <Grid container spacing={3}>

            {/* Setting size of grid item 12=100% width etc.. */}
            <Grid item lg={4} sm={4} xs={12}>

            <Typography className={classes.mainGridItem}>
                Main Grid Item
            </Typography>

            </Grid>

            <Grid item sm={4} xs={12}>
            <Typography className={classes.secondRowFirstItem}>
                Second Row, First Item
            </Typography>
            </Grid>

            <Grid item sm={4} xs={12}>
            <Typography className={classes.secondRowSecondItem}>
                Second Row, Second Item
            </Typography>
            </Grid>

        </Grid>
    );
}