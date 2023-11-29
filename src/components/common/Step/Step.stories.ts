import type { Meta, StoryObj } from '@storybook/react';
import { Step } from './Step';

const meta = {
    title: 'Example/Step',
    component: Step,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} satisfies Meta<typeof Step>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Step1_PC_TAB: Story = {
    args: {
        windowDimensionWidth: 1080,
        step: 1,
    },
};

export const Step2_PC_TAB: Story = {
    args: {
        windowDimensionWidth: 1080,
        step: 2,
    },
};

export const Step3_PC_TAB: Story = {
    args: {
        windowDimensionWidth: 1080,
        step: 3,
    },
};

export const Step1_SP: Story = {
    args: {
        windowDimensionWidth: 768,
        step: 1,
    },
};

export const Step2_SP: Story = {
    args: {
        windowDimensionWidth: 768,
        step: 2,
    },
};

export const Step3_SP: Story = {
    args: {
        windowDimensionWidth: 768,
        step: 3,
    },
};
