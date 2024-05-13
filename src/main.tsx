import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ListPage from './pages/ListPage.tsx';
import Paitan from './pages/Paitan.tsx';
import Xitan from './pages/Xitan.tsx';
import PaiBao from './pages/1.tsx';
import PaiWei from './pages/2.tsx';
import XiBao from './pages/3.tsx';
import XiWei from './pages/4.tsx';
import Baogao from './pages/Baogao.tsx';
import Weihu from './pages/Weihu.tsx';
import Number from './pages/Number.tsx';
import Connect from './pages/Connect.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Connect />,
  },
  {
    path: '/number',
    element: <Number />,
  },
  {
    path: '/list',
    element: <ListPage />,
  },
  {
    path: '/paitan',
    element: <Paitan />,
  },
  {
    path: '/xitan',
    element: <Xitan />,
  },
  //排痰切到报告页
  {
    path: '/1',
    element: <PaiBao />,
  },
  //排痰切到维护页
  {
    path: '/2',
    element: <PaiWei />,
  },
  //吸痰切到报告页
  {
    path: '/3',
    element: <XiBao />,
  },
  //吸痰切到维护页
  {
    path: '/4',
    element: <XiWei />,
  },
{
    path: '/baogao',
    element: <Baogao />,
},
{
  path: '/weihu',
  element: <Weihu />,
},

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
