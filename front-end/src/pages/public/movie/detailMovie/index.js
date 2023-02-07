//import logic
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllCinema } from "../../../../redux/actions/cinemaActions";
import { getOneMovie } from "../../../../redux/actions/movieActions";
//import components
import HeaderPublic from "../../components/headerPublic";
import SpinnerLoading from "../../components/spinnerLoading";
import MovieNowList from "../homeMovie/movieNowList";
import Cinema from "./cinema";

const DetailMovie = () => {
  const dispatch = useDispatch();
  const movieId = useParams();
  const { movie } = useSelector((state) => state.movie);
  const cinemas = useSelector((state) => state.cinemas.cinemas);

  const [loadingPage, setLoadingPage] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoadingPage(true);
    setTimeout(async () => {
      await dispatch(getOneMovie(movieId.id));
      dispatch(getAllCinema());
      setLoadingPage(false);
    }, 1300);
  }, [dispatch, movieId, setLoadingPage]);
  return (
    <>
      <div className="max-h-full min-h-screen w-full">
        <div className="bg-black">
          <HeaderPublic />
          {loadingPage === true ? (
            <SpinnerLoading />
          ) : (
            <div>
              <div
                style={{
                  backgroundImage: `url("${movie.bg}")`,
                }}
                className="bg-cover"
              >
                <div className="bg-gradient-to-t from-black/100 to-black/40">
                  <div className="grid grid-cols-3 p-10">
                    <div className="mt-5 flex justify-end">
                      <img
                        src={movie.poster}
                        className="w-[340px]"
                        alt=""
                      ></img>
                    </div>
                    <div className="px-5 pt-3 text-white">
                      <button className="mb-3 py-[10px] border-b-[3px] border-[#E50914]">
                        THÔNG TIN CHI TIẾT PHIM
                      </button>
                      <h1 className="text-[40px] font-medium uppercase">
                        {movie.name}
                      </h1>
                      <h2 className="text-[25px] text-green-500 font-medium uppercase">
                        {movie.namevn}
                      </h2>
                      <div className="text-[20px] leading-9">
                        <p>Năm sản xuất: {movie.year}</p>
                        <p>Đạo diễn: {movie.director}</p>
                        <p>Quốc gia: {movie.country}</p>
                        <p>Thời lượng: {movie.duration} phút</p>
                        <p>Đạo diễn: {movie.director}</p>
                        <p>Thể loại: {movie.type}</p>
                        <div>
                          <h1>Diễn viên</h1>
                        </div>
                        <p className="text-[#e75353]">
                          Ngày khởi chiếu: {movie.released}
                        </p>
                      </div>
                    </div>
                    <div 
                    data-aos="zoom-in-left"
                    data-aos-duration="1000"
                    className="flex justify-start items-center ">
                      <div className="relative px-[70px] py-[70px] border-l-[3px] border-r-[3px] border-[#ffffff] shadow-white rounded-full">
                        <button className="absolute top-[2px] left-[2px] right-[2px] bottom-[2px] text-lg rounded-full text-white hover: bg-gradient-to-t hover:to-[#f01404] hover:from-black/80 font-medium bg-transparent">
                          <Link to="/booking">MUA VÉ</Link>
                        </button>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="p-10">
                  <button className="mb-5 py-[10px] text-white border-b-2 border-[#E50914]">
                    NỘI DUNG PHIM
                  </button>
                  <p className="text-white text-justify">
                    &emsp;{movie.discription}
                  </p>
                </div>
                <div className="p-10">
                  <button className="mb-5 py-[10px] text-white border-b-2 border-[#E50914]">
                    LỊCH CHIẾU
                  </button>
                  <div className="grid grid-cols-2 gap-5">
                    {cinemas.map((cinema) => (
                      <Cinema key={cinema._id} cinema={cinema} />
                    ))}
                  </div>
                </div>
                <div className="p-10">
                  <button className="mb-5 py-[10px] text-white border-b-2 border-[#E50914]">
                    PHIM ĐANG CHIẾU
                  </button>
                  <div>
                    <MovieNowList />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DetailMovie;
