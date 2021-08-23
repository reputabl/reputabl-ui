import * as React from 'react';
import { FC } from 'react';
import { CardActionArea, CardMedia, Typography } from '@material-ui/core';
import { TileCard, TileCardContent } from './styles';

export interface TileProps {
    href: any;
    target?: React.HTMLAttributeAnchorTarget | undefined;
    text: string;
}

export const Tile: FC<TileProps> = (props: TileProps): JSX.Element => {
    return (
        <TileCard>
            <CardActionArea href={`//${props.href}`} target={props.target}>
                <CardMedia
                    height={80}
                    component={'img'}
                    src={`https://logo.clearbit.com/${props.href}`}
                />
                {/*<TileCardMedia*/}
                {/*    component={'img'}*/}
                {/*    src={`https://logo.clearbit.com/${props.href}`}*/}
                {/*/>*/}
                <TileCardContent>
                    <Typography align={'center'}>{props.text}</Typography>
                </TileCardContent>
            </CardActionArea>
        </TileCard>
    );
};

Tile.defaultProps = {
    target: '_blank',
};

Tile.displayName = 'Tile';
