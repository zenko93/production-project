import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    profile: {
        form: {
            first: 'Vimal',
            lastname: 'AM',
            age: 29,
            country: Country.Kazakhstan,
            city: 'Saint-Petersburg',
            username: 'admin',
            currency: Currency.USD,
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            first: 'Vimal',
            lastname: 'AM',
            age: 29,
            country: Country.Kazakhstan,
            city: 'Saint-Petersburg',
            username: 'admin',
            currency: Currency.USD,
        },
    },
})];
