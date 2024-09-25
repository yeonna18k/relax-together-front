import { MyGathering } from '@/entities/mypage/model';

export interface MyHostedGathering
  extends Omit<MyGathering, 'status' | 'completed'> {}
