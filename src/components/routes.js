import { createBrowserRouter } from "react-router-dom";
import Header from "./Header";
import App from "../App";
import Footer from "./Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import Service from "./Service";
import Blogs from "../pages/Blogs";
import NotFound from "./NotFound";
import Blog from "./Blog";
import Services from "../pages/Services";
import Categories from "../pages/Categories";
import ProductsContainer from "../containers/ProductsContainer";
import ProductDetails from "./ProductDetails";
import Login from "./Login";
import SignUp from "./SignUp";
import ResetPassword from "./ResetPassword";

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
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
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/categories/:cat",
        element: <ProductsContainer />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blog/:id",
        element: <Blog />,
      },
      {
        path: "/productDetails/:name",
        element: <ProductDetails />,
      },
      {
        path: "/reset_password",
        element: <ResetPassword />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
