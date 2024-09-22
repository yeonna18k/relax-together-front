export interface User {
  id: number;
  email: string;
  name: string;
  companyName: string;
  image: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
}
