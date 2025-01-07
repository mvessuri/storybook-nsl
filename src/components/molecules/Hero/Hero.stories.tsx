import { Meta, StoryObj } from '@storybook/react';
import Hero from './Hero';

const meta: Meta<typeof Hero> = {
  title: 'Molecules/Hero',
  component: Hero,
  argTypes: {
    heading: { control: 'text' },
    subheading: { control: 'text' },
    backgroundImage: { control: 'text' },
    actionButton: { control: 'object' },
  },
};

export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    heading: 'Welcome to Our Site',
    subheading: 'We are glad to have you here.',
    backgroundImage: 'https://picsum.photos/id/921/1500/500',
  },
};

export const WithoutSubheading: Story = {
  args: {
    heading: 'Welcome to Our Site',
    backgroundImage: 'https://picsum.photos/id/921/1500/500',
  },
};

export const WithActionButton: Story = {
  args: {
    heading: 'Welcome to Our Site',
    subheading: 'We are glad to have you here.',
    backgroundImage: 'https://picsum.photos/id/921/1500/500',
    actionButton: {
      text: 'Click Me',
      onClick: () => alert('Button clicked!'),
    },
  },
};

export const RandomImage: Story = {
  args: {
    heading: 'Welcome to Our Site',
    subheading: 'We are glad to have you here.',
    backgroundImage: 'https://picsum.photos/1500/500',
  },
};
