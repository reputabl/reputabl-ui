import * as React from 'react';
import { FC } from 'react';
import { Paper, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { StyleProps } from '../../components/cards/tile/styles';

export interface LoginProps {}

export const useStyles = makeStyles<Theme, StyleProps>(() => ({
    paper: {
        height: 600,
        width: 400,
    },
    cardContent: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 0,
        paddingBottom: 10,
    },
    logo: {
        height: 80,
        width: 80,
        padding: 10,
        borderRadius: 30,
        justifyContent: 'center',
        objectFit: 'contain',
        margin: '0 auto',
    },
}));

export const Login: FC = (): JSX.Element => {
    const classes = useStyles({});

    return <Paper className={classes.paper}> ooo </Paper>;
};

// Login.defaultProps = {
//     target: '_blank',
// };
