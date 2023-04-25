import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Navbar } from './Navbar';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'widget/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    user: { authData: undefined },
})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
PrimaryDark.decorators.push(StoreDecorator({
    user: { authData: undefined },
}));

export const LoggedIn = Template.bind({});
LoggedIn.args = {};
LoggedIn.decorators = [StoreDecorator({
    user: { authData: { id: '1', username: 'aaa' } },
})];
