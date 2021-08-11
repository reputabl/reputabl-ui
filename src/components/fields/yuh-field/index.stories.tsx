import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { YuhField } from './index';

export default {
    title: 'Yuh Field',
    component: YuhField,
    description: `A field for text`,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story = (props) => <YuhField {...props} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};
