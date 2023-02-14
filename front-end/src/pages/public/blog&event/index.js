import HeaderPublic from "../components/headerPublic";
import { getAllBlog } from "../../../redux/actions/blogActions";
import { getAllEvent } from "../../../redux/actions/eventActions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Events from "./events";
import Blogs from "./blogs";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import SpinnerLoading from "../components/spinnerLoading";

function BlogAndEvent() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogs);
  const events = useSelector((state) => state.events.events);
  const [loadingPage, setLoadingPage] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoadingPage(true);
    let timeOut = setTimeout(async () => {
      await dispatch(getAllBlog());
      await dispatch(getAllEvent());
      setLoadingPage(false);
    }, 1300);
    return () => {
      clearTimeout(timeOut);
    };
  }, [dispatch]);
  return (
    <>
      <div className="bg-black max-h-full">
        <HeaderPublic />
        {loadingPage === true ? (
          <SpinnerLoading />
        ) : (
          <div>
            <div className="px-16 py-20 text-white max-h-full w-full">
              <Breadcrumbs className="bg-transparen p-0 mb-3">
                <Link to="/home" className="text-gray-400">
                  Trang chủ
                </Link>
                <Link className="text-gray-200">Góc điện ảnh & Sự kiện</Link>
              </Breadcrumbs>
              <button
                disabled
                className="text-white text-[15px] pr-6 py-[15px] mb-5  border-b-[3px] border-[#E50914]"
              >
                SỰ KIỆN
              </button>
              <div className="grid grid-cols-4 gap-5">
                {events.map((event) => (
                  <Events key={event._id} event={event} />
                ))}
              </div>
              <div className="flex justify-center mt-10">
                <button className="text-white px-4 text-sm py-2 bg-[#E50914]">
                  XEM THÊM
                </button>
              </div>
            </div>
            <div className="px-16 text-white max-h-full w-full">
              <button
                disabled
                className="text-white text-[15px] pr-6 py-[15px] mb-5  border-b-[3px] border-[#E50914]"
              >
                BlOG ĐIỆN ẢNH
              </button>
              <div className="grid grid-cols-2 py-10 gap-4">
                {blogs.map((blog) => (
                  <Blogs key={blog._id} blog={blog} />
                ))}
              </div>
            </div>
            <div className="flex justify-center py-10">
              <button className="text-white px-4 text-sm py-2 bg-[#E50914]">
                XEM THÊM
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default BlogAndEvent;
