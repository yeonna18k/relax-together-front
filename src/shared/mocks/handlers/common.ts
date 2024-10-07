import { dummyUser } from '@/shared/fixture/user';
import { BASE_URL } from '@/shared/lib/constants';
import { rest } from 'msw';

export const commonHandler = [
  rest.get(`${BASE_URL}/api/auths/me`, (req, res, ctx) =>
    res(ctx.json(dummyUser)),
  ),
];
