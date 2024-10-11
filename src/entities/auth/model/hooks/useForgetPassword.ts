import { forgotPasswordApiService } from '../../api/service/ForgotpasswordApiService';

export function useForgotPassword() {
  async function sendForgotPasswordEmail(email: string, token?: string) {
    const response =
      await forgotPasswordApiService.sendForgotPasswordEmail(email);
    return response;
  }

  return { sendForgotPasswordEmail };
}
