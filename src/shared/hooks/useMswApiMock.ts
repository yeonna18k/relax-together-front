import { useEffect } from 'react';

export default function useMswApiMock() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      if (typeof window === 'undefined') {
        const { server } = require('../mocks/node');
        server.listen();
      } else {
        const { worker } = require('../mocks/browser');
        worker.start();
      }
    }
  }, []);
}
