import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { SignUp } from './index';
import { theme } from '../../index';
import { ThemeProvider } from '@material-ui/core';

export default {
    title: 'Sections/Sign Up',
    component: SignUp,
    description: `Sign Up`,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story = () => (
    <ThemeProvider theme={theme}>
        <SignUp />
    </ThemeProvider>
);

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};
