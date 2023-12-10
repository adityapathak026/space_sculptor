import React from "react";
import { blogsData } from "../constants";
import { NavLink } from "react-router-dom";

const Blogs = () => {

  return (
    <div className="blogs container">
      <div className="blogs_section">
        {blogsData.map((blog) => (
          <div key={blog.id} className="blog_card">
            <img src={blog.img} alt="Blog" />
            <div>
              <h1>Heading</h1>
            <h2>{blog.text}</h2>
            <NavLink to={`/blog/${1}`}>More</NavLink>
            </div>
          </div>
        ))} 
      </div>
    </div>
  );
};

export default Blogs;
