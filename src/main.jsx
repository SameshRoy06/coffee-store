import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Route from './Component/Route/Route.jsx';
import Home from './Component/Home/Home.jsx';
import UpdateCoffee from './Component/UpdateCoffee/UpdateCoffee';
import SignUp from './Component/SignUp/SignUp';
import SignIn from './Component/SignIn/SignIn';
import AuthProvider from './Component/Provider/AuthProvider';
import Users from './Component/Users/Users';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    children: [
      {
        path:'/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/coffee')
      },
      {
        path:'/updateCoffee/:id',
        element:<UpdateCoffee></UpdateCoffee>,
        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>
      },
      {
        path: '/users',
        element: <Users></Users>,
        loader: () => fetch('http://localhost:5000/user')
        
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
