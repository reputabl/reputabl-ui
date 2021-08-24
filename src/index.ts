import {createTheme, responsiveFontSizes} from '@material-ui/core';

export {Button} from './components/button';
export {NumberField} from './components/fields/number-field';
export {Tile} from './components/cards/tile';
const customTheme = createTheme({
    typography: {
        h1: {
            fontSize: '4.5rem',
        },
        h2: {
            fontSize: '3.5rem',
        },
        h3: {
            fontSize: '3rem',
        },
        h4: {
            fontSize: '2.5rem',
        },
        h5: {
            fontSize: '2rem',
        },
        h6: {
            fontSize: '1.5rem',
        },
    },
});
export const theme = responsiveFontSizes(customTheme);
