import { fn } from '@storybook/test';

import { DocAppRequestUser } from './DocAppRequestUser';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'doc/DocAppRequestUser',
  component: DocAppRequestUser,
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
export const Simple = {
  args: {
    appointement: {
        id: 9,
        name: 'Ali Trabelsi',
        age: 35,
        avatar: 'https://docs.material-tailwind.com/img/face-5.jpg',
        request: {
          id: 5,
          reqTime: '16 April 16:00',
          status: 'Accepted',
        },
      },
    index: 1,
  },
};


