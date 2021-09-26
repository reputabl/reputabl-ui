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

// direction={
//     props.isImageRight
//         ? { sm: 'column', md: 'row' }
//         : { sm: 'column', md: 'row-reverse' }
// }

interface HeroProps {
    imageType?: 'picture' | 'logo' | 'none' | undefined;
    imageOrientation?: 'right' | 'left' | 'background' | undefined;
    heading: string;
    subtext: string;
    buttons: TTBButton[];
    src: string;
}

const HeroImage = styled('img')(() => ({
    minHeight: '18rem',
    maxHeight: 500,
    width: '100%',
    objectFit: 'cover',
    overflow: 'hidden',
}));

// const HeroImageTwo = styled('img')(() => ({
//     minHeight: '18rem',
//     maxHeight: 500,
//     maxWidth: '40%',
//     objectFit: 'contain',
//     display: 'flex',
// }));

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

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

//                 backgroundImage: `url(${post.image})`,

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

    const getImageOrientation = (type: string) => {
        return {
            right: 'Coke',
            left: 'Pepsi',
            background: 'Lemonade',
        }[type];
    };

    return (
        <div
            style={{
                backgroundColor: 'lightsteelblue',
            }}
        >
            <Container
                maxWidth={'md'}
                disableGutters
                style={{
                    backgroundColor: 'lightsteelblue',
                    paddingTop: 40,
                    paddingBottom: 40,
                }}
            >
                <Grid
                    container
                    spacing={2}
                    direction="row"
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
                {/*<Stack*/}
                {/*    direction={{ xs: 'column', sm: 'row-reverse' }}*/}
                {/*    justifyContent="center"*/}
                {/*    alignItems="center"*/}
                {/*    spacing={3}*/}
                {/*>*/}
                {/*    <StyledDiv>*/}
                {/*        <TitleTextButton*/}
                {/*            buttons={props.buttons}*/}
                {/*            heading={props.heading}*/}
                {/*            subtext={props.subtext}*/}
                {/*        />*/}
                {/*    </StyledDiv>*/}
                {/*    {isMdUp && (*/}
                {/*        // <StyledDiv>*/}
                {/*        <HeroImageTwo src={props.src} alt="" />*/}
                {/*        // </StyledDiv>*/}
                {/*    )}*/}
                {/*</Stack>*/}
            </Container>
        </div>
    );
};

// Hero.defaultProps = {
//     imageRight: true,
// };

// what is image?
// what side?
// if logo -> do something
// if picture -> do something else
