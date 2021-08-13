import * as React from 'react';
import { FC } from 'react';
// import { createRef, FC, useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import { useRefDimensions, useWindowSize } from '../../utils';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    root2: {
        maxWidth: 110,
        borderRadius: 15,
        minWidth: 110,
        backgroundColor: 'blue',
    },
    media: {
        height: 80,
        width: 80,
        padding: 10,
        borderRadius: 30,
        justifyContent: 'center',
        objectFit: 'contain',
        margin: '0 auto',
    },
    paper: {
        padding: theme.spacing(1),
        height: 100,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

// download image in database
// redownload if image is 3months old
// if it exists already use what's in database

export const YuhField: FC = (): JSX.Element => {
    // const size = useWindowSize();
    const classes = useStyles();

    function FormCard() {
        return (
            <Card className={classes.root2}>
                <CardActionArea href="https://youtube.com" target="_blank">
                    <CardMedia
                        className={classes.media}
                        component={'img'}
                        src={'https://logo.clearbit.com/pjmasks.com/'}
                    />
                    <CardContent
                        style={{
                            paddingLeft: 5,
                            paddingRight: 5,
                            paddingTop: 0,
                            paddingBottom: 10,
                        }}
                    >
                        <Typography align={'center'}>Amazon</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }

    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs>
                    <FormCard />
                </Grid>
                <Grid item xs>
                    <FormCard />
                </Grid>
                <Grid item xs>
                    <FormCard />
                </Grid>
                <Grid item xs>
                    <FormCard />
                </Grid>
                <Grid item xs>
                    <FormCard />
                </Grid>
                <Grid item xs>
                    <FormCard />
                </Grid>
                <Grid item xs>
                    <FormCard />
                </Grid>
            </React.Fragment>
        );
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid
                    container
                    item
                    spacing={2}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <FormRow />
                </Grid>
                <Grid
                    container
                    item
                    spacing={2}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <FormRow />
                </Grid>
            </Grid>
        </div>
    );
};
