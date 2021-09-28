import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Hero, HeroProps } from './index';
import { theme } from '../../index';
import { ThemeProvider } from '@material-ui/core';

export default {
    title: 'Sections/Hero2',
    component: Hero,
    description: `Hero`,
} as Meta;

const heading = 'UI components, created using Material UI and Stack Overflow';

const subtext =
    'Praesent accumsan, velit ut varius faucibus, justo dui sagittis augue, ac dignissim justo enim non enim. Aliquam erat volutpat.';

const buttons = [
    {
        text: 'Yuh',
    },
    {
        text: 'Yuh',
    },
];

const Template: Story<HeroProps> = (props) => (
    <ThemeProvider theme={theme}>
        <Hero {...props} />
    </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
    buttons: buttons,
    heading: heading,
    subtext: subtext,
    fontColor: 'white',
    backgroundColor: '#b15aff',
    topBottomPadding: '0',
    imageOrientation: 'left',
    imageType: 'picture',
    src: 'https://source.unsplash.com/random',
};

export const Logo = Template.bind({});
Logo.args = {
    buttons: buttons,
    heading: heading,
    subtext: subtext,
    backgroundColor: '#8ee6ff',
    topBottomPadding: '0',
    imageOrientation: 'left',
    imageType: 'logo',
    src: '//logo.clearbit.com/spotify.com',
};

export const Picture = Template.bind({});
Picture.args = {
    buttons: buttons,
    heading: heading,
    subtext: subtext,
    backgroundColor: '#87ff41',
    topBottomPadding: '4rem',
    imageOrientation: 'right',
    imageType: 'picture',
    src: 'https://source.unsplash.com/random',
};

export const Background = Template.bind({});
Background.args = {
    buttons: buttons,
    heading: heading,
    subtext: subtext,
    backgroundColor: '#4188ff',
    topBottomPadding: '4rem',
    imageOrientation: 'background',
    imageType: 'picture',
    src: 'https://source.unsplash.com/random',
};

// src={'https://source.unsplash.com/random'}
