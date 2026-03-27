import React, { Suspense } from 'react';
import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Home = React.lazy(() => import("@/pages/home"));
const Demo = React.lazy(() => import("@/pages/demo"));
const Table = React.lazy(() => import("@/pages/user/table"));
const Form = React.lazy(() => import("@/pages/user/test-form"));

const generatedRoutes: RouteObject[] = [
{
  path: "/",
  element: <Navigate to="/home" replace />,
},
{
  path: "home",
  element: (
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
    </Suspense>
  ),
  handle: {
    name: "home",
    meta: {"title":"home"},
  },
},
{
  path: "demo",
  element: (
    <Suspense fallback={<div>Loading...</div>}>
      <Demo />
    </Suspense>
  ),
  handle: {
    name: "demo",
  },
},
{
  path: "table",
  element: (
    <Suspense fallback={<div>Loading...</div>}>
      <Table />
    </Suspense>
  ),
  handle: {
    name: "table",
    meta: {"title":"table"},
  },
},
{
  path: "form",
  element: (
    <Suspense fallback={<div>Loading...</div>}>
      <Form />
    </Suspense>
  ),
  handle: {
    name: "form",
  },
}
];

export default generatedRoutes;
