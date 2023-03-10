import HeaderPublic from "../components/headerPublic";
import { Select, Option } from "@material-tailwind/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import SpinnerLoading from "../components/spinnerLoading";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { getAllCinema } from "../../../redux/actions/cinemaActions";
import { getAllShowTime } from "../../../redux/actions/showTimeActions";
import { getAllMovie } from "../../../redux/actions/movieActions";

function Cinema() {
  const dispatch = useDispatch();
  const [loadingPage, setLoadingPage] = useState(false);
  const cinemas = useSelector((state) => state.cinemas.cinemas);
  const movies = useSelector((state) => state.movies.movies);
  const showtimes = useSelector((state) => state.showtimes.showtimes);
  const [vlCinema, setVlCinema] = useState("");
  //const [vlMovie, setMovie] = useState("")
  const handleChangeCinema = (value) => {
    setVlCinema(value);
  };
  // const handleChangeMovie = (value) => {
  //   setMovie(value)
  // };
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoadingPage(true);
    let timeOut = setTimeout(async () => {
      await dispatch(getAllCinema());
      await dispatch(getAllShowTime());
      await dispatch(getAllMovie());
      setLoadingPage(false);
    }, 1300);
    return () => {
      clearTimeout(timeOut);
    };
  }, [dispatch]);
  return (
    <>
      <div className="bg-black min-h-screen max-h-full">
        <div>
          <HeaderPublic />
          {loadingPage === true ? (
            <SpinnerLoading />
          ) : (
            <div className="lg:m-[40px] 2xl:m-[60px] m-[20px] max-h-full">
              <Breadcrumbs className="bg-transparen p-0">
                <Link to="/home" className="text-gray-400">
                  Trang ch???
                </Link>
                <Link to="/cinema" className="text-gray-200">
                  R???p chi???u phim
                </Link>
              </Breadcrumbs>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-10 lg:gap-x-5 ">
                <div>
                  <button
                    disabled
                    className="text-white text-sm lg:text-[16px] pr-6 py-[15px]  border-b-[3px] border-[#E50914]"
                  >
                    H??? TH???NG R???P CHI???U
                  </button>
                  <div className="mt-10">
                    <div className="mb-2">
                      <Select
                        className="text-white"
                        label="CH???N R???P CHI???U"
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
                    {vlCinema !== "" && (
                      <div className="grid grid-cols-1 text-white text-sm gap-y-5">
                        {movies.map((movie) => (
                          <div
                            key={movie._id}
                            className="border-gray-400 border grid grid-cols-2 lg:gap-x-2 xl:gap-x-3"
                          >
                            <div>
                              <img
                                src={movie.image}
                                alt=""
                                className="w-[300px] h-full"
                              />
                            </div>
                            <div className="p-2 leading-6">
                              <h1 className="text-gray-400">
                                T??n phim:
                                <span className="uppercase text-white">
                                  {" "}
                                  {movie.name}
                                </span>
                              </h1>
                              <p className="text-gray-400">
                                <i className="fas fa-clock"></i>
                                <span className="text-white">
                                  {" "}
                                  {movie.duration} ph??t
                                </span>
                              </p>
                              <p>2D - Ph??? ?????</p>
                              <div>
                                {showtimes.map(
                                  (showtime) =>
                                    showtime.movieId === movie._id &&
                                    showtime.cinemaId === vlCinema && (
                                      <div className="flex justify-between items-center">
                                        <p className="">{showtime.startDate} </p>
                                        <div className="flex w-full">
                                          {showtime.startTime.map((time) => (
                                            <button className="px-2 py-1 my-2 mx-2 border-2 border-gray-600">
                                              {time.time}
                                            </button>
                                          ))}
                                        </div>
                                      </div>
                                    )
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <button
                    disabled
                    className="text-white text-sm lg:text-[16px] pr-6 py-[15px] my-3  border-b-[3px] border-[#E50914]"
                  >
                    M???T S??? H??NH ???NH
                  </button>
                  <div>
                    <Carousel>
                      <img
                        src="https://cdn.galaxycine.vn/media/2019/12/27/79838883-139480674153736-6337298685621174272-o_1577418516231.jpg"
                        alt=""
                      ></img>
                      <img
                        src="https://cdn.galaxycine.vn/media/2019/12/27/79844929-139480880820382-5735358774273638400-o_1577418596248.jpg"
                        alt=""
                      ></img>
                      <img
                        src="https://cdn.galaxycine.vn/media/2019/12/27/80077318-139480644153739-5771371117272891392-o_1577418600896.jpg"
                        alt=""
                      ></img>
                    </Carousel>
                  </div>
                </div>
                <div>
                  <div className="">
                    <button
                      disabled
                      className="text-white text-sm lg:text-[16px] pr-6 py-[15px]  border-b-[3px] border-[#E50914]"
                    >
                      GI?? V??
                    </button>
                    <img
                      src="https://cdn.galaxycine.vn/media/2023/1/18/ca-mau-100_1674015086453.jpg"
                      className="brightness-90 mt-10"
                      width="600px"
                      alt=""
                    />
                  </div>
                  <button
                    disabled
                    className="text-white text-sm lg:text-[16px] pr-6 py-[15px] mt-5  border-b-[3px] border-[#E50914]"
                  >
                    TH??NG TIN CHI TI???T
                  </button>
                  <div className="py-5 text-sm">
                    <p className="text-gray-500">
                      ?????a ch???:{" "}
                      <span className="text-white">
                        L???u 2, TTTM Sense City, s??? 9, Tr???n H??ng ?????o, P.5, tp.
                        T????ng lai
                      </span>
                    </p>
                    <p className="text-gray-500">
                      S??? ??i???n tho???i:{" "}
                      <span className="text-white">099999233</span>
                    </p>
                    <p className="text-gray-300 text-justify">
                      Galaxy C?? Mau t???a l???c t???i l???u 2 TTTM Sense City, s??? 9,
                      Tr???n H??ng ?????o ??? r???p chi???u phim ???????c x??y d???ng theo ti??u
                      chu???n qu???c t??? g???m 6 ph??ng chi???u 2D&3D, ??m thanh Dobly 7.1.
                      Thi???t k??? tr??? trung, d???ch v??? th??n thi???n, c???p nh???t li??n t???c
                      nh???ng b??? phim m???i nh???t phim hay nh???t trong n?????c c??ng nh??
                      qu???c t??? v?? m???c gi?? v?? c??ng ???h???t d??????.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="py-10"></div>
      </div>
    </>
  );
}

export default Cinema;
