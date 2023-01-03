function Events() {
  return (
    <>
      <div className="relative">
        <img
          className="w-[290px] h-[438px]"
          src="https://cdn.galaxycine.vn/media/2022/12/16/300_1671174185632.jpg"
          alt=""
        ></img>
        <a href="/">
          <div className="absolute opacity-0 hover:opacity-100 transition duration-400 ease-in-out top-0 right-0 left-0 bottom-0 w-full h-full overflow-hidden bg-fixed bg-black/70">
            <div className="text-white text-center p-5 absolute top-[20%]">
              <p className="font-medium py-3 text-[17px]">
                QUÀ LUNG LINH - ĐÓN GIÁNG SINH
              </p>
              <p>
                Mỗi hóa đơn combo bắp nước bất kỳ sẽ được tặng ngẫu nhiên 01 bộ
                lì xì lung linh hoặc 01 lịch để bàn React Flix.
              </p>
            </div>
            <button
              className="absolute bottom-[5%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white
                                     border border-white py-[10px] px-[20px] hover:bg-[#E50914] hover:border-none
                                    "
            >
              CHI TIẾT
            </button>
          </div>
        </a>
      </div>
    </>
  );
}

export default Events;
