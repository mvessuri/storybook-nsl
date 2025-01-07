import { Meta, StoryObj } from '@storybook/react';
import Link from './Link';

const meta: Meta<typeof Link> = {
  title: 'Atoms/Link',
  component: Link,
  argTypes: {
    href: { control: 'text' },
    target: { control: 'select', options: ['_self', '_blank', '_parent', '_top'] },
    rel: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    href: '#',
    children: 'Click me',
  },
};

export const NewTab: Story = {
  args: {
    href: 'https://storybook.js.org',
    target: '_blank',
    rel: 'noopener noreferrer',
    children: 'Open in new tab',
  },
};

