import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Tile, TileProps } from './index';

export default {
    title: 'Cards/Tile',
    component: Tile,
    description: `A field for text`,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<TileProps> = (props) => <Tile {...props} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
    href: 'www.youtube.com',
    text: 'Youtube',
};
