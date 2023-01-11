import HeaderPublic from "../components/headerPublic";
import React, { useEffect, useState } from "react";
import { Select, Option } from "@material-tailwind/react";

import { getAllCinema } from "../../../redux/actions/cinemaActions";
import { getAllMovie } from "../../../redux/actions/movieActions";
import { useSelector, useDispatch } from "react-redux";
import Session from "./session";
import { getAllShowTime } from "../../../redux/actions/showTimeActions";
import {getAllTicket} from "../../../redux/actions/ticketActions"
import TicketTable from "./ticketTable";

function Booking() {
  const dispatch = useDispatch();
  const cinemas = useSelector((state) => state.cinema.cinemas);
  const movies = useSelector((state) => state.movies.movies);
  const showtimes = useSelector((state) => state.showtimes.showtimes);
  const tickets = useSelector((state) => state.tickets.tickets);
  useEffect(() => {
    dispatch(getAllMovie());
    dispatch(getAllCinema());
    dispatch(getAllShowTime());
    dispatch(getAllTicket());
  }, [dispatch]);

  const [valueCinema, setValueCinema] = useState("");
  const [valueMovie, setValueMovie] = useState("");
  const [valueShowTime, setValueShowTime] = useState("");
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
      <div className=" bg-cover bg-center bg-[url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/020e1179-46f8-43ff-9c44-4280cde630ec/ddbudat-bb20107b-044e-432d-92a1-fbc5951f40ec.jpg/v1/fill/w_1280,h_776,q_75,strp/avatar_2__2022__wallpaper_hd_4k_by_sahibdm_ddbudat-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Nzc2IiwicGF0aCI6IlwvZlwvMDIwZTExNzktNDZmOC00M2ZmLTljNDQtNDI4MGNkZTYzMGVjXC9kZGJ1ZGF0LWJiMjAxMDdiLTA0NGUtNDMyZC05MmExLWZiYzU5NTFmNDBlYy5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.3ObOA_bTMLdoT1zr019ZY0bQrLSsTQy6YYZKdyGLGg0')]">
        <div className="bg-black/80">
          <HeaderPublic />
          <div className="px-16 py-20 max-h-max bg-transparent">
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
                        className="text-black border-b border-gray-500 py-5 focus:text-white focus:bg-blue-gray-600"
                        key={movie._id}
                        value={movie._id}
                      >
                        <div className="flex justify-between">
                          <div>
                            {movie.name} - {movie.namevn}
                          </div>
                          <p className="px-2 ml-5 text-white rounded bg-red-600/70">{movie.limitAge} +</p>
                        </div>
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

            <div className="grid grid-cols-2 gap-5 mt-5 mb-10">
              {showtimes.map((showtime) =>
                valueMovie !== "" &&
                valueCinema !== "" &&
                valueMovie === showtime.movieId &&
                valueCinema === showtime.cinemaId ? (
                  <Session
                    key={showtime._id}
                    showtime={showtime}
                    setValueShowTime={setValueShowTime}
                    valueShowTime={valueShowTime}
                  />
                ) : (
                  <div key={showtime._id} className="text-black" hidden>
                    <h5 className="bg-[#E50914] px-4 py-2 w-[30%]">NULL</h5>
                    <div className="border-2 h-[150px] items-center border-gray-500 px-5 grid grid-cols-4">
                      <p>Không có suất chiếu</p>
                    </div>
                  </div>
                )
              )}
            </div>
            <div>
              <button className="text-white text-[15px] mb-5 pr-6 py-[17px] border-b-2 border-[#E50914]">
                CHỌN LOẠI VÉ & GÓI TIỆN ÍCH
              </button>
              <div className="grid grid-cols-3">
                <div className="col-span-2">
                  <TicketTable tickets={tickets}/>
                </div>
                <div>

                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Booking;
