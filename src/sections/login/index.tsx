import * as React from 'react';
import { FC } from 'react';
import { Paper, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { StyleProps } from '../../components/cards/tile/styles';
import { LoginForm } from '../../forms/login';

export interface LoginProps {
    fieldMargin?: 'normal' | 'dense' | 'none' | undefined;
}

export const useStyles = makeStyles<Theme, StyleProps>(() => ({
    paper: {
        height: 600,
        padding: 20,
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

export const Login: FC<LoginProps> = (props: LoginProps): JSX.Element => {
    const classes = useStyles({});

    return (
        <Paper className={classes.paper}>
            <LoginForm fieldMargin={props.fieldMargin} />
        </Paper>
    );
};

// Login.defaultProps = {
//     target: '_blank',
// };
