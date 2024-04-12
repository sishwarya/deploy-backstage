import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { daiCommonPlugin, DaiCommonPage } from '../src/plugin';

createDevApp()
  .registerPlugin(daiCommonPlugin)
  .addPage({
    element: <DaiCommonPage />,
    title: 'Root Page',
    path: '/dai-common'
  })
  .render();
