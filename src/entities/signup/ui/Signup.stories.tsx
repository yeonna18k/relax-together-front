import Signup from '@/app/signup/page';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

const meta = {
  title: 'Entities/ui/Signup',
  component: Signup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Signup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SignupWithDisabledButton: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = await canvas.getByRole('button', { name: '확인' });
    await expect(button).toBeDisabled();
  },
};

export const SignupWithInvalidInputs: Story = {
  args: {
    defaultValues: {
      name: '',
      email: 'user',
      companyName: '',
      password: '12345',
      passwordCheck: '1234',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const nameInput = canvas.getByLabelText('이름');
    const emailInput = canvas.getByLabelText('아이디');
    const companyNameInput = canvas.getByLabelText('회사명');
    const passwordInput = canvas.getByLabelText('비밀번호');
    const passwordCheckInput = canvas.getByLabelText('비밀번호 확인');

    await userEvent.click(nameInput);
    await userEvent.tab(); // 탭을 통해 다음 필드로 이동

    await userEvent.click(emailInput);
    await userEvent.tab();

    await userEvent.click(companyNameInput);
    await userEvent.tab();

    await userEvent.click(passwordInput);
    await userEvent.tab();

    await userEvent.click(passwordCheckInput);
    await userEvent.tab();

    const button = canvas.getByRole('button', { name: '확인' });
    expect(button).toBeDisabled();
  },
};

export const SignupWithValidInputs: Story = {
  args: {
    defaultValues: {
      username: 'example',
      userid: 'example@example.com',
      company: 'Example Corp',
      password: 'password123',
      passwordCheck: 'password123',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const nameInput = canvas.getByLabelText('이름');
    const emailInput = canvas.getByLabelText('아이디');
    const companyNameInput = canvas.getByLabelText('회사명');
    const passwordInput = canvas.getByLabelText('비밀번호');
    const passwordCheckInput = canvas.getByLabelText('비밀번호 확인');

    await userEvent.type(nameInput, 'example');
    await userEvent.type(emailInput, 'example@example.com');
    await userEvent.type(companyNameInput, 'Example Corp');
    await userEvent.type(passwordInput, 'password123');
    await userEvent.type(passwordCheckInput, 'password123');

    expect(nameInput).toHaveValue('example');
    expect(emailInput).toHaveValue('example@example.com');
    expect(companyNameInput).toHaveValue('Example Corp');
    expect(passwordInput).toHaveValue('password123');
    expect(passwordCheckInput).toHaveValue('password123');

    const button = canvas.getByRole('button', { name: '확인' });
    expect(button).not.toBeDisabled();
  },
};
