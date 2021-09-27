import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Hero, HeroProps } from "./index";
import { NumberField, theme } from "../../index";
import { ThemeProvider } from '@material-ui/core';
import { NumberProps } from "../../components/fields/number-field";

export default {
    title: 'Sections/Hero',
    component: Hero,
    description: `Hero`,
} as Meta;

const heading = 'Data to enrich your ligma business';

const subtext =
    'Sugma Sugma Sugma Sugma Sugma Sugma Sugma Sugma Sugma Sugma Sugma Sugma Sugma Sugma Sugma Sugma Sugma Sugma Sugma Sugma Sugma Sugma Sugma Sugma';

const buttons = [
    {
        text: 'Yeh',
    },
    {
        text: 'Yeh2',
    },
];

//www.tailorbrands.com/wp-content/uploads/2020/07/twitter-logo.jpg

// const Template: Story<NumberProps> = (props) => (
//   <ThemeProvider theme={theme}>
//     <NumberField {...props} />

//👇 We create a “template” of how args map to rendering
const Template: Story<HeroProps> = (props) => (
    <ThemeProvider theme={theme}>
        <Hero {...props} />
    </ThemeProvider>
);

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  buttons: buttons,
  heading: heading,
  subtext: subtext,
  backgroundColor: 'red',
  topBottomPadding: '4rem',
  imageOrientation: "left",
  src: 'https://source.unsplash.com/random'
  // src: 'https://techcrunch.com/wp-content/uploads/2018/07/logo-2.png?w=300'
};

// src={'https://source.unsplash.com/random'}
