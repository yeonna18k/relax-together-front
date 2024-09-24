import { myGatherings } from '@/entities/mypage/api/queries/my-gatherings';
import { user } from '@/entities/mypage/api/queries/user';
import { mergeQueryKeys } from '@lukemorales/query-key-factory';

export const queries = mergeQueryKeys(user, myGatherings);
