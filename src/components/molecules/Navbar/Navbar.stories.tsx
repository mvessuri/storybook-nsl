import { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'Molecules/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {};
