import { createBrowserRouter } from "react-router-dom";
import Header from "./Header";
import App from "../App";
import Footer from "./Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import Service from "./Service";
import Products from "../pages/Products";
import Blogs from "../pages/Blogs";
import NotFound from "./NotFound";
import Blog from "./Blog";
import Services from "../pages/Services";

export const routes = createBrowserRouter([
  {
    element: (
      <>
        <Header />
        <App />
        {/* <Footer /> */}
      </>
    ),
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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blog/:id",
        element: <Blog/>,
      },
    ],
  },
]);
