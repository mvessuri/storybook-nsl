import { Meta, StoryObj } from '@storybook/react';
import Badge from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  argTypes: {
    text: { control: 'text' },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info']
    },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    text: 'Default Badge',
  },
};

export const Primary: Story = {
  args: {
    text: 'Primary',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Secondary',
    color: 'secondary',
  },
};

export const Success: Story = {
  args: {
    text: 'Success',
    color: 'success',
  },
};

export const Danger: Story = {
  args: {
    text: 'Danger',
    color: 'danger',
  },
};

export const Warning: Story = {
  args: {
    text: 'Warning',
    color: 'warning',
  },
};

export const Info: Story = {
  args: {
    text: 'Info',
    color: 'info',
  },
};

export const CustomClass: Story = {
  args: {
    text: 'Custom Class',
    className: 'custom-badge',
  },
};

export const AllBadges: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Badge text="Primary" color="primary" />
      <Badge text="Secondary" color="secondary" />
      <Badge text="Success" color="success" />
      <Badge text="Danger" color="danger" />
      <Badge text="Warning" color="warning" />
      <Badge text="Info" color="info" />
    </div>
  ),
};
