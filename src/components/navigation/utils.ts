import { styled } from '@material-ui/core';

interface NavRouteStyleProps {
    primary?: boolean;
    trimColor?: string;
}

export const NavRouteStyle = styled('div')<NavRouteStyleProps>`
    a:after {
        display: block;
        color: #2e8b57;
        content: '';
        border-bottom: solid 2px
            ${({ primary, trimColor }) => (primary ? '#2563EB' : trimColor)};
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
    }

    a.fromLeft:after {
        transform-origin: 100% 50%;
    }

    a.fromLeft:hover:after {
        transform: scaleX(1);
        transform-origin: 0% 50%;
    }
`;
