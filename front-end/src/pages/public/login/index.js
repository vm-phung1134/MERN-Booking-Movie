/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from "./mylogo.png"
export default function Login() {
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
                <i className="fa-brands fa-react"></i>&ensp;
                  Bắt đầu
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
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden" id="login">
          <div className="w-[60%] p-4 m-auto bg-transparent rounded-md shadow-xl lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-red-600">
              Đăng Nhập
            </h1>
            <form className="mt-6">
              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-white text-[16px]"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-white bg-transparent border rounded-md focus:border-white focus:ring-white  focus:outline-none focus:ring "
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-white text-[16px]"
                >
                  Mật khẩu
                </label>
                <input
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-white bg-transparent border rounded-md focus:border-white focus:ring-white focus:outline-none focus:ring "
                />
              </div>
              <a href="#" className="text-[13px] text-red-500 hover:underline">
                Quên mật khẩu?
              </a>
              <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">
                  Đăng nhập
                </button>
              </div>
            </form>
            <div className="flex mt-4 gap-x-2">
              <button
                type="button"
                className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
              </button>
              <button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                </svg>
              </button>
              <button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                </svg>
              </button>
            </div>

            <p className="mt-8 text-[15px] font-light text-center text-white">
              {" "}
              Bạn chưa có tài khoản?{" "}
              <a
                href="#"
                className="font-medium text-purple-600 hover:underline"
              >
                Đăng ký
              </a>
            </p>
          </div>
        </div>
      </div>
      {/*-----------------FORM ĐĂNG KÝ---------------- */}
      <div className="grid grid-cols-2 gap-x-4 p-4 border-t border-zinc-400 text-white bg-black h-full">
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
          <div className="w-[60%] p-4 m-auto bg-transparent rounded-md shadow-xl lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-purple-600">
              Đăng Ký Thành Viên
            </h1>
            <form className="mt-6">
              <div className="mb-2">
                <label
                  htmlFor="text"
                  className="block text-sm font-semibold text-white text-[16px]"
                >
                  Họ tên
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-white bg-transparent border rounded-md focus:border-white focus:ring-white  focus:outline-none focus:ring "
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-white text-[16px]"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-white bg-transparent border rounded-md focus:border-white focus:ring-white  focus:outline-none focus:ring "
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-white text-[16px]"
                >
                  Mật khẩu
                </label>
                <input
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-white bg-transparent border rounded-md focus:border-white focus:ring-white focus:outline-none focus:ring "
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-white text-[16px]"
                >
                  Nhập lại mật khẩu
                </label>
                <input
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-white bg-transparent border rounded-md focus:border-white focus:ring-white focus:outline-none focus:ring "
                />
              </div>
              <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                  Đăng ký
                </button>
              </div>
            </form>
            <div className="flex mt-4 gap-x-2">
              <button
                type="button"
                className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
              </button>
              <button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                </svg>
              </button>
              <button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <div
            data-aos="fade-down"
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
