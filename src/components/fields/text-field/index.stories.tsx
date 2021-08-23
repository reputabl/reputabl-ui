import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { RTextField } from './index';
import { FieldProps } from '../utils';
import { theme } from '../../../index';
import { ThemeProvider } from '@material-ui/core';

export default {
    title: 'Fields/Text Field',
    component: RTextField,
    description: `A field for text`,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<FieldProps> = (props) => (
    <ThemeProvider theme={theme}>
        <RTextField {...props} />
    </ThemeProvider>
);

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};
