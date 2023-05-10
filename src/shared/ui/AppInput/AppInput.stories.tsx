import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppInput } from './AppInput';

export default {
    title: 'shared/AppInput',
    component: AppInput,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppInput>;

const Template: ComponentStory<typeof AppInput> = (args) => (
    <AppInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'Placeholder',
};
