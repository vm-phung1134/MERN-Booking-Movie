import HeaderPublic from "../components/headerPublic";
import React, { useEffect, useState } from "react";
import { Select, Option } from "@material-tailwind/react";

import { getAllCinema } from "../../../redux/actions/cinemaActions";
import { getAllMovie } from "../../../redux/actions/movieActions";
import { useSelector, useDispatch } from "react-redux";
import Session from "./session";
import { getAllShowTime } from "../../../redux/actions/showTimeActions";

function Booking() {
  const dispatch = useDispatch();
  const cinemas = useSelector((state) => state.cinema.cinemas);
  const movies = useSelector((state) => state.movies.movies);
  const showtimes = useSelector((state) => state.showtimes.showtimes);
  useEffect(() => {
    dispatch(getAllMovie());
    dispatch(getAllCinema());
    dispatch(getAllShowTime());
  }, [dispatch]);

  const [valueCinema, setValueCinema] = useState("");
  const [valueMovie, setValueMovie] = useState("");
  const handleChangeCinema = (value) => {
    setValueCinema(value);
    console.log(value);
  };
  const handleChangeMovie = (value) => {
    setValueMovie(value);
    console.log(value);
  };
  return (
    <>
      <HeaderPublic />
      <div className="px-16 py-20 max-h-full bg-black">
        <button className="text-white text-[15px] pr-6 py-[17px] border-b-2 border-[#E50914]">
          CHỌN RẠP & PHIM
        </button>
        <div className="grid lg:grid-cols-2 lg:gap-x-5 lg:my-10 sm:grid-cols-1">
          <div>
            <Select
              className="text-white"
              label="CHỌN RẠP CHIẾU"
              onChange={handleChangeCinema}
              animate={{
                mount: { y: 0 },
                unmount: { y: 30 },
              }}
            >
              {cinemas.map((cinema) => (
                <Option
                  className="text-black border-b border-gray-500 py-5 focus:text-white focus:bg-blue-gray-600"
                  key={cinema._id}
                  value={cinema._id}
                >
                  {cinema.name}
                </Option>
              ))}
            </Select>
          </div>
          <div>
            <Select
              className="text-white"
              label="CHỌN PHIM"
              animate={{
                mount: { y: 0 },
                unmount: { y: 30 },
              }}
              onChange={handleChangeMovie}
            >
              {movies.map((movie) =>
                valueCinema !== "" ? (
                  <Option
                    className="text-black border-b border-gray-500 py-5 focus:text-white focus:bg-blue-gray-600 uppercase"
                    key={movie._id}
                    value={movie._id}
                  >
                    {movie.name}
                  </Option>
                ) : (
                  <Option
                    className="text-black focus:text-white focus:bg-blue-gray-600"
                    key={movie._id}
                    hidden
                  >
                    Vui lòng chọn rạp chiếu !
                  </Option>
                )
              )}
            </Select>
          </div>
        </div>
        <div>
          {valueCinema !== "" && valueMovie !== "" ? (
            <button className="text-white text-[15px] pr-6 py-[17px] border-b-2 border-[#E50914]">
              CHỌN SUẤT CHIẾU
            </button>
          ) : (
            <button hidden></button>
          )}
        </div>

        <div className="grid grid-cols-2 gap-5 mt-5">
          {showtimes.map((showtime) =>
            valueMovie !== "" &&
            valueCinema !== "" &&
            valueMovie === showtime.movieId &&
            valueCinema === showtime.cinemaId ? (
              <Session key={showtime._id} showtime={showtime} />
            ) : (
              <div key={showtime._id} className="text-black" hidden>
                <h5 className="bg-[#E50914] px-4 py-2 w-[30%]">
                  {showtime.startDate}
                </h5>
                <div className="border-2 h-[150px] items-center border-gray-500 px-5 grid grid-cols-4">
                  <p>2D - Phụ đề</p>
                  <div className="col-span-3">
                    {showtime.startTime.map((time) => (
                      <button
                        key={time}
                        className="p-3 mx-2 border-2 border-gray-500"
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Booking;
