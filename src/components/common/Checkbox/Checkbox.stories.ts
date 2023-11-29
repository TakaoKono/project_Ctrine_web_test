import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';

const meta = {
    title: 'Example/Checkbox',
    component: Checkbox,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: '入力内容を確認する',
        isChecked: false,
        handleSubmit: () => console.log('入力内容を確認する'),
    },
};

export const Checked: Story = {
    args: {
        text: '入力内容を確認する',
        isChecked: true,
        handleSubmit: () => console.log('入力内容を確認する'),
    },
};

export const UseLink: Story = {
    args: {
        text: '個人情報取扱いについて、ご確認ください。',
        isChecked: false,
        linkText: '個人情報取扱いについて',
        link: 'https://mail.google.com/',
        handleSubmit: () => console.log('確認した'),
    },
};
