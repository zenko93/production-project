import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis deleniti dolorum ea ex natus nemo nisi rerum sunt? Architecto, odit.',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis deleniti dolorum ea ex natus nemo nisi rerum sunt? Architecto, odit.',
    theme: TextTheme.ERROR,
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    title: 'Title lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis deleniti dolorum ea ex natus nemo nisi rerum sunt? Architecto, odit.',
    theme: TextTheme.ERROR,
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title lorem ipsum',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis deleniti dolorum ea ex natus nemo nisi rerum sunt? Architecto, odit.',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis deleniti dolorum ea ex natus nemo nisi rerum sunt? Architecto, odit.',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Title lorem ipsum',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis deleniti dolorum ea ex natus nemo nisi rerum sunt? Architecto, odit.',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Title lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis deleniti dolorum ea ex natus nemo nisi rerum sunt? Architecto, odit.',
    size: TextSize.M,
};

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Title lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis deleniti dolorum ea ex natus nemo nisi rerum sunt? Architecto, odit.',
    size: TextSize.L,
};
