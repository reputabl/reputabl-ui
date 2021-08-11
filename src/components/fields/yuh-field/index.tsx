import * as React from 'react';
import { FC } from 'react';
// import { createRef, FC, useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import { useRefDimensions, useWindowSize } from '../../utils';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    root2: {
        maxWidth: 345,
    },
    media: {
        height: 100,
    },
    paper: {
        padding: theme.spacing(1),
        height: 100,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export const YuhField: FC = (): JSX.Element => {
    // const size = useWindowSize();
    const classes = useStyles();

    function FormCard() {
        return (
            <React.Fragment>
                <Card className={classes.root2}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            component={'img'}
                            title="Contemplative Reptile"
                            src={'https://logo.clearbit.com/uwm.edu'}
                        />
                        <CardContent style={{ padding: 5 }}>
                            <Typography gutterBottom>Netflix</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </React.Fragment>
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
