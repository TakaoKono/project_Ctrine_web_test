import type { Meta, StoryObj } from '@storybook/react';
import Document from './Document';

const meta = {
    title: 'Icons/Document',
    component: Document,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} satisfies Meta<typeof Document>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Black: Story = {
    args: { fill: '#000' },
};

export const Gray: Story = {
    args: { fill: '#C0C0C0' },
};

export const Blue: Story = {
    args: { fill: '#0857C3' },
};
