// packages/ui/src/Button.stories.ts
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  // Ya no usamos 'backgroundColor' porque no es una prop
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'primary-blue', 'primary-green', 'secondary'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',      // Usamos 'variant', no 'primary: true'
    children: 'Button',        // Usamos 'children', no 'label'
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
};

export const PrimaryBlue: Story = {
  args: {
    variant: 'primary-blue',
    children: 'Primary Blue',
  },
};

export const PrimaryGreen: Story = {
  args: {
    variant: 'primary-green',
    children: 'Primary Green',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Button',
  },
};