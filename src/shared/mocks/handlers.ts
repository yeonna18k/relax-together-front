import { dummyUser } from '@/shared/fixture/user';
import { rest } from 'msw';

const API_BASE_URL = 'http://localhost:3000/api';

const handlers = [
  rest.get(`${API_BASE_URL}/auths/user`, (req, res, ctx) =>
    res(ctx.json(dummyUser)),
  ),
  rest.post(`${API_BASE_URL}/auth/signup`, (req, res, ctx) =>
    res(ctx.status(201), ctx.json({ accessToken: 'Access-Token' })),
  ),
];

export default handlers;
