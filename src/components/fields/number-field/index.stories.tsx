import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { NumberField, NumberProps } from './index';
import { theme } from '../../../index';
import { ThemeProvider } from '@material-ui/core';

export default {
    title: 'Fields/Number Field',
    component: NumberField,
    description: `A field for different types of numbers`,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<NumberProps> = (props) => (
    <ThemeProvider theme={theme}>
        <NumberField {...props} />
    </ThemeProvider>
);

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};

export const Phone = Template.bind({});
Phone.args = {
    number: 'phone',
};

export const Zip = Template.bind({});
Zip.args = {
    number: 'zip',
};

export const Currency = Template.bind({});
Currency.args = {
    number: 'currency',
};
