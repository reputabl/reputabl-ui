import * as React from 'react';
import { FC } from 'react';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from '@material-ui/core';
import { useStyles } from './styles';

export interface TileProps {
    href: any;
    target?: React.HTMLAttributeAnchorTarget | undefined;
    text: string;
}

export const Tile: FC<TileProps> = (props: TileProps): JSX.Element => {
    const classes = useStyles({});

    return (
        <Card className={classes.card}>
            <CardActionArea href={`//${props.href}`} target={props.target}>
                <CardMedia
                    className={classes.logo}
                    component={'img'}
                    src={`https://logo.clearbit.com/${props.href}`}
                />
                <CardContent className={classes.cardContent}>
                    <Typography align={'center'}>{props.text}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

Tile.defaultProps = {
    target: '_blank',
};
