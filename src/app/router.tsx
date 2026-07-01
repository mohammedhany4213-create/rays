import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '@/components/layout/RootLayout';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Projects = lazy(() => import('@/pages/Projects'));
const ProjectDetails = lazy(() => import('@/pages/ProjectDetails'));
const Contact = lazy(() => import('@/pages/Contact'));

const withSuspense = (el: JSX.Element) => <Suspense fallback={<div aria-hidden />} >{el}</Suspense>;

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: withSuspense(<Home />) },
      { path: 'about', element: withSuspense(<About />) },
      { path: 'projects', element: withSuspense(<Projects />) },
      { path: 'projects/:id', element: withSuspense(<ProjectDetails />) },
      { path: 'contact', element: withSuspense(<Contact />) },
    ],
  },
]);
