import { authApiService } from '../../api/service/ForgotPasswordApiService'; // 인스턴스를 가져옴

export function useForgotPassword() {
  async function sendForgotPasswordEmail(email: string) {
    const response = await authApiService.sendForgotPasswordEmail(email); // 인스턴스 메서드 호출
    return response;
  }

  return { sendForgotPasswordEmail };
}
