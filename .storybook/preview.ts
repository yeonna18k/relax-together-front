import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import type { Preview } from '@storybook/react';
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
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/example',
        query: {
          initialParam: 'initialValue',
        },
      },
    },
  },
};

export default preview;
