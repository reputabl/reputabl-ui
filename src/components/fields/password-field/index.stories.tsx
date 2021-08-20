import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { PasswordField } from './index';
import { FieldProps } from '../utils';

export default {
    title: 'Fields/Password Field',
    component: PasswordField,
    description: `A field for a password`,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<FieldProps> = (props: FieldProps) => (
    <PasswordField {...props} />
);

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};
