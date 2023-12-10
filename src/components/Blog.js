import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import blog from "../images/blog.png";

const Blog = () => {
  const params = useParams();

  useEffect(() => {}, []);

  return (
    <div className="blog container">
     <div className="blog_content">
     <div className="left_side">
        <img src={blog} alt="Blog" />
      </div>
      <div className="right_side">
        <h2>
          Lorem ipsum do lor sit sectkoh etur adipiscing elit. Sed nedvc nu nc
          vel nulla facilisihjvhhbhs dfggvghblandit. Ve stibulumv jhdbvjsdbjvhdv
          jdbfhb uhdcv uuhhvxv hhhb h uhuhhn Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed quis libero id odio eleifend tempus.
          Nulla facilisi. Phasellus consectetur neque id augue rhoncus
          tincidunt. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed quis libero id odio eleifend tempus. Nulla
          facilisi. Phasellus consectetur neque id augue rhoncus tincidunt.
          Suspendisse potenti.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed quis libero id odio eleifend tempus. Nulla facilisi.
          Phasellus consectetur neque id augue rhoncus tincidunt. Suspendisse
          potenti.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          quis libero id odio
        </h2>
      </div>
     </div>

      <div className="blog_btns">
        <span>Back</span>
        <span>Next</span>
      </div>
    </div>
  );
};

export default Blog;
