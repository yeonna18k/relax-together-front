import { user } from '@/entities/mypage/api/queries';
import { mergeQueryKeys } from '@lukemorales/query-key-factory';

export const queries = mergeQueryKeys(user);
