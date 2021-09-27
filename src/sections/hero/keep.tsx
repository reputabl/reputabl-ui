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

const HeroImageTwo = styled('img')(() => ({
    minHeight: '18rem',
    maxHeight: 500,
    maxWidth: '40%',
    objectFit: 'contain',
    display: 'flex',
}));

// const HeroImageTwo = styled('img')(() => ({
//     maxHeight: 200,
//     width: 200,
//     objectFit: 'contain',
//     display: 'flex',
// }));

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
                    <Grid item xs={12} sm={8}>wd
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

// import * as React from 'react';
// import { FC } from 'react';
// import {
//     Container,
//     Grid,
//     Paper,
//     styled,
//     useMediaQuery,
//     useTheme,
// } from '@mui/material';
// import {
//     TitleTextButton,
//     TTBButton,
// } from '../../components/featured/title-text-button';
// import { Box, Stack } from '@mui/material';
//
// export interface HeroProps {
//     imageType?: 'picture' | 'logo' | 'none' | undefined;
//     imageOrientation?: 'right' | 'left' | 'background' | undefined;
//     backgroundColor?: string;
//     topBottomPadding?: string;
//     heading: string;
//     subtext: string;
//     buttons: TTBButton[];
//     src: string;
// }
//
// const HeroImageLogo = styled('img')(() => ({
//     // maxHeight: 200,
//     // width: 200,
//     maxWidth: '100%',
//     objectFit: 'contain',
//     display: 'flex',
// }));
//
// const HeroImageHalf = styled('img')(() => ({
//     maxWidth: '100%',
//     objectFit: 'cover',
//     alignItems: 'center',
// }));
//
// const StyledDiv = styled('div')(() => ({
//     maxWidth: '100%',
//     maxHeight: '30rem',
//     objectFit: 'cover',
//     display: 'flex',
// }));
//
// const StyledFullDiv = styled('div')(() => ({
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     height: '25rem',
//     position: 'relative',
//     justifyContent: 'center',
//     display: 'flex',
//     // maxWidth: '100%',
//     // maxHeight: '30rem',
//     // objectFit: 'cover',
//     // display: 'flex',
// }));
//
// const StyledDiv2 = styled('div')(() => ({
//     width: '100%',
//     objectFit: 'cover',
//     display: 'flex',
//     justifyContent: 'center',
// }));
//
// export const Hero: FC<HeroProps> = (props: HeroProps): JSX.Element => {
//     const theme = useTheme();
//     const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
//     console.log(isMdUp);
//
//     const getImage = () => {
//         switch (props.imageType) {
//             case 'picture':
//                 if (props.imageOrientation === 'background') {
//                     return (
//                       <Grid item md={6} sm={8} xs={12}>
//                           <StyledDiv>
//                               <TitleTextButton
//                                 buttons={props.buttons}
//                                 heading={props.heading}
//                                 subtext={props.subtext}
//                               />
//                           </StyledDiv>
//                       </Grid>
//                     );
//                 } else {
//                     return (
//                       <>
//                           <Grid
//                             item
//                             md
//                             display={{
//                                 md: 'block',
//                                 sm: 'none',
//                                 xs: 'none',
//                             }}
//                           >
//                               <StyledDiv>
//                                   <HeroImageHalf src={props.src} alt="" />
//                               </StyledDiv>
//                           </Grid>
//                           <Grid item md sm={8} xs={12}>
//                               <StyledDiv>
//                                   <TitleTextButton
//                                     buttons={props.buttons}
//                                     heading={props.heading}
//                                     subtext={props.subtext}
//                                   />
//                               </StyledDiv>
//                           </Grid>
//                       </>
//                     );
//                 }
//             case 'logo':
//                 return (
//                   <>
//                       <Grid item sm={4} xs={4}>
//                           <StyledDiv>
//                               <HeroImageLogo
//                                 src={
//                                     'https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
//                                 }
//                                 alt=""
//                               />
//                           </StyledDiv>
//                       </Grid>
//                       <Grid item md={8} xs={12} sm={9}>
//                           <StyledDiv>
//                               <TitleTextButton
//                                 buttons={props.buttons}
//                                 heading={props.heading}
//                                 subtext={props.subtext}
//                               />
//                           </StyledDiv>
//                       </Grid>
//                   </>
//                 );
//             case undefined:
//             default:
//                 return <></>;
//         }
//     };
//
//     const getImageOrientation = () => {
//         switch (props.imageOrientation) {
//             case 'right':
//                 return 'row-reverse';
//             case 'left':
//             case 'background':
//             case undefined:
//             default:
//                 return 'row';
//         }
//     };
//
//     // 958 is the half point
//
//     return (
//       <div>
//           <div
//             style={{
//                 backgroundColor: props.backgroundColor,
//             }}
//           >
//               <Container
//                 maxWidth={'lg'} // changes
//                 disableGutters
//                 style={{
//                     backgroundColor: 'pink',
//                     paddingTop: props.topBottomPadding,
//                     paddingBottom: props.topBottomPadding,
//                 }}
//               >
//                   <Grid
//                     container
//                     direction={getImageOrientation()}
//                     justifyContent="space-evenly"
//                     alignItems="center"
//                   >
//                       <Grid
//                         item
//                         md
//                         display={{ md: 'block', sm: 'none', xs: 'none' }}
//                       >
//                           <StyledDiv>
//                               <HeroImageHalf src={props.src} alt="" />
//                           </StyledDiv>
//                       </Grid>
//                       <Grid item md sm={8} xs={12}>
//                           <StyledDiv>
//                               <TitleTextButton
//                                 buttons={props.buttons}
//                                 heading={props.heading}
//                                 subtext={props.subtext}
//                               />
//                           </StyledDiv>
//                       </Grid>
//                   </Grid>
//               </Container>
//           </div>
//
//           <div style={{ height: 10 }} />
//
//           <div
//             style={{
//                 backgroundColor: props.backgroundColor,
//             }}
//           >
//               <Container
//                 maxWidth={'md'}
//                 disableGutters
//                 style={{
//                     backgroundColor: 'pink',
//                     paddingTop: props.topBottomPadding,
//                     paddingBottom: props.topBottomPadding,
//                 }}
//               >
//                   <Grid
//                     container
//                     spacing={2}
//                     direction={'row'}
//                     justifyContent="space-evenly"
//                     alignItems="center"
//                   >
//                       <Grid item sm={4} xs={4}>
//                           <StyledDiv>
//                               <HeroImageLogo
//                                 src={
//                                     'https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
//                                 }
//                                 alt=""
//                               />
//                           </StyledDiv>
//                       </Grid>
//                       <Grid item md={8} xs={12} sm={9}>
//                           <StyledDiv>
//                               <TitleTextButton
//                                 buttons={props.buttons}
//                                 heading={props.heading}
//                                 subtext={props.subtext}
//                               />
//                           </StyledDiv>
//                       </Grid>
//                   </Grid>
//               </Container>
//           </div>
//
//           <div style={{ height: 10 }} />
//
//           <div
//             style={{
//                 backgroundColor: props.backgroundColor,
//             }}
//           >
//               <Container
//                 maxWidth={'lg'}
//                 disableGutters
//                 style={{
//                     backgroundColor: 'pink',
//                     paddingTop: props.topBottomPadding,
//                     paddingBottom: props.topBottomPadding,
//                 }}
//               >
//                   <StyledFullDiv
//                     style={{ backgroundImage: `url(${props.src})` }}
//                   >
//                       <Grid
//                         container
//                         spacing={2}
//                         direction={'row'}
//                         justifyContent="space-evenly"
//                         alignItems="center"
//                       >
//                           <Grid item md={6} sm={8} xs={12}>
//                               <StyledDiv>
//                                   <TitleTextButton
//                                     buttons={props.buttons}
//                                     heading={props.heading}
//                                     subtext={props.subtext}
//                                   />
//                               </StyledDiv>
//                           </Grid>
//                       </Grid>
//                   </StyledFullDiv>
//               </Container>
//           </div>
//       </div>
//     );
// };
//
// // Hero.defaultProps = {
// //     imageRight: true,
// // };

{/*<div style={{ height: 10 }} />*/}

{/*<div*/}
{/*    style={{*/}
{/*        backgroundColor: props.backgroundColor,*/}
{/*    }}*/}
{/*>*/}
{/*    <Container*/}
{/*        maxWidth={'md'}*/}
{/*        disableGutters*/}
{/*        style={{*/}
{/*            backgroundColor: 'pink',*/}
{/*            paddingTop: props.topBottomPadding,*/}
{/*            paddingBottom: props.topBottomPadding,*/}
{/*        }}*/}
{/*    >*/}
{/*        <Grid*/}
{/*            container*/}
{/*            spacing={2}*/}
{/*            direction={'row'}*/}
{/*            justifyContent="space-evenly"*/}
{/*            alignItems="center"*/}
{/*        >*/}
{/*            <Grid item sm={4} xs={4}>*/}
{/*                <StyledDiv>*/}
{/*                    <HeroImageLogo*/}
{/*                        src={*/}
{/*                            'https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'*/}
{/*                        }*/}
{/*                        alt=""*/}
{/*                    />*/}
{/*                </StyledDiv>*/}
{/*            </Grid>*/}
{/*            <Grid item md={8} xs={12} sm={9}>*/}
{/*                <StyledDiv>*/}
{/*                    <TitleTextButton*/}
{/*                        buttons={props.buttons}*/}
{/*                        heading={props.heading}*/}
{/*                        subtext={props.subtext}*/}
{/*                    />*/}
{/*                </StyledDiv>*/}
{/*            </Grid>*/}
{/*        </Grid>*/}
{/*    </Container>*/}
{/*</div>*/}

{/*<div style={{ height: 10 }} />*/}

{/*<div*/}
{/*    style={{*/}
{/*        backgroundColor: props.backgroundColor,*/}
{/*    }}*/}
{/*>*/}
{/*    <Container*/}
{/*        maxWidth={'lg'}*/}
{/*        disableGutters*/}
{/*        style={{*/}
{/*            backgroundColor: 'pink',*/}
{/*            paddingTop: props.topBottomPadding,*/}
{/*            paddingBottom: props.topBottomPadding,*/}
{/*        }}*/}
{/*    >*/}
{/*        <StyledFullDiv*/}
{/*            style={{ backgroundImage: `url(${props.src})` }}*/}
{/*        >*/}
{/*            <Grid*/}
{/*                container*/}
{/*                spacing={2}*/}
{/*                direction={'row'}*/}
{/*                justifyContent="space-evenly"*/}
{/*                alignItems="center"*/}
{/*            >*/}
{/*                <Grid item md={6} sm={8} xs={12}>*/}
{/*                    <StyledDiv>*/}
{/*                        <TitleTextButton*/}
{/*                            buttons={props.buttons}*/}
{/*                            heading={props.heading}*/}
{/*                            subtext={props.subtext}*/}
{/*                        />*/}
{/*                    </StyledDiv>*/}
{/*                </Grid>*/}
{/*            </Grid>*/}
{/*        </StyledFullDiv>*/}
{/*    </Container>*/}
{/*</div>*/}
