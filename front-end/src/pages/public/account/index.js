import React, {useEffect, useState } from "react";
import { getAllMovie } from "../../../redux/actions/movieActions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import HeaderPublic from "../components/headerPublic";
import SpinnerLoading from "../components/spinnerLoading";
import ChangePassForm from "./changePassForm";
import { getOneUser} from "../../../redux/actions/authActions";
import InfoForm from "./infoForm";

function Account() {
  const dispatch = useDispatch();
  const id = localStorage.getItem("userId");
  const movies = useSelector((state) => state.movies.movies);
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const [loadingPage, setLoadingPage] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0)
    setLoadingPage(true);
    let timeOut = setTimeout(async () => {
      await dispatch(getOneUser(id));
      dispatch(getAllMovie());
      setLoadingPage(false); 
    }, 1300);
    return () => {
      clearTimeout(timeOut)
    }
  }, [dispatch, id]);
  
  return (
    <>
      <div className="bg-black">
        <HeaderPublic />
        {loadingPage === true ? (
          <SpinnerLoading />
        ) : (<div className="px-16 py-20 text-white max-h-full w-full">
          <div className="mb-10">
            <button disabled className="text-white text-[15px] pr-6 py-[17px] border-b-2 border-[#E50914]">
              THÔNG TIN THÀNH VIÊN
            </button>
            <div className="grid lg:grid-cols-3 lg:gap-x-10 sm:grid-cols-1">
              <div className="lg:col-span-2">
                <InfoForm userInfo={userInfo}/>
              </div>
              <ChangePassForm userInfo={userInfo} />
            </div>
          </div>
          <button disabled className="text-white text-[15px] pr-6 py-[17px] border-b-2 border-[#E50914]">
            PHIM ĐANG CHIẾU
          </button>
          <div className="grid grid-cols-4 gap-x-10 mt-10">
            {movies.map((movie) => (
              <div key={movie._id}>
                <div className="">
                  <div className="relative">
                    <img
                      className="w-[370px] bg-cover"
                      src={movie.poster}
                      alt=""
                    ></img>
                    <Link to={`/movies/${movie._id}`}>
                      <div className="absolute opacity-0 hover:opacity-100 transition duration-400 ease-in-out top-0 right-0 left-0 bottom-0 w-full h-full overflow-hidden bg-fixed bg-black/50">
                        <button
                          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-200
                          border text-sm border-white py-[13px] px-[25px] hover:bg-[#E50914] hover:border-none"
                        >
                          MUA VÉ
                        </button>
                      </div>
                    </Link>
                  </div>
                  <div className="text-[15px] mt-3">
                    <p className="text-gray-300 uppercase">{movie.namevn}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        )}
      </div>
    </>
  );
}

export default Account;
