import { LuUser2, LuPhone } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import about from "./images/about.png";
import s1 from "./images/s1.png";
import s2 from "./images/s2.png";
import s3 from "./images/s3.png";
import p1 from "./images/p1.png";
import p2 from "./images/p2.png";
import p3 from "./images/p3.png";
import p4 from "./images/p4.png";

export const navLinks = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/portfolio", name: "Portfolio" },
  { path: "/services", name: "Services" },
  // { path: "/products", name: "Products" },
  { path: "/contact", name: "Contact" },
  { path: "/blogs", name: "Blogs" },
  { path: "/categories", name: "Categories" },
];

export const year = new Date().getFullYear();

export const contactForm = [
  {
    type: "text",
    id: "name",
    name: "name",
    placeholder: "Type your name",
    required: true,
    icon: <LuUser2 />,
  },
  {
    type: "email",
    id: "email",
    name: "email",
    placeholder: "Type your email",
    required: true,
    icon: <AiOutlineMail />,
  },
  {
    type: "phone",
    id: "mobile",
    name: "mobile",
    placeholder: "Type your mobile no",
    required: true,
    icon: <LuPhone />,
  },
];

export const blogsData = [
  {
    id: 1,
    img: about,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas, quia possimus nisi ipsam corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas, quia possimus nisi ipsam corrupti?",
  },
  {
    id: 2,
    img: about,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas, quia possimus nisi ipsam corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas, quia possimus nisi ipsam corrupti?",
  },
  {
    id: 3,
    img: about,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas, quia possimus nisi ipsam corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas, quia possimus nisi ipsam corrupti?",
  },
  {
    id: 4,
    img: about,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas, quia possimus nisi ipsam corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas, quia possimus nisi ipsam corrupti?",
  },
  {
    id: 5,
    img: about,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas, quia possimus nisi ipsam corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas, quia possimus nisi ipsam corrupti?",
  },
  {
    id: 6,
    img: about,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas, quia possimus nisi ipsam corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas, quia possimus nisi ipsam corrupti?",
  },
  {
    id: 7,
    img: about,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas, quia possimus nisi ipsam corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas, quia possimus nisi ipsam corrupti?",
  },
];

export const categories = [
  { id: 1, img: about, cat: "Modular Kitchen" },
  { id: 2, img: about, cat: "Interior Turnkey" },
  { id: 3, img: about, cat: "Home Decor" },
  { id: 4, img: about, cat: "Modular Kitchen" },
  { id: 5, img: about, cat: "Modular Kitchen" },
];

export const servicesData = [
  {
    id: 1,
    img: s1,
    text: "Unleash the magic of personal expression in every corner of your home with our enchanting home decor, where every piece tells a story of style, sophistication, and warmth",
  },
  {
    id: 2,
    img: s2,
    text: "Embrace the epitome of comfort and elegance with our furniture collection - where design meets functionality, crafting the perfect blend for your home's distinctive charm",
  },
  {
    id: 3,
    img: s3,
    text: "Experience the future of versatility and organization with our cutting-edge modular solutions – a symphony of innovation that empowers you to customize and optimize your space effortlessly.",
  },
];

export const portData = [
  {
    id: 1,
    img: p1,
  },
  {
    id: 2,
    img: p2,
  },
  {
    id: 3,
    img: p3,
  },
  {
    id: 4,
    img: p4,
  },
];

export const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description of product 1',
    price: 10.99,
    image: s1,
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description of product 2',
    price: 19.99,
    image: p1
  },
  {
    id: 3,
    name: 'Product 1',
    description: 'Description of product 1',
    price: 10.99,
    image: s1,
  },
  {
    id: 4,
    name: 'Product 2',
    description: 'Description of product 2',
    price: 19.99,
    image: p1
  },
  {
    id: 5,
    name: 'Product 1',
    description: 'Description of product 1',
    price: 10.99,
    image: s1,
  },
  {
    id: 6,
    name: 'Product 2',
    description: 'Description of product 2',
    price: 19.99,
    image: p1
  },
  {
    id: 7,
    name: 'Product 1',
    description: 'Description of product 1',
    price: 10.99,
    image: s1,
  },
  {
    id: 8,
    name: 'Product 2',
    description: 'Description of product 2',
    price: 19.99,
    image: p1
  },
  {
    id: 9,
    name: 'Product 1',
    description: 'Description of product 1',
    price: 10.99,
    image: s1,
  },
];

export const prodDetails = {
  prodId: 1,
  prodName: "Aditya Pathak",
  prodPrice: 1231,
  prodDesc: "Self-Timer | Type C and Mini HDMI | 9 Auto Focus Points | 35x Optical Zoom., Effective Pixels: 18 MP APS-C CMOS sensor-which is 25 times larger than a typical Smartphone sensor., Wi-Fi | Full HD | Video Recording at 1080 p on 30fps."
}
