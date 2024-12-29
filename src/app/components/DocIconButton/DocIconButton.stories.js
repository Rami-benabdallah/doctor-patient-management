import { fn } from '@storybook/test';

import { DocIconButton } from './DocIconButton';
import TeemoArrow from '@/app/assets/icons/TeemoArrow';
import DocClose from '@/app/assets/icons/DocClose';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'doc/DocIconButton',
  component: DocIconButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Main = {
  args: {
    mode: 'main',
    icon: TeemoArrow,
    customPadding: 'p-2',
    customWidth: 'w-fit',
    rounded: 'rounded-md'
  },
};

export const Error = {
    args: {
      mode: 'error',
      icon: DocClose,
      customPadding: 'p-2',
      customWidth: 'w-fit',
      rounded: 'rounded-md'
    },
};

export const Disabled = {
    args: {
      mode: 'main',
      icon: TeemoArrow,
      disabled: true,
      size: 'h-8 w-8'
    },
};

export const Transparent = {
  args: {
      mode: 'transparent',
      icon: TeemoArrow,
  },
};

export const TransparentWithHover = {
    args: {
        mode: 'transparent',
        icon: TeemoArrow,
        hoverEffects: 'hover:bg-primary hover:text-light',
        rounded: 'rounded-2xl'
    },
};
