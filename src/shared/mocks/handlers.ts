import { dummyUser } from '@/shared/fixture/user';
import { rest } from 'msw';
import {
  dummyGatheringsInfo,
  dummyParticipantList,
} from '../fixture/information';

const handlers = [
  rest.get(`/api/auths/user`, (req, res, ctx) => res(ctx.json(dummyUser))),
  rest.put(`/api/auths/user`, (req, res, ctx) => {
    console.log(req);
    return res(ctx.status(200));
  }),
  rest.post(`/api/auth/signup`, (req, res, ctx) =>
    res(ctx.status(201), ctx.json({ accessToken: 'Access-Token' })),
  ),

  rest.get(`/api/gatherings/:id`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dummyGatheringsInfo));
  }),
  rest.get(`/api/gatherings/:id/participants`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dummyParticipantList));
  }),
];

export default handlers;
