import { Link } from "react-router-dom";

function Blogs({blog}) {
  return (
    <>
      <div className="grid grid-cols-3 gap-x-2 text-white">
        <Link to={`/blog-detail/${blog._id}`}>
          <img
            className="h-auto"
            src={blog.topImage}
            alt=""
          ></img>
        </Link>
        
        <div className="col-span-2">
        <Link className="hover:text-red-600 ease-linear duration-300" to={`/blog-detail/${blog._id}`}>
          <p className="capitalize">
            {blog.name}
          </p>
        </Link>
          <p className="text-sm">
           <button className="text-[#E50914] py-2">
            3.4K <i className="fas fa-heart"></i>
          </button> 
          &emsp;
          <button className="text-[#292ccf] py-2">
            809 <i className="fas fa-share"></i>
          </button> 
          </p>
          <p className="text-gray-400 text-[12px]">
            {blog.topContent}
          </p>
        </div>
      </div>
    </>
  );
}

export default Blogs;
