import { rest } from 'msw';

const API_BASE_URL = 'http://localhost:3000/api';

const handlers = [
  rest.get(`${API_BASE_URL}/users/me`, (req, res, ctx) => res(ctx.status(201))),
  rest.post(`${API_BASE_URL}/users`, (req, res, ctx) =>
    res(ctx.status(201), ctx.json({ accessToken: 'Access-Token' })),
  ),
];

export default handlers;
