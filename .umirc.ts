import { defineConfig } from '@umijs/max';
import routes from './src/route/index';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '学校系统',
  },
  routes,
  npmClient: 'yarn',
});

