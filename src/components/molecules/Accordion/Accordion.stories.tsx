import { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';
import { within, userEvent, expect } from '@storybook/test';

const meta: Meta<typeof Accordion> = {
  title: 'Molecules/Accordion',
  component: Accordion,
  argTypes: {
    items: { control: 'object' },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    items: [
      { title: 'Section 1', content: 'This is the content for section 1.' },
      { title: 'Section 2', content: 'This is the content for section 2.' },
      { title: 'Section 3', content: 'This is the content for section 3.' },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check that all sections are initially closed
    await expect(canvas.queryByText('This is the content for section 1.')).not.toBeInTheDocument();
    await expect(canvas.queryByText('This is the content for section 2.')).not.toBeInTheDocument();
    await expect(canvas.queryByText('This is the content for section 3.')).not.toBeInTheDocument();

    // Click on the first section
    const firstSection = canvas.getByText('Section 1');
    await userEvent.click(firstSection);

    // Check that the first section is now open
    await expect(canvas.getByText('This is the content for section 1.')).toBeInTheDocument();

    // Check that other sections are still closed
    await expect(canvas.queryByText('This is the content for section 2.')).not.toBeInTheDocument();
    await expect(canvas.queryByText('This is the content for section 3.')).not.toBeInTheDocument();

    // Click on the second section
    const secondSection = canvas.getByText('Section 2');
    await userEvent.click(secondSection);

    // Check that the second section is now open and the first section is closed
    await expect(canvas.queryByText('This is the content for section 1.')).not.toBeInTheDocument();
    await expect(canvas.getByText('This is the content for section 2.')).toBeInTheDocument();
    await expect(canvas.queryByText('This is the content for section 3.')).not.toBeInTheDocument();

    // Click on the second section again to close it
    await userEvent.click(secondSection);

    // Check that all sections are closed again
    await expect(canvas.queryByText('This is the content for section 1.')).not.toBeInTheDocument();
    await expect(canvas.queryByText('This is the content for section 2.')).not.toBeInTheDocument();
    await expect(canvas.queryByText('This is the content for section 3.')).not.toBeInTheDocument();
  },
};

export const SingleItem: Story = {
  args: {
    items: [
      { title: 'Single Section', content: 'This is the content for a single section accordion.' },
    ],
  },
};

export const LongContent: Story = {
  args: {
    items: [
      { title: 'Section with Long Content', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc. Sed euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.' },
      { title: 'Another Section', content: 'This is a shorter content section.' },
    ],
  },
};
