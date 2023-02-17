import HeaderPublic from "../components/headerPublic";
import SpinnerLoading from "../components/spinnerLoading";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllMovieSoon } from "../../../redux/actions/movieSoonActions";

function CheckoutSuccess() {
  const dispatch = useDispatch();
  const [loadingPage, setLoadingPage] = useState(false);
  const movieSoons = useSelector((state) => state.movieSoons.movieSoons);
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoadingPage(true);
    let timeOut = setTimeout(async () => {
      await dispatch(getAllMovieSoon());
      toast.success("Đặt vé thành công !", {
        position: toast.POSITION.BOTTOM_LEFT,
        className: "text-black",
      });
      setLoadingPage(false);
    }, 1500);
    return () => {
      clearTimeout(timeOut);
    };
  }, [dispatch]);
  return (
    <>
      <div className=" bg-cover bg-center bg-[url('https://www.pixel4k.com/wp-content/uploads/2019/05/black-panther-movie-4k_1558219995.jpg')] max-h">
        <div className="h-full bg-gradient-to-t from-black/100 to-black/60">
          <HeaderPublic />
          {loadingPage === true ? (
            <SpinnerLoading />
          ) : (
            <>
              <ToastContainer toastStyle={{ color: "black" }} />
              <div className="bg-transparent">
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="text-white flex justify-center pt-[5%]"
                >
                  <div className="text-center">
                    <h1 className="lg:text-[30px] text-[18px] md:text-[20px] font-bold uppercase">
                      Chúc mừng - Bạn đã đặt vé thành công!
                    </h1>
                    <p className="font-thin text-sm lg:text-[15px]">
                      Vào vé của bạn để xem mã QR - Hãy dùng nó để check in tại
                      rạp phim trước khi vào nhé
                    </p>
                  </div>
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="flex justify-center text-white mt-5"
                >
                  <div className="text-center  mb-7">
                    <h2 className="text-sm lg:text-[15px]">
                      Xem lại những vé mà bạn đã đặt
                    </h2>
                    <button className="lg:px-5 text-sm lg:text-[15px] px-3 py-2 my-3 lg:py-3 text-white bg-gradient-to-r from-[#E50914] to-[#b8a608]">
                      <Link to="/user-tickets">
                        {" "}
                        <i className="fas fa-wallet"></i> Vé Của Bạn
                      </Link>
                    </button>
                  </div>
                </div>
                <button
                  disabled
                  className="text-white text-[15px] mx-6 mt-[3%] pr-6 py-[10px] border-b-2 border-[#E50914]"
                >
                  PHIM SẮP CHIẾU
                </button>
                <div className="grid lg:grid-cols-3 grid-cols-1 xl:grid-cols-4 gap-3 lg:gap-x-5 px-6 pt-5 lg:p-6">
                  {movieSoons.map((movie, index) => (
                    <div key={movie._id}>
                      {index < 8 && (
                        <div className="">
                          <div className="relative">
                            <img
                              className="w-[370px] bg-cover"
                              src={movie.image}
                              alt=""
                            ></img>
                            <Link to={`/movie-soon/${movie._id}`}>
                              <div className="absolute opacity-0 hover:opacity-100 transition duration-400 ease-in-out top-0 right-0 left-0 bottom-0 w-full h-full overflow-hidden bg-fixed bg-black/50">
                                <button
                                  className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-200
                          border text-sm border-white lg:py-[13px] py-[8px] px-[17px] lg:px-[25px] hover:bg-[#E50914] hover:border-none"
                                >
                                  <Link to="/booking">MUA VÉ</Link>
                                </button>
                              </div>
                            </Link>
                          </div>
                          <div className="text-[15px] mt-3">
                            <p className="text-gray-300 text-sm lg:text-[15px] uppercase">
                              {movie.namevn}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex justify-center pb-10">
                    <button className="py-3 text-[14px] px-4 text-white bg-[#E50914]">
                      <Link to="/movie">XEM THÊM</Link>
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default CheckoutSuccess;
