import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import {
  ReadonlyURLSearchParams,
  useSearchParams,
} from '@storybook/nextjs/navigation.mock';
import type { Preview } from '@storybook/react';
import mockRouter from 'next-router-mock';
import { useMemo } from 'react';
import '../src/app/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  beforeEach: () => {
    useSearchParams.mockImplementation(() => {
      const searchParams = useMemo(
        () =>
          new ReadonlyURLSearchParams(
            new URLSearchParams(mockRouter.query as Record<string, string>),
          ),
        [mockRouter.query],
      );
      return searchParams;
    });
  },
};

export default preview;
