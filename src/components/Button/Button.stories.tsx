import { Story, Meta } from '@storybook/react/types-6-0';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';

import { Button } from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta;

export const Small: Story = args => <Button {...args} />;
Small.args = {
  children: 'Buy now',
  size: 'small'
};

export const Medium: Story = args => <Button {...args} />;
Medium.args = {
  children: 'Buy now',
  size: 'medium'
};

export const Large: Story = args => <Button {...args} />;
Large.args = {
  children: 'Buy now',
  size: 'large'
};

export const TextAndIcon: Story = args => <Button {...args} />;
TextAndIcon.args = {
  children: 'Buy now',
  size: 'small',
  icon: <AddShoppingCart />
};

export const OnlyIcon: Story = args => <Button {...args} />;
OnlyIcon.args = {
  children: '',
  size: 'small',
  icon: <AddShoppingCart />
};

export const AsLink: Story = args => <Button {...args} />;
AsLink.args = {
  children: 'Buy now',
  size: 'medium',
  as: 'a',
  href: '/link'
};
