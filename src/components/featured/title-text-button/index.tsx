import * as React from 'react';
import { FC } from 'react';
import { Stack, styled } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export interface TitleTextButtonProps {
    heading: string;
    subtext: string;
    buttons: TTBButton[];
}

export interface TTBButton {
    text: string;
}

const TTBContainer = styled('div')(() => ({
    margin: 'auto',
    padding: 20,
}));

const StyledStack = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        textAlign: 'center',
        alignItems: 'center',
    },
    [theme.breakpoints.up('md')]: {
        alignItems: 'flex-start',
    },
}));

const getButtons = (buttons: TTBButton[]) => {
    let moreButtons: JSX.Element[] = [];

    buttons.forEach((value) => {
        moreButtons.push(<Button variant={'contained'}>{value.text}</Button>);
    });

    return moreButtons;
};

export const TitleTextButton: FC<TitleTextButtonProps> = (
    props
): JSX.Element => {
    return (
        <TTBContainer>
            <StyledStack direction="column" justifyContent="center" spacing={2}>
                <Typography variant={'h2'}>{props.heading}</Typography>
                <Typography variant={'body1'}>{props.subtext}</Typography>
                <Stack spacing={2} direction={'row'} style={{ width: 200 }}>
                    {getButtons(props.buttons)}
                </Stack>
            </StyledStack>
        </TTBContainer>
    );
};

// Tile.defaultProps = {
//     target: '_blank',
// };
//
// Tile.displayName = 'Tile';
