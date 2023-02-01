import HeaderPublic from "../components/headerPublic";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Select, Option } from "@material-tailwind/react";
import {
  getAllCinema,
  getOneCinema,
} from "../../../redux/actions/cinemaActions";
import { getAllMovie, getOneMovie } from "../../../redux/actions/movieActions";
import { useSelector, useDispatch } from "react-redux";
import Session from "./session";
import {
  getAllShowTime,
  getOneShowTime,
} from "../../../redux/actions/showTimeActions";
import { getAllTicket } from "../../../redux/actions/ticketActions";
import TicketTable from "./ticketTable";
import FoodTable from "./foodTable";
import { getAllFood } from "../../../redux/actions/foodActions";
import { createReservation } from "../../../redux/actions/reservationActions";

function Booking() {
  const dispatch = useDispatch();
  const cinemas = useSelector((state) => state.cinemas.cinemas);
  const movies = useSelector((state) => state.movies.movies);
  const showtimes = useSelector((state) => state.showtimes.showtimes);
  const tickets = useSelector((state) => state.tickets.tickets);
  const foods = useSelector((state) => state.foods.foods);
  const movie = useSelector((state) => state.movie.movie);
  const cinema = useSelector((state) => state.cinema.cinema);
  const showtime = useSelector((state) => state.showtime.showtime);
  const [valueCinema, setValueCinema] = useState("");
  const [valueMovie, setValueMovie] = useState("");
  const [valueShowTime, setValueShowTime] = useState({ id: "", timeVl: "" });
  let [vlPriceTicket, setvlPriceTicket] = useState(0);
  let [vlPriceFood, setvlPriceFood] = useState(0);
  const handleChangeCinema = useCallback((value) => {
    setValueMovie("");
    setValueCinema(value);
  },[setValueCinema]);

  const handleChangeMovie = useCallback((value) => {
    setValueShowTime({ id: "", timeVl: "" });
    setValueMovie(value);
  },[setValueMovie]);

  useMemo(() => {
    dispatch(getOneCinema(valueCinema));
    dispatch(getOneMovie(valueMovie));
    dispatch(getOneShowTime(valueShowTime.id));
  },[dispatch, valueCinema, valueMovie, valueShowTime.id])
  
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAllMovie());
    dispatch(getAllCinema());
    dispatch(getAllShowTime());
    dispatch(getAllTicket());
    dispatch(getAllFood());
  }, [dispatch]);
  return (
    <>
      <div className=" bg-cover bg-center bg-[url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/020e1179-46f8-43ff-9c44-4280cde630ec/ddbudat-bb20107b-044e-432d-92a1-fbc5951f40ec.jpg/v1/fill/w_1280,h_776,q_75,strp/avatar_2__2022__wallpaper_hd_4k_by_sahibdm_ddbudat-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Nzc2IiwicGF0aCI6IlwvZlwvMDIwZTExNzktNDZmOC00M2ZmLTljNDQtNDI4MGNkZTYzMGVjXC9kZGJ1ZGF0LWJiMjAxMDdiLTA0NGUtNDMyZC05MmExLWZiYzU5NTFmNDBlYy5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.3ObOA_bTMLdoT1zr019ZY0bQrLSsTQy6YYZKdyGLGg0')]">
        <div className="bg-black/90">
          <HeaderPublic />
          <div className="px-16 py-20 min-h-screen max-h-full bg-transparent">
            <div className="flex justify-between">
              <button disabled className="text-white text-[15px] pr-6 py-[17px] border-b-2 border-[#E50914]">
                CHỌN RẠP & PHIM
              </button>
            </div>

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
                          <p className="px-2 ml-5 text-white rounded bg-red-600/70">
                            {movie.limitAge} +
                          </p>
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
                <button disabled className="text-white text-[15px] pr-6 py-[17px] border-b-2 border-[#E50914]">
                  CHỌN SUẤT CHIẾU
                </button>
              ) : (
                <button hidden></button>
              )}
            </div>

            <div className="grid grid-cols-2 gap-5 mt-5 mb-10">
              {showtimes.map(
                (showtime) =>
                  valueMovie !== "" &&
                  valueCinema !== "" &&
                  valueMovie === showtime.movieId &&
                  valueCinema === showtime.cinemaId && (
                    <Session
                      key={showtime._id}
                      showtime={showtime}
                      setValueShowTime={setValueShowTime}
                    />
                  )
              )}
            </div>
            <div>
              {valueMovie !== "" &&
                valueCinema !== "" &&
                valueShowTime.id !== "" && (
                  <>
                    <button disabled className="text-white text-[15px] mb-5 pr-6 py-[17px] border-b-2 border-[#E50914]">
                      CHỌN LOẠI VÉ & GÓI TIỆN ÍCH
                    </button>
                    <div className="grid grid-cols-3 gap-x-5">
                      <div className="col-span-2">
                        <TicketTable
                          setvlPriceTicket={setvlPriceTicket}
                          tickets={tickets}
                        />
                        <FoodTable
                          setvlPriceFood={setvlPriceFood}
                          foods={foods}
                        />
                      </div>
                      <div className="bg-blue-gray-900 text-white h-[70%] text-sm mx-6 px-6 py-10">
                        <div className=" flex justify-center">
                          <img
                            className="w-[300px] h-[200px] mb-2"
                            src={movie.image}
                            alt=""
                          ></img>
                        </div>
                        <div>
                          <p className="font-medium uppercase py-1">
                            {movie.name}
                          </p>
                          <p className="font-medium uppercase py-1 text-green-700">
                            {movie.namevn}
                          </p>
                          <p className="py-1">
                            <span className="text-gray-500">Rạp chiếu: </span>{" "}
                            {cinema.name}
                          </p>
                          <p className="py-1">
                            <span className="text-gray-500">Suất chiếu: </span>{" "}
                            {valueShowTime.timeVl} | Ngày {showtime.startDate}
                          </p>
                          <p className="py-1">
                            <span className="text-gray-500">Loại vé: </span>{" "}
                            {tickets.map(
                              (ticket) =>
                                ticket.quantity > 0 && (
                                  <span key={ticket._id}>
                                    {ticket.typeTicket} &#40;x{ticket.quantity}
                                    &#41;&ensp;
                                  </span>
                                )
                            )}
                          </p>
                          <p className="py-1">
                            <span className="text-gray-500">Combo: </span>{" "}
                            {foods.map(
                              (food) =>
                                food.quantity > 0 && (
                                  <span key={food._id}>
                                    {food.typeFood} &#40;x{food.quantity}&#41;
                                    &ensp;
                                  </span>
                                )
                            )}
                          </p>
                          <p className="py-1 text-red-500 text-[17px]">
                            <span className="text-gray-500">Tổng: </span>
                            {vlPriceFood + vlPriceTicket} RF
                          </p>
                        </div>
                        <div className="justify-center flex">
                          <button
                            onClick={() =>
                              dispatch(
                                createReservation({
                                  nameMovie: movie.name,
                                  nameCinema: cinema.name,
                                  tickets: tickets,
                                  foods: foods,
                                  startTime: valueShowTime.timeVl,
                                  startDate: showtime.startDate,
                                  total: vlPriceFood + vlPriceTicket,
                                })
                              )
                            }
                            className="px-8 my-5 py-2 text-white bg-[#E51409]"
                          >
                            TIẾP TỤC
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Booking;
