import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Hero } from './index';
import { theme } from '../../index';
import { ThemeProvider } from '@material-ui/core';
import {mainFeaturedPost } from "./utils";

export default {
    title: 'Sections/Hero',
    component: Hero,
    description: `Hero`,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story = () => (
    <ThemeProvider theme={theme}>
        <Hero  post={mainFeaturedPost}/>
    </ThemeProvider>
);

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};
