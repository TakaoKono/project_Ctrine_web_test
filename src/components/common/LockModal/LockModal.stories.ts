import type { Meta, StoryObj } from '@storybook/react';
import LockModal from './LockModal';

const meta = {
    title: 'Example/LockModal',
    component: LockModal,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} satisfies Meta<typeof LockModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PC_TAB: Story = {
    args: {
        windowDimensionWidth: 1080,
        handleClickButton: () => console.log('会員登録する'),
        toggleModal: () => console.log('会員登録モーダルの表示切替'),
    },
};

export const SP: Story = {
    args: {
        windowDimensionWidth: 768,
        handleClickButton: () => console.log('会員登録する'),
        toggleModal: () => console.log('会員登録モーダルの表示切替'),
    },
};
