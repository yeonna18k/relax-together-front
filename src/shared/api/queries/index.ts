import { user } from '@/shared/api/queries/user';
import { mergeQueryKeys } from '@lukemorales/query-key-factory';

export const queries = mergeQueryKeys(user);
