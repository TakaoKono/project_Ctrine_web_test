import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { UserMenu } from './UserMenu';

const meta = {
    title: 'Example/UserMenu',
    component: UserMenu,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
        nextjs: {
            appDirectory: true,
        },
    },
} satisfies Meta<typeof UserMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalVisible_FALSE: Story = {
    args: {
        windowDimensionHeight: 0,
        isModalVisible: false,
        toggleModal: () => console.log('モーダルを消す'),
    },
    render: ({ windowDimensionHeight, isModalVisible, toggleModal }) => (
        <div style={{ position: 'relative' }}>
            <UserMenu
                windowDimensionHeight={windowDimensionHeight}
                isModalVisible={isModalVisible}
                toggleModal={toggleModal}
            />
        </div>
    ),
};

export const ModalVisible_TRUE: Story = {
    args: {
        windowDimensionHeight: 500,
        isModalVisible: true,
        toggleModal: () => console.log('モーダルを消す'),
    },
    render: ({ windowDimensionHeight, isModalVisible, toggleModal }) => (
        <div style={{ position: 'relative' }}>
            <UserMenu
                windowDimensionHeight={windowDimensionHeight}
                isModalVisible={isModalVisible}
                toggleModal={toggleModal}
            />
        </div>
    ),
};
