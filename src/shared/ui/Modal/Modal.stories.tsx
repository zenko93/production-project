import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';
import { Modal } from '@/shared/ui/Modal/Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalNormal = Template.bind({});
ModalNormal.args = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis deleniti dolorum ea ex natus nemo nisi rerum sunt? Architecto, odit.',
    isOpen: true,
};

export const ModalDark = Template.bind({});
ModalDark.args = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis deleniti dolorum ea ex natus nemo nisi rerum sunt? Architecto, odit.',
    isOpen: true,
};
ModalDark.decorators = [ThemeDecorator(Theme.DARK)];
