import {Card, CardContent, CardMedia, styled} from '@material-ui/core';

// export interface StyleProps {
//     backgroundColor?: string;
// }

export const TileCard = styled(Card)(() => ({
        maxWidth: 110,
        borderRadius: 15,
        minWidth: 110,
}));

export const TileCardMedia = styled(CardMedia)(() => ({
        height: 80,
        width: 80,
        padding: 10,
        borderRadius: 30,
        justifyContent: 'center',
        objectFit: 'contain',
        margin: '0 auto',
}));

export const TileCardContent = styled(CardContent)(() => ({
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 0,
        paddingBottom: 10,
}));

// export const useStyles = makeStyles()<Theme, StyleProps>((theme: Theme) => ({
//     card: (props) => ({
//         maxWidth: 110,
//         borderRadius: 15,
//         minWidth: 110,
//         backgroundColor: theme.palette.primary.main,
//         color: props.backgroundColor,
//     }),
//     cardContent: {
//         paddingLeft: 5,
//         paddingRight: 5,
//         paddingTop: 0,
//         paddingBottom: 10,
//     },
//     logo: {
//         height: 80,
//         width: 80,
//         padding: 10,
//         borderRadius: 30,
//         justifyContent: 'center',
//         objectFit: 'contain',
//         margin: '0 auto',
//     },
// }));
