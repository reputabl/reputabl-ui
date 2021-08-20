import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

export interface StyleProps {
    backgroundColor?: string;
}

export const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
    card: (props: StyleProps) => ({
        maxWidth: 110,
        borderRadius: 15,
        minWidth: 110,
        backgroundColor: theme.palette.primary.main,
        color: props.backgroundColor,
    }),
    cardContent: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 0,
        paddingBottom: 10,
    },
    logo: {
        height: 80,
        width: 80,
        padding: 10,
        borderRadius: 30,
        justifyContent: 'center',
        objectFit: 'contain',
        margin: '0 auto',
    },
}));
