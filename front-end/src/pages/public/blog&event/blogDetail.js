import HeaderPublic from "../components/headerPublic";
import { useParams } from "react-router-dom";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getOneBlog, getAllBlog } from "../../../redux/actions/blogActions";
import { useEffect } from "react";

function BlogDetail() {
  const dispatch = useDispatch();
  const blogId = useParams();
  const { blog } = useSelector((state) => state.blog);
  const blogs = useSelector((state) => state.blogs.blogs);
  useEffect(() => {
    dispatch(getOneBlog(blogId.id));
    dispatch(getAllBlog());
  }, [blogId.id, dispatch]);
  return (
    <>
      <div
        style={{ backgroundImage: `url(${blog.mainImage})` }}
        className="bg-cover bg-center max-h-full"
      >
        <div className="bg-black/90 h-full w-full">
          <HeaderPublic />
          <div className="md:px-16 px-5 md:py-20 py-16 text-white w-full">
            <div>
              <Breadcrumbs className="bg-transparen p-0 mb-3">
                <Link to="/home" className="text-gray-400">
                  Trang chủ
                </Link>
                <Link to="/blog&event" className="text-gray-400">
                  Góc điện ảnh & Sự kiện
                </Link>
                <Link className="text-white">Blog điện ảnh</Link>
              </Breadcrumbs>
              <h1 className="md:text-[20px] text-[17px] font-medium uppercase">{blog.name}</h1>
              <div className="leading-7">
                <button className="bg-blue-500 my-5 text-[12px] md:text-[15px] mr-1 py-1 px-3 text-sm">
                  <i className="fas fa-thumbs-up"></i> Thích 13
                </button>
                <button className="bg-[#d4491f] text-[12px] md:text-[15px]  ml-1 my-5 py-1 px-3 text-sm">
                  ĐÁNH GIÁ
                </button>
                <p className="text-justify text-sm md:text-[15px] font-thin">{blog.mainContent}</p>
              </div>
            </div>
            <div className="mt-10 mb-3">
              <button
                disabled
                className="text-white text-[15px] pr-6 py-[15px] mb-5  border-b-[3px] border-[#E50914]"
              >
                BÀI VIẾT LIÊN QUAN
              </button>
              {blogs.map((blog) => (
                <Link className="hover:text-red-500" to={`/blog-detail/${blog._id}`}>                 
                  <p className="text-sm my-2">&#10230; {blog.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetail;
