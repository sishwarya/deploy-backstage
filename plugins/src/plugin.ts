import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const daiCommonPlugin = createPlugin({
  id: 'dai-common',
  routes: {
    root: rootRouteRef,
  },
});

export const DaiCommonPage = daiCommonPlugin.provide(
  createRoutableExtension({
    name: 'DaiCommonPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
