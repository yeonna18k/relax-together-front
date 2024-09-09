import { http, HttpResponse } from 'msw';

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get('https://api.example.com/user', () => {
    return HttpResponse.json({
      firstName: 'John',
      lastName: 'Maverick',
    });
  }),
  http.get('http://localhost:3000/product', () => {
    return HttpResponse.json({
      name: 'Awesome Product',
    });
  }),
];
