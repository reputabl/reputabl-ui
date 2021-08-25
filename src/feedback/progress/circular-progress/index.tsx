import * as React from 'react';
import { useTheme } from "@material-ui/core";
import { BounceLoader, SquareLoader, ScaleLoader } from 'react-spinners';
import { CircularProgress } from '@material-ui/core';

export interface CircularProgressProps {
    primary?: boolean;
    size? : 'sm' | 'md' | 'lg' | undefined
    variant?:
        | 'bounce'
        | 'square'
        | 'scale'
        | 'default'
        | undefined;
}

export const RCircularProgress = ({
    primary = false,
    variant = 'default',
    size = 'md'
}: CircularProgressProps): JSX.Element => {

    const theme = useTheme()

    const sizeSet = () => {
        switch (size) {
            case "lg":
                return 50
            case "md":
                return 40
            default :
                return 30
        }
    }


    switch (variant) {
        case 'bounce':
            return <BounceLoader color={primary ? theme.palette.primary.main : theme.palette.secondary.main} size={sizeSet()}/>
        case 'square':
            return <SquareLoader color={primary ? theme.palette.primary.main : theme.palette.secondary.main} size={sizeSet()}/>
        case 'scale':
            return <ScaleLoader color={primary ? theme.palette.primary.main : theme.palette.secondary.main} height={sizeSet()} width={4} radius={5}/>
        default:
            return <CircularProgress color={primary ? "primary" : "secondary"} size={sizeSet()}/>;
    }
};

RCircularProgress.defaultProps = {
    variant: 'default',
    size : 'md',
};
