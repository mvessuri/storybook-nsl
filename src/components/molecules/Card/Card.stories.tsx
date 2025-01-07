import { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import Button from '../../atoms/Button/Button';

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    description: 'This is a description of the card.',
  },
};

export const WithChildren: Story = {
  args: {
    title: 'Card Title with Children',
    description: 'This is a description of the card with children elements.',
    children: <Button className='primary-button'>Click me</Button>,
  },
};
