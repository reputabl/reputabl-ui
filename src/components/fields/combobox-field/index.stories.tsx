import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ComboBox } from './index';
import { NumberProps } from '../number-field';
import { theme } from '../../../index';
import { ThemeProvider } from '@material-ui/core';

export default {
    title: 'Fields/ComboBox Field',
    component: ComboBox,
    description: `A field for different types of numbers`,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<NumberProps> = (props) => (
    <ThemeProvider theme={theme}>
        <ComboBox {...props} />
    </ThemeProvider>
);

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};
