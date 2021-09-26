import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import { styled } from '@material-ui/core';

export interface NavBarProps {
    children: React.ReactNode;
    backgroundColor?: string;
    direction?: 'left' | 'right' | undefined;
}

// backgroundColor: backgroundColor ? backgroundColor : 'whitesmoke',

const _AppBar = styled(AppBar)(() => ({
    backgroundColor: 'white',
    boxShadow: 'none',
    transition: 'background-color 0.3s ease 0s',
    color: 'black',
}));

const List = styled('li')(() => ({
    color: 'red',
    display: 'inline',
}));

export const NavBar = ({ children, direction }: NavBarProps): JSX.Element => {
    return (
        <_AppBar position={'fixed'}>
            <Grid
                container
                direction={direction === 'right' ? 'row-reverse' : 'row'}
            >
                {React.Children.map(children, (child) => (
                    <List>{child}</List>
                ))}
            </Grid>
        </_AppBar>
    );
};
