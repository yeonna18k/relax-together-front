export type Response<T> = {
  content: Array<T>;
  hasNext: boolean;
  totalElements: number;
};
