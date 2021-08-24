import * as React from 'react';
import {FC} from 'react';
import {Stack, styled} from '@material-ui/core';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// export interface TitleTextButtonProps {}

const TTBContainer = styled("div")(() => ({
    paddingLeft: 32,
    paddingRight: 32
}));

export const TitleTextButton: FC = (): JSX.Element => {
    return (
        <TTBContainer>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                spacing={2}
            >
                <Typography variant={'h2'}> Data to enrich your ligma business </Typography>
                <Typography variant={'body1'}>Sugma Sugma Sugma Sugma Sugma Sugma Sugma Sugma </Typography>
                <Button variant={'contained'}>Ligma Sugma</Button>
            </Stack>
        </TTBContainer>
    );
};

// Tile.defaultProps = {
//     target: '_blank',
// };
//
// Tile.displayName = 'Tile';
