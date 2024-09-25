import Signin from '@/app/signin/page';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

const meta = {
  title: 'Entities/ui/Signin',
  component: Signin,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Signin>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SigninWithDisabledButton: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = await canvas.getByRole('button', { name: '로그인' });
    await expect(button).toBeDisabled();
  },
};

export const SigninWithInvalidInputs: Story = {
  args: {
    defaultValues: {
      email: 'user',
      password: '',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const emailInput = canvas.getByLabelText('아이디');
    const passwordInput = canvas.getByLabelText('비밀번호');

    await userEvent.click(emailInput);
    await userEvent.tab();

    await userEvent.click(passwordInput);
    await userEvent.tab();

    const button = canvas.getByRole('button', { name: '로그인' });
    expect(button).toBeDisabled();
  },
};

export const SigninWithValidInputs: Story = {
  args: {
    defaultValues: {
      userid: 'example@example.com',
      password: 'password123',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const emailInput = canvas.getByLabelText('아이디');
    const passwordInput = canvas.getByLabelText('비밀번호');

    await userEvent.type(emailInput, 'example@example.com');
    await userEvent.type(passwordInput, 'password123');

    expect(emailInput).toHaveValue('example@example.com');
    expect(passwordInput).toHaveValue('password123');

    const button = canvas.getByRole('button', { name: '로그인' });
    expect(button).not.toBeDisabled();
  },
};
