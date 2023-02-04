import HeaderPublic from "../components/headerPublic";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { getAllMovie } from "../../../redux/actions/movieActions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function CheckoutSuccess() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  useEffect(() => {
    dispatch(getAllMovie());
    toast.success("Đặt vé thành công !", {
      position: toast.POSITION.BOTTOM_LEFT,
      className: "text-black",
    });
  }, [dispatch]);
  return (
    <>
      <div className=" bg-cover bg-center bg-[url('https://www.pixel4k.com/wp-content/uploads/2019/05/black-panther-movie-4k_1558219995.jpg')] max-h">
        <div className="h-full bg-gradient-to-t from-black/100 to-black/60">
          <HeaderPublic />
          <ToastContainer toastStyle={{ color: "black" }} />
          <div
            className="bg-transparent"
          >
            <div data-aos="zoom-in"
            data-aos-duration="1000" className="text-white flex justify-center pt-[5%]">
              <div className="text-center">
                <h1 className="text-[30px] font-bold uppercase">
                  Chúc mừng - Bạn đã đặt vé thành công!
                </h1>
                <p>
                  Đây là mã QR của bạn - Hãy dùng nó để check in tại rạp phim
                  trước khi vào nhé
                </p>
              </div>
            </div>
            <div data-aos="zoom-in"
            data-aos-duration="1000" className="flex justify-center text-white mt-5">
              <div className="text-center  m-5">
                <h2>Xem lại những vé mà bạn đã đặt</h2>
                <button className="px-5 my-3 py-3 text-white bg-gradient-to-r from-[#E50914] to-[#b8a608]">
                  <Link to="/my-tickets"> <i className="fas fa-wallet"></i> Vé Của Bạn</Link>
                </button>
              </div>
            </div>
            <button
              disabled
              className="text-white text-[15px] mx-10 mt-[3%] pr-6 py-[10px] border-b-2 border-[#E50914]"
            >
              PHIM ĐANG CHIẾU
            </button>
            <div className="grid grid-cols-4 gap-x-10 p-10">
              {movies.map((movie) => (
                <div key={movie._id}>
                  <div className="">
                    <div className="relative">
                      <img
                        className="w-[370px] bg-cover"
                        src={movie.image}
                        alt=""
                      ></img>
                      <Link to={`/movies/${movie._id}`}>
                        <div className="absolute opacity-0 hover:opacity-100 transition duration-400 ease-in-out top-0 right-0 left-0 bottom-0 w-full h-full overflow-hidden bg-fixed bg-black/50">
                          <button
                            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-200
                          border text-sm border-white py-[13px] px-[25px] hover:bg-[#E50914] hover:border-none"
                          >
                            <Link to="/booking">MUA VÉ</Link>
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
        </div>
      </div>
    </>
  );
}

export default CheckoutSuccess;
