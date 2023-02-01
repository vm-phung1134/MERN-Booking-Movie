import Logo from "./mylogo.png";
import LoginForm from "./loginForm";
import RegisterForm from "./RegisterForm";
import { useSelector} from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect,} from "react";

export default function Login() {
  const {isChanged } = useSelector((state) => state.newUser);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    if (isChanged === true) {  
      toast.success(
        "Đã cập nhật mật khẩu thành công - Vui lòng đăng nhập lại !",
        {
          position: toast.POSITION.BOTTOM_LEFT,
          className: "text-black",
        }
      );
    }
    
  }, [isChanged]);

  return (
    <>
      <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/5e48e7b6-350d-48d9-96d6-de8ca173c89f/e39414f0-9714-4480-8e82-119dc943cfc1/VN-vi-20221219-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] bg-cover w-full h-screen relative">
        <div className="bg-black/[0.65] h-screen">
          <div className="flex justify-between p-6 bg-transparent">
            <img src={Logo} alt="Logo" className="w-[200px]" />
            <div>
              <button
                className="
                        py-1 px-3
                        text-white border-2
                        border-gray-50
                        bg-transparent 
                        text-white
                        rounded
                        "
              >
                <i className="fas fa-globe"></i>&ensp; Tiếng Việt
              </button>
            </div>
          </div>
          {/* -----------HEADER LOGIN PAGE-------------- */}
          <div className="left-[50%] text-center text-white translate-x-[-50%] absolute top-[25%]">
            <h2 className="text-[40px] font-bold">
              TUYỂN CHỌN TỪ NHỮNG PHIM CHIẾU RẠP ĐẶC SẮC NHẤT
            </h2>
            <p className="text-[18px] mt-5 px-5">
              Bạn đã có tài khoản để đặt vé chưa. Nhanh chóng đăng ký thành viên
              để nhận nhiều ưu đãi
            </p>
            <div className="mt-5">
              <a href="#login">
                <button
                  className="
                text-white mr-3 py-3 px-6
                  text-[17px]
                bg-[#E50914] rounded-sm
                  group
                "
                >
                  <i className="fa-brands fa-react"></i>&ensp; Bắt đầu
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*-----------------FORM ĐĂNG NHẬP---------------- */}
      <div className="grid grid-cols-2 border-t border-zinc-400 gap-x-4 p-4 text-white bg-black h-full">
        <div className="relative">
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className="absolute translate-x-[-40%] top-[30%] left-[20%]"
          >
            <h1 className="text-[35px] font-medium">
              ƯU ĐÃI DÀNH CHO THÀNH VIÊN HỆ THỐNG
            </h1>
            <p className="text-[20px] mt-4">
              Trở thành viên của hệ thống để nhận nhiều ưu đãi. Tích lũy R-start
              để có cơ hội nhận nhiều phần quà hấp dẫn.
            </p>
            <button
              className="
              text-white mt-4 py-3 px-6 
              bg-[#E50914] rounded-sm
              text-[17px]
              "
            >
              Xem thêm &ensp;
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <LoginForm />
      </div>
      {/*-----------------FORM ĐĂNG KÝ---------------- */}
      <div className="grid grid-cols-2 gap-x-4 p-4  text-white bg-black h-full">
        <RegisterForm />
        <div className="relative">
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className="absolute translate-x-[40%] top-[15%] right-[20%]"
          >
            <h1 className="text-[35px] font-medium">
              ĐĂNG KÝ TRỰC TUYẾN TRÊN NHIỀU NÊN TẢNG
            </h1>
            <p className="text-[20px] mt-4">
              Hệ thống luôn hỗ trợ đăng ký thành viên trên nhiều nên tảng khác
              nhau
            </p>
            <img
              className="w-[400px]"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ab36101/nmhp/vn.jpg"
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
