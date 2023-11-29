import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta = {
    title: 'Example/Input',
    component: Input,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Deafult: Story = {
    args: {
        label: 'メールアドレス',
        placeholder: 'xxxxxxxxx@xxxxxx.xxx',
        type: 'email',
        onChange: () => console.log('change'),
    },
};

export const InValue: Story = {
    args: {
        label: 'メールアドレス',
        placeholder: 'xxxxxxxxx@xxxxxx.xxx',
        value: 'deafult_email@email.com',
        type: 'email',
        onChange: () => console.log('change'),
    },
};

export const Password: Story = {
    args: {
        label: 'パスワード',
        isNeed: true,
        placeholder: '*******************',
        value: 'Password@1',
        isPassword: true,
        type: 'text',
        onChange: () => console.log('change'),
    },
};

export const Error: Story = {
    args: {
        label: 'パスワード',
        isNeed: true,
        placeholder: '*******************',
        value: 'Password@1',
        isPassword: true,
        errorMessage: 'パスワードは8文字以上で入力してください。',
        type: 'text',
        onChange: () => console.log('change'),
    },
};
