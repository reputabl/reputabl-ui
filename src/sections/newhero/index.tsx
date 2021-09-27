import * as React from 'react';
import { FC } from 'react';
import {
    Container,
    Grid,
    styled,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import {
    TitleTextButton,
    TTBButton,
} from '../../components/featured/title-text-button';

export interface HeroProps {
    imageType?: 'picture' | 'logo' | undefined;
    imageOrientation?: 'right' | 'left' | 'background' | undefined;
    backgroundColor?: string;
    fontColor?: string;
    topBottomPadding?: string;
    heading: string;
    subtext: string;
    buttons: TTBButton[];
    src: string;
}

const HeroImageLogo = styled('img')(() => ({
    maxWidth: '100%',
    objectFit: 'contain',
    display: 'flex',
}));

const HeroImageHalf = styled('img')(() => ({
    maxWidth: '100%',
    objectFit: 'cover',
    alignItems: 'center',
}));

const StyledDiv = styled('div')(() => ({
    maxWidth: '100%',
    maxHeight: '30rem',
    objectFit: 'cover',
    display: 'flex',
}));

const StyledFullDiv = styled('div')(() => ({
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '25rem',
    position: 'relative',
    justifyContent: 'center',
    display: 'flex',
}));

export const Hero: FC<HeroProps> = (props: HeroProps): JSX.Element => {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
    console.log(isMdUp);

    const getImage = () => {
        switch (props.imageType) {
            case 'picture':
                if (props.imageOrientation === 'background') {
                    return (
                        <Grid item md={6} sm={8} xs={12}>
                            <StyledDiv>
                                <TitleTextButton
                                    buttons={props.buttons}
                                    heading={props.heading}
                                    subtext={props.subtext}
                                    fontColor={props.fontColor}
                                />
                            </StyledDiv>
                        </Grid>
                    );
                } else {
                    return (
                        <>
                            <Grid
                                item
                                md
                                display={{
                                    md: 'block',
                                    sm: 'none',
                                    xs: 'none',
                                }}
                            >
                                <StyledDiv>
                                    <HeroImageHalf src={props.src} alt="" />
                                </StyledDiv>
                            </Grid>
                            <Grid item md sm={8} xs={12}>
                                <StyledDiv>
                                    <TitleTextButton
                                        buttons={props.buttons}
                                        heading={props.heading}
                                        subtext={props.subtext}
                                        fontColor={props.fontColor}
                                    />
                                </StyledDiv>
                            </Grid>
                        </>
                    );
                }
            case 'logo':
                return (
                    <>
                        <Grid item sm={4} xs={4}>
                            <StyledDiv>
                                <HeroImageLogo
                                    src={
                                        'https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                                    }
                                    alt=""
                                />
                            </StyledDiv>
                        </Grid>
                        <Grid item md={8} xs={12} sm={9}>
                            <StyledDiv>
                                <TitleTextButton
                                    buttons={props.buttons}
                                    heading={props.heading}
                                    subtext={props.subtext}
                                    fontColor={props.fontColor}
                                />
                            </StyledDiv>
                        </Grid>
                    </>
                );
            case undefined:
            default:
                return <></>;
        }
    };

    const getImageOrientation = () => {
        switch (props.imageOrientation) {
            case 'right':
                return 'row-reverse';
            case 'left':
            case 'background':
            case undefined:
            default:
                return 'row';
        }
    };

    const getMaxWidth = () => {
        switch (props.imageType) {
            case 'logo':
                return 'md';
            case 'picture':
            case undefined:
            default:
                return 'lg';
        }
    };

    const ConditionalWrapper = ({ condition, wrapper, children}: any): any => {
        return (
          condition ? wrapper(children) : children
        )
    }

    return (
        <div>
            <div
                style={{
                    backgroundColor: props.backgroundColor,
                }}
            >
                <Container
                    maxWidth={getMaxWidth()}
                    disableGutters
                    style={{
                        backgroundColor: props.backgroundColor,
                        paddingTop: props.topBottomPadding,
                        paddingBottom: props.topBottomPadding,
                    }}
                >
                    <ConditionalWrapper
                        condition={props.imageOrientation == 'background'}
                        wrapper={(children: any) => (
                            <StyledFullDiv
                                style={{ backgroundImage: `url(${props.src})` }}
                            >
                                {children}
                            </StyledFullDiv>
                        )}
                    >
                        <Grid
                            container
                            direction={getImageOrientation()}
                            justifyContent="space-evenly"
                            alignItems="center"
                        >
                            {getImage()}
                        </Grid>
                    </ConditionalWrapper>
                </Container>
            </div>
        </div>
    );
};

// Hero.defaultProps = {
//     imageRight: true,
// };
