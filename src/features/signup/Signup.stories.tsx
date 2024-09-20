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
      username: '',
      userid: 'user',
      company: '',
      password: '12345',
      passwordCheck: '1234',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const usernameInput = canvas.getByLabelText('이름');
    const useridInput = canvas.getByLabelText('아이디');
    const companyInput = canvas.getByLabelText('회사명');
    const passwordInput = canvas.getByLabelText('비밀번호');
    const passwordCheckInput = canvas.getByLabelText('비밀번호 확인');

    await userEvent.click(usernameInput);
    await userEvent.tab(); // 탭을 통해 다음 필드로 이동

    await userEvent.click(useridInput);
    await userEvent.tab();

    await userEvent.click(companyInput);
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

    const usernameInput = canvas.getByLabelText('이름');
    const useridInput = canvas.getByLabelText('아이디');
    const companyInput = canvas.getByLabelText('회사명');
    const passwordInput = canvas.getByLabelText('비밀번호');
    const passwordCheckInput = canvas.getByLabelText('비밀번호 확인');

    await userEvent.type(usernameInput, 'example');
    await userEvent.type(useridInput, 'example@example.com');
    await userEvent.type(companyInput, 'Example Corp');
    await userEvent.type(passwordInput, 'password123');
    await userEvent.type(passwordCheckInput, 'password123');

    expect(usernameInput).toHaveValue('example');
    expect(useridInput).toHaveValue('example@example.com');
    expect(companyInput).toHaveValue('Example Corp');
    expect(passwordInput).toHaveValue('password123');
    expect(passwordCheckInput).toHaveValue('password123');

    const button = canvas.getByRole('button', { name: '확인' });
    expect(button).not.toBeDisabled();
  },
};
