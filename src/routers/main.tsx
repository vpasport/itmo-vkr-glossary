import type { FC } from 'react'

import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Dictionary, Graph } from '@/pages'

const router = createBrowserRouter([
  { path: '/graph', element: <Graph /> },
  {
    path: '*',
    element: <Dictionary />,
  },
])

export const MainRouter: FC = () => {
  return <RouterProvider router={router} />
}
