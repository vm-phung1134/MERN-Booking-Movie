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
      <div className="px-6 py-20 max-h-full">
        <div className="grid grid-cols-2 gap-x-5 my-10">
          <div>
            <Select label="Chọn rạp chiếu" onChange={handleChangeCinema}>
              {cinemas.map((cinema) => (
                <Option key={cinema._id} value={cinema._id}>
                  {cinema.name}
                </Option>
              ))}
            </Select>
          </div>
          <div>
            <Select label="Chọn phim" onChange={handleChangeMovie}>
              {movies.map((movie) =>
                valueCinema !== "" && valueCinema === movie.cinemaId ? (
                  <Option key={movie._id} value={movie._id}>
                    {movie.name}
                  </Option>
                ) : (
                  <Option key={movie._id} hidden>
                    {movie.name}
                  </Option>
                )
              )}
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {showtimes.map((showtime) =>
            valueMovie !== "" &&
            valueCinema !== "" &&
            valueMovie === showtime.movieId ? (
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
