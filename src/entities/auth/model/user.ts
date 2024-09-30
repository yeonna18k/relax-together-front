export interface signupUser {
  email: string;
  password: string;
  name: string;
  companyName: string;
}

export interface signinUser {
  email: string;
  password: string;
  token?: string;
}
