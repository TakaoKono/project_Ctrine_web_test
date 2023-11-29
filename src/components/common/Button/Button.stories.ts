import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
    title: 'Example/Button',
    component: Button,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Nomal: Story = {
    args: {
        text: 'ログイン',
        handleSubmit: () => console.log('ログインする'),
    },
};

export const Mono: Story = {
    args: {
        text: '新規会員登録はこちら',
        isMono: true,
        handleSubmit: () => console.log('新規会員登録する'),
    },
};

export const Blue: Story = {
    args: {
        text: '新規会員登録はこちら',
        isBlue: true,
        handleSubmit: () => console.log('新規会員登録する'),
    },
};

export const Next: Story = {
    args: {
        text: '入力内容を確認する',
        isNext: true,
        handleSubmit: () => console.log('入力内容を確認する'),
    },
};

export const Disable: Story = {
    args: {
        text: '入力内容を確認する',
        isNext: true,
        isDisabled: true,
        handleSubmit: () => console.log('入力内容を確認する'),
    },
};
