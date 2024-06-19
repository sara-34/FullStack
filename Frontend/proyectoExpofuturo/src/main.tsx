import React from 'react';
import ReactDOM from 'react-dom';
import '../src/routes/index.css';
import '../src/routes/dasbohard.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './routes/Login';
import SIgnup from './routes/signup';
import Dasbohard from './routes/Dasbohard';
import ProtectionRoute from './routes/ProtectionRoute';
import { AuthProvider } from './auth/AuthProvaider';

//Creo un router y cada ruta, un array en donde van a ir cada una de las paginas de la aplicacion.
const router = createBrowserRouter([
  {
    path:"/",
    element: <Login />,

  },
  {
    path:"/signup",
    element: <SIgnup />,

  },
//Ruta protegida apartir de Dasbohard
  {
    path:"/",
    element: <ProtectionRoute />,
    children: [
      {
        path : "/dasbohard",
        element: <Dasbohard/>,

      },
    ],
  },
]);


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);
