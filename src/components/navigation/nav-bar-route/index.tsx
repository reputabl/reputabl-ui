import * as React from 'react';
import { NavRouteStyle } from '../utils';

export interface NavBarRouteProps {
    children: React.ReactNode;
    location: string;
    trimColor?: string;
    primary?: boolean;
}

export const NavBarRoute = ({
    children,
    location = '/',
    trimColor = 'red',
    primary,
}: NavBarRouteProps): JSX.Element => {
    const navBarRouteStyles = {
        display: 'inline-block',
        backgroundColor: 'transparent',
        textDecoration: 'none',
        marginRight: 40,
        color: 'black',
    };
    return (
        <NavRouteStyle trimColor={trimColor} primary={primary}>
            <a
                className={'fromLeft'}
                style={navBarRouteStyles}
                href={location}
                rel="noreferrer"
            >
                {children}
            </a>
        </NavRouteStyle>
    );
};
