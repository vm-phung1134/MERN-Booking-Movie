import React, { useEffect, useState } from "react";
import { getAllMovie } from "../../../redux/actions/movieActions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@material-tailwind/react";
import HeaderPublic from "../components/headerPublic";
import SpinnerLoading from "../components/spinnerLoading";
import ChangePassForm from "./changePassForm";
import { getOneUser } from "../../../redux/actions/authActions";
import InfoForm from "./infoForm";

function Account() {
  const dispatch = useDispatch();
  const id = localStorage.getItem("userId");
  const movies = useSelector((state) => state.movies.movies);
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const [loadingPage, setLoadingPage] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoadingPage(true);
    let timeOut = setTimeout(async () => {
      await dispatch(getOneUser(id));
      dispatch(getAllMovie());
      setLoadingPage(false);
    }, 1300);
    return () => {
      clearTimeout(timeOut);
    };
  }, [dispatch, id]);

  return (
    <>
      <div className="bg-black">
        <HeaderPublic />
        {loadingPage === true ? (
          <SpinnerLoading />
        ) : (
          <div className="lg:px-16 px-5 py-20 text-white max-h-full w-full">
            <Breadcrumbs className="bg-transparen p-0">
              <Link to="/home" className="text-gray-400">
                Trang chủ
              </Link>
              <Link to="/account" className="text-gray-200">
                Thành viên
              </Link>
              <Link className="text-gray-200">
                Thông tin tài khoản
              </Link>
            </Breadcrumbs>
            <div className="mb-10">
              <button
                disabled
                className="text-white text-sm lg:text-[15px] pr-6 py-5 my-[17px] border-b-2 border-[#E50914]"
              >
                THÔNG TIN THÀNH VIÊN
              </button>
              <div className="grid lg:grid-cols-3  lg:gap-x-10 sm:grid-cols-1">
                <div className="lg:col-span-2 ">
                  <InfoForm userInfo={userInfo} />
                </div>
                <ChangePassForm userInfo={userInfo} />
              </div>
            </div>
            <button
              disabled
              className="text-white text-sm lg:text-[15px] pr-6 py-[17px] border-b-2 border-[#E50914]"
            >
              PHIM ĐANG CHIẾU
            </button>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-2 gap-2 lg:gap-5 mt-10">
              {movies.map((movie, index) => (
                <div key={movie._id}>
                  {index < 4 && (
                    <div className="">
                      <div className="relative">
                        <img
                          className="w-[370px] h-[350px] md:h-[400px] lg:h-[450px] bg-cover"
                          src={movie.poster}
                          alt=""
                        ></img>
                        <Link to={`/movie-now/${movie._id}`}>
                          <div className="absolute opacity-0 hover:opacity-100 transition duration-400 ease-in-out top-0 right-0 left-0 bottom-0 w-full h-full overflow-hidden bg-fixed bg-black/50">
                            <button
                              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-200
                          border text-sm border-white py-[13px] px-[25px] hover:bg-[#c40404] hover:border-none"
                            >
                              MUA VÉ
                            </button>
                          </div>
                        </Link>
                      </div>
                      <div className="text-sm lg:text-[15px] mt-3">
                        <p className="text-gray-300 uppercase">
                          {movie.namevn}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div>
              <div className="flex justify-center mt-5">
                <button className="py-1 text-[14px] px-2 text-white bg-[#ce0000]">
                  <Link to="/movie">
                    <div className="buttons">
                      <button className="btn">
                        <span></span>
                        <p
                          data-start="good luck!"
                          data-text="Let's go!"
                          data-title="Xem thêm"
                        ></p>
                      </button>
                    </div>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Account;
