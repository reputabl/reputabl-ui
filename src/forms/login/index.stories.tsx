import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { LoginForm } from './index';
import { theme } from '../../index';
import { ThemeProvider } from '@material-ui/core';

export default {
    title: 'Forms/Login Form',
    component: LoginForm,
    description: `Login Form`,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story = () => (
    <ThemeProvider theme={theme}>
        <LoginForm />
    </ThemeProvider>
);

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};
