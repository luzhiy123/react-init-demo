import { BasicLayout } from '@/layout';
import type { RouteObject } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import generatedRoutes from './generated-routes';

const routerObjs: RouteObject[] = [...generatedRoutes];

const router = createBrowserRouter([
  {
    path: '/',
    Component: BasicLayout,
    children: generatedRoutes,
  },
]);

export { routerObjs };

export default router;
