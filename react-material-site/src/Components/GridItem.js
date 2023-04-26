import { makeStyles, Card, CardHeader, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core/';
import React from 'react';
import { ArrowForward } from '@material-ui/icons';


const useStyles = makeStyles(() => ({

    cardImage: {
        height: 300,
        backgroundize: "cover"
    }
}))
export default function GridItem() {
    const classes= useStyles();
    return (

// Code to create a card component in Material UI
        <Card>
            
            <CardHeader
                title="Dota 2 Masterclass"
                subheader="Recommended for you"
            />

            <CardMedia 
            className={classes.cardImage}
            image="./Images/pexels-john-petalcurin-2115257.jpg"
            title="Dota 2 Masterclass"/>

            <CardContent>

                <Typography>
                    In this Masterclass you will learn how to increase your winrate to 100% on any hero regardless of experience. Raise your rank to 10k and put every team on your back!!
                </Typography>

            </CardContent>

            <CardActions>

                <IconButton aria-label="Visit Page">

                    <ArrowForward />

                </IconButton>

            </CardActions>

        </Card>
    );
}