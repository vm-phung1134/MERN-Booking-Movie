import { useEffect, useState, memo, useCallback } from "react";
import { Link } from "react-router-dom";
import QRCode from "react-qr-code"
import { Breadcrumbs } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllReservation,
  deleteTicket,
} from "../../../redux/actions/reservationActions";
import HeaderPublic from "../components/headerPublic";
import { getAllMovie } from "../../../redux/actions/movieActions";
import SpinnerLoading from "../components/spinnerLoading";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function UserTickets() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const reservations = useSelector((state) => state.reservations.reservations);
  const [size, setSize] = useState(null);
  const [sizeQR, setSizeQR] = useState(null);
  const userId = localStorage.getItem("userId")
  const [loadingPage, setLoadingPage] = useState(false);
  const [id, setId] = useState("");
  const [idQR, setIdQR] = useState("");
  const [newReservations, setNewReservation] = useState([]); //CREATE ONE EMPTY ARRAY TO SAVE CURRENT RESERVATION
  const handleOpen = useCallback((value, id) => {
    setSize(value);
    setId(id);
  },[]);
  const handleOpenQR = useCallback((value, id) => {
    setSizeQR(value);
    setIdQR(id)
  },[]);
  const handleDeleteTicket = async (id) => {
    await dispatch(deleteTicket(id));
    setSize(null); //DISMISS MODAL
    setNewReservation(reservations.filter((item) => item._id !== id)); //AFTER DELETE SAVE INTO NEW RESERVATION
    toast.success("Hủy vé thành công !", {
      position: toast.POSITION.BOTTOM_LEFT,
      className: "text-black",
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoadingPage(true);
    let timeOut = setTimeout(async () => {
      await dispatch(getAllReservation());
      await dispatch(getAllMovie());
      setLoadingPage(false);
    }, 1300);
    return () => {
      clearTimeout(timeOut);
    };
  }, [dispatch]);

  useEffect(() => {
    setNewReservation(reservations); //INIT NEW ARRAY IS CURRENT ARRAY
  }, [reservations]);
  return (
    <>
      <div className="bg-[#11161d]">
        <HeaderPublic />
        <ToastContainer toastStyle={{ color: "black" }} />
        {loadingPage === true ? (
          <SpinnerLoading />
        ) : (
          <div
            className="px-16 py-20 text-white min-h-screen max-h-full w-full"
          >
            <Breadcrumbs className="bg-transparen p-0">
                <Link to="/home" className="text-gray-400">
                  Trang chủ
                </Link>
                <Link to="/account" className="text-gray-200">
                  Vé đã đặt
                </Link>
              </Breadcrumbs>
            <button
              disabled
              className="text-white text-[15px] pr-6 py-[10px] border-b-[3px] border-[#E50914]"
            >
              VÉ CỦA BẠN
            </button>
            <div  data-aos="fade-left"
            data-aos-duration="1000">
              {newReservations.reverse().map(
                (
                  reservation // GET LASTEST ITEM IN ARRAY
                ) => (
                  <div key={reservation._id}>
                    {reservation.author._id === userId && (
                      <div
                        style={{
                          backgroundImage: `url("${reservation.imgMovie}")`,
                        }}
                        className="bg-center bg-cover rounded-lg"
                      >
                        <div className="bg-gradient-to-r from-black/60 to-black/20 text-sm w-full text-white mt-5 px-5 py-3">
                          <div className="bg-transparent">
                            <div className="grid grid-cols-2 grid-cols-1 px-2">
                              <div className="flex items-center justify-start">
                                <h1 className="mr-5 ml-3 pt-2 text-[15px] text-gray-500">
                                  Phim:{" "}
                                  <span className="text-white">
                                    {reservation.nameMovie}
                                  </span>
                                </h1>
                                <h2 className="ml-5 pt-2 text-[15px] text-gray-500">
                                  Rạp chiếu:{" "}
                                  <span className="text-white">
                                    {reservation.nameCinema}
                                  </span>
                                </h2>
                              </div>
                              <div className="flex items-center justify-end">
                                <h1 className="mx-2">Mã vé QR</h1>
                                <button onClick={() =>
                                    handleOpenQR("xs", reservation._id)
                                  } className="border font-bold p-2 text-[12px] rounded-full">
                                  Xem
                                </button>
                                &ensp;
                                <h1 className="mx-2">Hủy vé đặt</h1>
                                <button
                                  onClick={() =>
                                    handleOpen("xs", reservation._id)
                                  }
                                  className=" bg-[#E50914] font-bold p-2 text-[12px] rounded-full"
                                >
                                  Hủy
                                </button>
                              </div>
                            </div>
                            <div className="bg-black/70 rounded-lg">
                              <div className="bg-transparent grid grid-cols-8 gap-x-1 mt-5 grid-cols-1 px-5 py-2">
                                <div>
                                  <h3 className="text-[15px] text-gray-500">
                                    Ngày chiếu
                                  </h3>
                                  <p>{reservation.startDate}</p>
                                </div>
                                <div>
                                  <h3 className="text-[15px] text-gray-500">
                                    Giờ chiếu
                                  </h3>
                                  <p>{reservation.startTime}</p>
                                </div>
                                <div>
                                  <h3 className="text-[15px] text-gray-500">
                                    Loại vé
                                  </h3>
                                  <p>
                                    {reservation.tickets.map(
                                      (ticket) =>
                                        ticket.quantity > 0 && (
                                          <span key={ticket._id}>
                                            {ticket.typeTicket} &#40;x
                                            {ticket.quantity}
                                            &#41;&ensp;
                                          </span>
                                        )
                                    )}
                                  </p>
                                </div>
                                <div>
                                  <h3 className="text-[15px] text-gray-500">
                                    Vị trí ghế
                                  </h3>
                                  <p>{reservation.seats}</p>
                                </div>
                                <div className="col-span-2">
                                  <h3 className="text-[15px] text-gray-500">
                                    Combo
                                  </h3>
                                  <p>
                                    {reservation.foods.map(
                                      (food) =>
                                        food.quantity > 0 && (
                                          <span key={food._id}>
                                            {food.typeFood} &#40;x
                                            {food.quantity}
                                            &#41; &ensp;
                                          </span>
                                        )
                                    )}
                                  </p>
                                </div>
                                <div className="col-span-2 text-end">
                                  <h3 className="text-[15px] text-gray-500">
                                    Tống thanh toán
                                  </h3>
                                  <p className="font-bold text-[17px]">
                                    {reservation.total * 1000} VNĐ
                                  </p>
                                  <p className="text-sm text-green-800">
                                    Đã thanh toán
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
            <Dialog
              open={size === "xs"}
              size={size || "xs"}
              handler={handleOpen}
              style={{ borderRadius: "0px" }}
            >
              <DialogHeader>
                <h2 className="text-[17px] text-[#E50914] font-bold">
                  HỦY ĐẶT VÉ
                </h2>
              </DialogHeader>
              <DialogBody divider>
                <div className="mb-5">
                  <p className="my-2 text-[#000000]">
                    Bạn có chắc là muốn hủy vé đã đặt không?
                  </p>
                  <Select color="gray" label="Chọn lý do hủy">
                    <Option value="1">Không còn nhu cầu</Option>
                    <Option value="2">Muốn đặt lại sản phẩm khác</Option>
                    <Option value="3">Mua trùng vé phim</Option>
                  </Select>
                </div>
                <Input color="gray" variant="standard" label="khác" />
              </DialogBody>
              <DialogFooter>
                <button
                  className="px-6 my-5 py-2 text-sm text-white bg-[#E51409]"
                  onClick={() => handleDeleteTicket(id)}
                >
                  Tiếp tục
                </button>
              </DialogFooter>
            </Dialog>
            <Dialog
              open={sizeQR === "xs"}
              size={sizeQR || "xs"}
              handler={handleOpenQR}
              style={{ borderRadius: "0px" }}
            >
              <DialogHeader>
                <h2 className="text-[17px] text-[#E50914] font-bold">
                  Mã QR Code
                </h2>
                
              </DialogHeader>
              <DialogBody divider>
                <div className="mb-5">
                  <p className="mt-2">Mã vé: <span className="text-[#000000]">{idQR}</span></p>
                  <p className="my-2 text-[#e97a3a] text-sm">
                    Bạn có thể dùng điện thoại lưu lại để đưa nhân viên tại quầy nhé!
                  </p>
                  
                  <QRCode
                  id='qrcode'
                  value={idQR}
                  style={{height:"100px", width:"100%"}}
                  level={'H'}
                  includeMargin={true}
                  >                
                  </QRCode>
                </div>
              </DialogBody>
              <DialogFooter>
                <button
                  className="px-6 my-5 py-2 text-sm text-white bg-[#E51409]"
                  onClick={() => handleOpenQR(null,null)}
                >
                  Tiếp tục
                </button>
              </DialogFooter>
            </Dialog>
            <button
                  disabled
                  className="text-white text-[15px] mt-[3%] pr-6 py-[10px] border-b-[3px] border-[#E50914]"
                >
                  PHIM ĐANG CHIẾU
                </button>
                <div className="grid grid-cols-4 gap-x-10 pt-10">
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
                                <Link to="/booking">MUA VÉ</Link>
                              </button>
                            </div>
                          </Link>
                        </div>
                        <div className="text-[15px] mt-3">
                          <p className="text-gray-300 uppercase">
                            {movie.namevn}
                          </p>
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

export default memo(UserTickets);
