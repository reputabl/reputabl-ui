import * as React from 'react';
import {FC} from 'react';
import Paper from '@material-ui/core/Paper';
import {
    Container,
    Stack,
    styled,
    useMediaQuery,
    useTheme,
} from '@material-ui/core';
import {TitleTextButton} from '../../components/featured/title-text-button';

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
    maxHeight: 500,
    width: '100%',
    objectFit: 'cover',
    overflow: 'hidden',
}));

const StyledDiv = styled('div')(() => ({
    width: '100%',
    height: 400,
    display: 'flex',
}));

const Another = styled('div')(() => ({
    margin: 'auto',
}));

// const HeroImage = styled("img")(() => ({
//     width: "100%",
//     height: "auto",
// }));

//                 backgroundImage: `url(${post.image})`,

export const Hero: FC<HeroProps> = (props: HeroProps): JSX.Element => {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <div style={{backgroundColor: 'red'}}>
            <Container maxWidth={'lg'} disableGutters style={{backgroundColor: 'white'}}>
                <Stack
                    direction={{xs: 'column', sm: 'column', md: 'row'}}
                    justifyContent="space-evenly"
                    alignItems="center"
                    spacing={0}
                >
                    <StyledDiv>
                        <TitleTextButton/>
                    </StyledDiv>
                    {isMdUp &&
                    <StyledDiv>
                        <HeroImage
                            src="https://source.unsplash.com/random"
                            alt=""
                        />
                    </StyledDiv>
                    }
                </Stack>
            </Container>
        </div>
    );
};