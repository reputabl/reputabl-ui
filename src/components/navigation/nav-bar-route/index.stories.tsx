// src/component/Button/index.stories.tsx
import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { NavBarRoute, NavBarRouteProps } from './index';

export default {
    title: 'Navigation Bar Route',
    component: NavBarRoute,
    description: `Route for navigating.`,
    argTypes: {
        backgroundColor: { control: 'color' },
        color: { control: 'color' },
        primary: { control: 'boolean' },
    },
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<NavBarRouteProps> = (args) => (
    <NavBarRoute {...args}>Click me</NavBarRoute>
);

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};
