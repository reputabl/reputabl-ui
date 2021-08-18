import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Login, LoginProps } from './index';

export default {
    title: 'Sections/Login',
    component: Login,
    description: `Login`,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<LoginProps> = (props) => <Login {...props} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};
