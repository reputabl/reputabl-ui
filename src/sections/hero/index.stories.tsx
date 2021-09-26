import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Hero } from './index';
import { theme } from '../../index';
import { ThemeProvider } from '@material-ui/core';

export default {
    title: 'Sections/Hero',
    component: Hero,
    description: `Hero`,
} as Meta;

const heading = 'Data to enrich your ligma business';

const subtext =
    'Sugma Sugma Sugma Sugma Sugma Sugma Sugma Sugma Sugma Sugma Sugma Sugma Sugma Sugma Sugma Sugma Sugma Sugma Sugma Sugma Sugma Sugma Sugma Sugma';

const buttons = [
    {
        text: 'Yeh',
    },
    {
        text: 'Yeh2',
    },
];

//www.tailorbrands.com/wp-content/uploads/2020/07/twitter-logo.jpg

//👇 We create a “template” of how args map to rendering
const Template: Story = () => (
    <ThemeProvider theme={theme}>
        <Hero
            buttons={buttons}
            heading={heading}
            subtext={subtext}
            src={
                'https://techcrunch.com/wp-content/uploads/2018/07/logo-2.png?w=300'
            }
            // src={'https://source.unsplash.com/random'}
        />
    </ThemeProvider>
);

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};
