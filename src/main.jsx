import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import Home from './Pages/Home';
import Register from './Pages/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import Menu from './Pages/Menu/Menu';
import { HelmetProvider } from 'react-helmet-async';
import OrderFood from './Pages/OrderFood/OrderFood';
import Login from './Pages/Login';
import { Toaster } from 'react-hot-toast';
// import { Toaster } from 'react-hot-toast/dist';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/menu',
        element:<Menu></Menu>
      },
      {
        path:'/orderFood',
        element:<OrderFood></OrderFood>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
    ]
  },
  {
    path: 'dashboard',
    element:<Dashboard></Dashboard>,
    children:[
      {
        path: 'cart',
        element:<Cart></Cart>
      },
    ]
  }
]);

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Dashboard from './Layout/Dashboard';
import Cart from './Pages/Dashboard/Cart';
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
     
   
    <HelmetProvider>
    <AuthProvider>
    <RouterProvider router={router} />

    </AuthProvider>
    </HelmetProvider>
    </QueryClientProvider>
    <Toaster/>
  </React.StrictMode>,
)
