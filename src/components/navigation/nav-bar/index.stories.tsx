// src/component/Button/index.stories.tsx
import * as React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import {NavBar, NavBarProps} from './index';
import {NavBarRoute} from '../nav-bar-route';
import {theme} from "../../../index";
import {ThemeProvider} from "@material-ui/core";

export default {
    title: 'Navigation Bar',
    component: NavBar,
    description: `Bar for navigating.`,
    argTypes: {
        backgroundColor: {control: 'color'},
        color: {control: 'color'},
        primary: {control: 'boolean'},
    },
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<NavBarProps> = (args) => (
    <ThemeProvider theme={theme}>
        <NavBar {...args}>
            <NavBarRoute location={'/'}>
                <p>Home</p>
            </NavBarRoute>
            <NavBarRoute location={'/'}>
                <p>About Us</p>
            </NavBarRoute>
            <NavBarRoute location={'/'}>
                <p>Contact</p>
            </NavBarRoute>
        </NavBar>
    </ThemeProvider>
);

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};
