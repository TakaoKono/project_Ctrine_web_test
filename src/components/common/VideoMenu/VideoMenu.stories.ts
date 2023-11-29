import type { Meta, StoryObj } from '@storybook/react';
import VideoMenu from './VideoMenu';

const meta = {
    title: 'Example/VideoMenu',
    component: VideoMenu,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} satisfies Meta<typeof VideoMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Discription_PC: Story = {
    args: {
        windowDimensionWidth: 1080,
        target: 'discription',
        handleClickIcon: () => console.log('change discription'),
    },
};
export const Discription_TAB_SP: Story = {
    args: {
        windowDimensionWidth: 1023,
        target: 'discription',
        handleClickIcon: () => console.log('change discription'),
    },
};
export const Chapter_PC: Story = {
    args: {
        windowDimensionWidth: 1080,
        target: 'chapter',
        handleClickIcon: () => console.log('change chapter'),
    },
};
export const Chapter_TAB_SP: Story = {
    args: {
        windowDimensionWidth: 1023,
        target: 'chapter',
        handleClickIcon: () => console.log('change chapter'),
    },
};
export const Document_PC: Story = {
    args: {
        windowDimensionWidth: 1080,
        target: 'document',
        handleClickIcon: () => console.log('change document'),
    },
};
export const Document_TAB_SP: Story = {
    args: {
        windowDimensionWidth: 1023,
        target: 'document',
        handleClickIcon: () => console.log('change document'),
    },
};
export const Code_PC: Story = {
    args: {
        windowDimensionWidth: 1080,
        target: 'code',
        handleClickIcon: () => console.log('change code'),
    },
};
export const Code_TAB_SP: Story = {
    args: {
        windowDimensionWidth: 1023,
        target: 'code',
        handleClickIcon: () => console.log('change code'),
    },
};
