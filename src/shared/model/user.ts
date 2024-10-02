export interface User {
  id: number;
  email: string;
  name: string;
  companyName: string;
  profileImage: string;
}

export type UserInfoItem = {
  category: string; // "Company", "E-mail" 등
  value: string; // 실제 유저 정보 (e.g., "test company", "test@example.com")
};

export type UserInfoList = Array<UserInfoItem>;

export interface UpdateUserRequest {
  companyName: string;
  profileImage: string;
}
