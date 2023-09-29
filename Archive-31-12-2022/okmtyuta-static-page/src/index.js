import React from 'react';
import ReactDOM from 'react-dom/client';
import "./okmtyuta-react-lib/css/index.css"
import 'katex/dist/katex.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { TopPage } from "./pages/TopPage";
import { ProfilePage } from "./pages/ProfilePage";
import { LinksPage } from "./pages/LinksPage";
import { ArticleListPage } from "./pages/ArticleListPage";
import { Ex2022 } from './pages/創造情報学解説/Ex2022';
import { Resume } from './pages/Resume';

const router = createBrowserRouter([
  {
    path: "/",
    element: <TopPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/resume",
    element: <Resume />
  },
  {
    path: "/links",
    element: <LinksPage />
  },
  {
    path: "/article/list",
    element: <ArticleListPage />
  },
  {
    path: "ex/2022",
    element: <Ex2022 />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
