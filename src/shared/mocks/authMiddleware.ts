import { checkAuth } from '@/shared/mocks/checkAuth';
import { ResponseResolver, RestContext, RestRequest } from 'msw';

export const authMiddleware = (
  handler: ResponseResolver<RestRequest, RestContext>,
): ResponseResolver<RestRequest, RestContext> => {
  return (req, res, ctx) => {
    const authResult = checkAuth(req, res, ctx);
    if (!authResult.isAuthenticated) {
      return authResult.errorResponse!;
    }
    return handler(req, res, ctx);
  };
};
