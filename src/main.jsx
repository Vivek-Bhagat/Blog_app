import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AddPost from "./pages/AddPost";
import Signup from "./pages/Signup";
import EditPost from "./pages/EditPost";
import Post from "./pages/Post";
import AllPosts from "./pages/AllPosts";
import About from "./pages/About.jsx";

import AuthLayout from "./components/AuthLayout.jsx";
import Login from "./pages/Login.jsx";
// import { AuthLayout, Login } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        // element: (
        //   <AuthLayout authentication={false}>
        //     <Login />
        //   </AuthLayout>
        // ),
        element: <Login />,
      },
      {
        path: "/signup",
        // element: (
        //   <AuthLayout authentication={false}>
        //     <Signup />
        //   </AuthLayout>
        // ),
        element: <Signup />,
      },
      {
        path: "/all-posts",
        // element: (
        //   <AuthLayout authentication>
        //     {" "}
        //     {/* <AllPosts /> */}
        //     <AllPosts />
        //   </AuthLayout>
        // ),
        element: <AllPosts />,
      },
      {
        path: "/add-post",
        // element: (
        //   <AuthLayout authentication>
        //     {" "}
        //     <AddPost />
        //   </AuthLayout>
        // ),
        element: <AddPost />,
      },
      {
        path: "/edit-post/:slug",
        // element: (
        //   <AuthLayout authentication>
        //     {" "}
        //     <EditPost />
        //   </AuthLayout>
        // ),
        element: <EditPost />,
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
