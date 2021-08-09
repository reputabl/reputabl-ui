import * as React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { NumberField, NumberProps } from "./index";

export default {
    title: 'Number Field',
    component: NumberField,
    description: `A field for different types of numbers`,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<NumberProps> = (props) => <NumberField {...props} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};

export const Phone = Template.bind({});
Phone.args = {
    number: 'phone',
};

export const Currency = Template.bind({});
Currency.args = {
    number: 'currency',
};
