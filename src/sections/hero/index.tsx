import * as React from 'react';
import { FC } from 'react';
import Paper from '@material-ui/core/Paper';
import {
    Container,
    Stack,
    styled,
    useMediaQuery,
    useTheme,
} from '@material-ui/core';
import { TitleTextButton } from '../../components/featured/title-text-button';

interface HeroProps {
    post: {
        description: string;
        image: string;
        imageText: string;
        linkText: string;
        title: string;
    };
}

const HeroImage = styled('img')(() => ({
    minHeight: '18rem',
    width: '100%',
    objectFit: 'cover',
    overflow: 'hidden',
}));

// const HeroImage = styled("img")(() => ({
//     width: "100%",
//     height: "auto",
// }));

//                 backgroundImage: `url(${post.image})`,

export const Hero: FC<HeroProps> = (props: HeroProps): JSX.Element => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Paper
            sx={{
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                mb: 4,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                maxHeight: 500,
            }}
        >
            <Container maxWidth={'lg'} disableGutters>
                <Stack
                    direction={{ xs: 'column', sm: 'column', md: 'row' }}
                    justifyContent="space-evenly"
                    alignItems="center"
                    spacing={0}
                >
                    <TitleTextButton />
                    <HeroImage
                        src="https://source.unsplash.com/random"
                        alt=""
                        style={
                            isSmall
                                ? { maxHeight: '18rem' }
                                : { maxHeight: 500 }
                        }
                    />
                </Stack>
            </Container>
        </Paper>
    );
};

// <Paper
//     sx={{
//         position: 'relative',
//         backgroundColor: 'grey.800',
//         color: '#fff',
//         mb: 4,
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center',
//         backgroundImage: `url(${post.image})`,
//     }}
// >
//     {/* Increase the priority of the hero background image */}
//     {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
//     <Box
//         sx={{
//             position: 'absolute',
//             top: 0,
//             bottom: 0,
//             right: 0,
//             left: 0,
//             backgroundColor: 'rgba(0,0,0,.3)',
//         }}
//     />
//     <Grid container>
//         <Grid item md={6}>
//             <Box
//                 sx={{
//                     position: 'relative',
//                     p: { xs: 3, md: 6 },
//                     pr: { md: 0 },
//                 }}
//             >
//                 <Typography component="h1" variant="h3" color="inherit" gutterBottom>
//                     {post.title}
//                 </Typography>
//                 <Typography variant="h5" color="inherit" paragraph>
//                     {post.description}
//                 </Typography>
//                 <Link variant="subtitle1" href="#">
//                     {post.linkText}
//                 </Link>
//             </Box>
//         </Grid>
//     </Grid>
// </Paper>
