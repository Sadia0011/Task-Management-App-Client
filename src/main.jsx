import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './layout/Root';
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';
import Dashboard from './layout/dashboard';
import AuthProvider from './Providers/AuthProvider';
import Reg from './pages/Reg/Reg';
import SignIn from './pages/Login/SignIn';
import Profile from './pages/Dashboard/Profile/Profile';
import AddedTask from './pages/Dashboard/AddedTask/AddedTask';
import List from './pages/Dashboard/List/List';
import PrivateRoute from './Route/PrivateRoute';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import UpdateTask from './pages/UpdateTask/UpdateTask';
import About from './pages/About/About';
import Help from './pages/Help/Help';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/help",
        element:<Help></Help>
      },
      {
        path:"/login",
        element:<SignIn></SignIn>
      },
      {
        path:"/reg",
        element:<Reg></Reg>
      },

    ]
  },
  {
    path:"/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"profile",
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path:"addedtask",
        element:<PrivateRoute><AddedTask></AddedTask></PrivateRoute>
      },
      {
        path:"updatetask/:id",
        element:<UpdateTask></UpdateTask>,
        loader:({params})=>fetch(`https://task-management-server-nine-woad.vercel.app/updatetask/${params.id}`)
      },
      {
        path:"list",
        element:<PrivateRoute><List></List></PrivateRoute>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <DndProvider backend={HTML5Backend}>
   <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
 </DndProvider>,
)
