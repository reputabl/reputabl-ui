import * as React from 'react';
import { FC } from 'react';
import {
    Container,
    Grid,
    Paper,
    styled,
    useMediaQuery,
    useTheme,
} from '@material-ui/core';
import {
    TitleTextButton,
    TTBButton,
} from '../../components/featured/title-text-button';

export interface HeroProps {
    imageType?: 'picture' | 'logo' | 'none' | undefined;
    imageOrientation?: 'right' | 'left' | 'background';
    backgroundColor?: string;
    topBottomPadding?: string;
    heading: string;
    subtext: string;
    buttons: TTBButton[];
    src: string;
}

const HeroImageTwo = styled('img')(() => ({
    maxHeight: 200,
    width: 200,
    objectFit: 'contain',
    display: 'flex',
}));

const StyledDiv = styled('div')(() => ({
    width: '100%',
    objectFit: 'cover',
    display: 'flex',
}));

const StyledDiv2 = styled('div')(() => ({
    width: '100%',
    objectFit: 'cover',
    display: 'flex',
    justifyContent: 'center',
}));

export const Hero: FC<HeroProps> = (props: HeroProps): JSX.Element => {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

    const getImageType = (type: string) => {
        return {
            picture: 'Coke',
            logo: 'Pepsi',
            none: 'Lemonade',
        }[type];
    };

    const getImageOrientation = (
        type: 'right' | 'left' | 'background' | undefined
    ) => {
        switch (type) {
            case 'right':
                return 'row-reverse';
            case 'left':
                return 'row';
            case 'background':
                return 'row';
            case undefined:
            default:
                return 'row';
        }
    };

    return (
        <div
            style={{
                backgroundColor: props.backgroundColor,
            }}
        >
            <Container
                maxWidth={'md'}
                disableGutters
                style={{
                    backgroundColor: props.backgroundColor,
                    paddingTop: props.topBottomPadding,
                    paddingBottom: props.topBottomPadding,
                }}
            >
                <Grid
                    container
                    spacing={2}
                    direction={getImageOrientation(props.imageOrientation)}
                    justifyContent="space-evenly"
                    alignItems="center"
                >
                    <Grid item sm={'auto'}>
                        <StyledDiv2>
                            <HeroImageTwo src={props.src} alt="" />
                        </StyledDiv2>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <StyledDiv>
                            <TitleTextButton
                                buttons={props.buttons}
                                heading={props.heading}
                                subtext={props.subtext}
                            />
                        </StyledDiv>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

// Hero.defaultProps = {
//     imageRight: true,
// };
