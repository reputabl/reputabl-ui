import * as React from 'react';
import { FC } from 'react';
import { Stack, styled } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// export interface TitleTextButtonProps {}

const TTBContainer = styled('div')(() => ({
    minHeight: '15rem',
    paddingLeft: 32,
    paddingRight: 32,
}));

const StyledStack = styled(Stack)(({theme}) => ({
    [theme.breakpoints.down('md')]: {
        textAlign: "center",
        alignItems: "center",
    },
    [theme.breakpoints.up('md')]: {
        alignItems: "flex-start",
    },
}))

export const TitleTextButton: FC = (): JSX.Element => {
    return (
        <TTBContainer>
            <StyledStack
                direction="column"
                justifyContent="center"
                spacing={2}
            >
                <Typography variant={'h2'}>
                    {' '}
                    Data to enrich your ligma business{' '}
                </Typography>
                <Typography variant={'body1'}>
                    Sugma Sugma Sugma Sugma Sugma Sugma Sugma Sugma{' '}
                </Typography>
                <Button variant={'contained'}>Ligma Sugma</Button>
            </StyledStack>
        </TTBContainer>
    );
};

// Tile.defaultProps = {
//     target: '_blank',
// };
//
// Tile.displayName = 'Tile';
