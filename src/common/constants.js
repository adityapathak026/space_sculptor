import { FaUserCircle, PiShoppingBagOpenFill } from "../utils/icons";

export const DEVICE_NAME = "Web";

export const LETTER_PATTERN = /^[A-Za-z\s]+$/;

// Registeration URL
export const BASE_URL_ONE = "http://192.168.99.110:4040/user/"

// Dashboard Data
export const BASE_URL_TWO = "http://192.168.99.110:1998/user/"

// Login Logout Forgot Password
export const BASE_URL_THREE = "http://192.168.99.110:5051/user/"

// API URL's
export const SIGNUP_URL = "signup";
export const OTP_VALIDATION = "validateotp";
export const ADD_USER_DETAILS = "addUserDetails";
export const LOGIN_URL = "login";
export const FORGOT_PASSWORD = "forgotPassword";
export const FORGOT_PASSWORD_OTP_VALIDATION = "validateOTPForForgotPassword";
export const CHANGE_PASSWORD = "changePassword";
export const LOGOUT_URL = "logout";
export const RESEND_OTP = "resendotp";
export const DASHBOARD_DATA = "dashboard";

// Routing Url's
export const LOGIN_PAGE = "/";
export const REGISTER_PAGE = "/signup";
export const FORGOT_PASSWORD_PAGE = "/forgotPassword";
export const DASHBOARD = "/dashboard";
export const CAT_PAGE = "/category";

// Time Intervals
export const MAX_RECONNECT_TIME = 120;
export const MIN_RECONNECT_TIME = 30;

// Signup Greet Data
export const registerData = {
  title: "Welcome Back!",
  desc: "Please login to start shopping with us.",
  btnText: "LOGIN",
  path: LOGIN_PAGE,
};

// Login Greet Data
export const loginData = {
  title: "HELLO!",
  desc: "Enter your details and start the shopping with us.",
  btnText: "SIGN UP",
  path: REGISTER_PAGE,
};

// Products
export const FEATURED_PRODUCTS = "Featured Products";
export const CATEGORIES = "Categories";
export const RECENTLY_VIEWED_PRODUCTS = "Recently Viewed Products";
export const SIMILAR_PRODUCTS = "Similar Products";
export const CART = "Cart";

// User Menu List
export const userMenu = [
  {
    icon: <FaUserCircle />,
    text: "My Account",
  },
  {
    icon: <PiShoppingBagOpenFill />,
    text: "Orders",
  },
];

export const filterBtns = [
  { name: "Popularity", filter: "P" },
  { name: "Price - Low to High", filter: "LH" },
  { name: "Price - High to Low", filter: "HL" },
  { name: "Newest First", filter: "NF" },
];

export const TODAY = new Date();

export const PING_DATA = { MT: "ping" };
