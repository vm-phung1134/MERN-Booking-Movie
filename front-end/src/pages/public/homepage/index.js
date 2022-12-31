import React, { useCallback, useState } from "react"
import HeaderPublic from '../components/headerPublic'
import MovieNow from "./movieNow"
import MovieSoon from "./movieSoon"
function HomePage() {
  const [stateMovie, setStateMovie] = useState(true);
  const handleClickMovie = useCallback(() => {
    setStateMovie(!stateMovie);
  }, [stateMovie]);

  return (
    <>
    <HeaderPublic/>
      <div className="relative w-full h-screen bg-[url('https://i0.wp.com/www.irishfilmcritic.com/wp-content/uploads/2022/08/Top-Gun-Maverick.jpg')]">
        <div className="bg-gradient-to-r from-black/100 h-screen w-full">
          <div
            data-aos="fade-right"
            className="absolute text-white translate-x-[-50%] top-[20%] left-20 w-[50%]"
          >
            <h2 className="text-[20px]">
              TOP PHIM ĐIỆN ẢNH DOANH THU CAO NHẤT PHÒNG VÉ
            </h2>
            <h3 className="text-[30px] font-bold my-2">
              TOPGUN - PHI CÔNG SIÊU ĐẲNG MAVERICK
            </h3>
            <button className="bg-[#E50914] rounded-full p-3 mb-2">
              8.7/10 <i className="fas fa-star"></i>
            </button>
            <p>
              After more than thirty years of service as one of the Navy's top
              aviators, Pete Mitchell is where he belongs, pushing the envelope
              as a courageous test pilot and dodging the advancement in rank
              that would ground him.
            </p>
            <button className="py-2 px-3 bg-[#E50914] mt-5">
              ĐẶT VÉ NGAY &ensp;
              <i className="fas fa-chevron-right text-[12px]"></i>
            </button>
          </div>
        </div>
      </div>
      {/* content */}
      <div className="mx-auto px-[50px] bg-black">
        <div>
          <div className="flex justify-between">
            <div className="text-white text-[17px]">
              <button
                className="mx-3 py-[20px] border-b-2 border-[#E50914]"
                onClick={handleClickMovie}
                style={{
                  borderBottom:
                    stateMovie === true ? "2px solid #E50914" : "none",
                }}
              >
                PHIM ĐANG CHIẾU
              </button>
              <button
                className="mx-3 py-[20px]"
                onClick={handleClickMovie}
                style={{
                  borderBottom:
                    stateMovie === false ? "2px solid #E50914" : "none",
                }}
              >
                PHIM SẮP CHIẾU
              </button>
            </div>
            <div className="py-[5px] text-white">
              <p className="w-[120px] brightness-200 h-10 bg-[url('https://www.galaxycine.vn/website/images/ic_hotnews.png')]"></p>
              <p className="text-zinc-400">Avatar: The Way Of Water</p>
            </div>
          </div>
          {/* RENDER PHIM ĐANG CHIẾU OR PHIM SẮP CHIẾU */}
          {stateMovie === true ? <MovieNow /> : <MovieSoon />}
          <div data-aos="fade-down" data-aos-duration="2000" className="pt-20">
            <button className="text-white text-[17px] border-b-2 border-[#E50914]">
              BÌNH LUẬN PHIM
            </button>
            <div className="grid grid-cols-2 py-10 gap-4 px-6">
              {/* bình luận phim */}
              <div className="grid grid-cols-3 gap-x-2 text-white">
                <img
                  className="w-[220px] h-[150px]"
                  src="https://cdn.galaxycine.vn/media/2022/11/11/black-panther-wakanda-forever-bao-den-tim-duoc-nguoi-ke-vi-xung-dang-2_1668181423298.jpg"
                  alt=""
                ></img>
                <div className="col-span-2">
                  <p>
                    Review - Black Panther Wakanda Forever: Báo Đen Tìm Được
                    Người Kế Vị Xứng Đáng
                  </p>
                  <button className="text-[#E50914] py-2">
                    3.4K <i className="fas fa-heart"></i>
                  </button>
                  <p className="text-zinc-400">
                    Mất đi ngôi sao quan trọng nhất, Marvel gặp nhiều khó khăn
                    khi thực hiện Black Panther 2
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-x-2 text-white">
                <img
                  className="w-[220px] h-[150px]"
                  src="https://cdn.galaxycine.vn/media/2022/11/11/black-panther-wakanda-forever-bao-den-tim-duoc-nguoi-ke-vi-xung-dang-2_1668181423298.jpg"
                  alt=""
                ></img>
                <div className="col-span-2">
                  <p>
                    Review - Black Panther Wakanda Forever: Báo Đen Tìm Được
                    Người Kế Vị Xứng Đáng
                  </p>
                  <button className="text-[#E50914] py-2">
                    3.4K <i className="fas fa-heart"></i>
                  </button>
                  <p className="text-zinc-400">
                    Mất đi ngôi sao quan trọng nhất, Marvel gặp nhiều khó khăn
                    khi thực hiện Black Panther 2
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-x-2 text-white">
                <img
                  className="w-[220px] h-[150px]"
                  src="https://cdn.galaxycine.vn/media/2022/11/11/black-panther-wakanda-forever-bao-den-tim-duoc-nguoi-ke-vi-xung-dang-2_1668181423298.jpg"
                  alt=""
                ></img>
                <div className="col-span-2">
                  <p>
                    Review - Black Panther Wakanda Forever: Báo Đen Tìm Được
                    Người Kế Vị Xứng Đáng
                  </p>
                  <button className="text-[#E50914] py-2">
                    3.4K <i className="fas fa-heart"></i>
                  </button>
                  <p className="text-zinc-400">
                    Mất đi ngôi sao quan trọng nhất, Marvel gặp nhiều khó khăn
                    khi thực hiện Black Panther 2
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-x-2 text-white">
                <img
                  className="w-[220px] h-[150px]"
                  src="https://cdn.galaxycine.vn/media/2022/11/11/black-panther-wakanda-forever-bao-den-tim-duoc-nguoi-ke-vi-xung-dang-2_1668181423298.jpg"
                  alt=""
                ></img>
                <div className="col-span-2">
                  <p>
                    Review - Black Panther Wakanda Forever: Báo Đen Tìm Được
                    Người Kế Vị Xứng Đáng
                  </p>
                  <button className="text-[#E50914] py-2">
                    3.4K <i className="fas fa-heart"></i>
                  </button>
                  <p className="text-zinc-400">
                    Mất đi ngôi sao quan trọng nhất, Marvel gặp nhiều khó khăn
                    khi thực hiện Black Panther 2
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* sự kiện */}
          <div className="pt-5">
            <button className="text-white text-[17px] border-b-2 mb-10 border-[#E50914]">
              TIN KHUYẾN MÃI
            </button>
            <div className="grid grid-cols-4 gap-4 pb-10">
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
                        Mỗi hóa đơn combo bắp nước bất kỳ sẽ được tặng ngẫu
                        nhiên 01 bộ lì xì lung linh hoặc 01 lịch để bàn React
                        Flix.
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
              <div>
                <img
                  className="w-[290px] h-[438px]"
                  src="https://cdn.galaxycine.vn/media/2022/12/16/300_1671174185632.jpg"
                  alt=""
                ></img>
              </div>
              <div>
                <img
                  className="w-[290px] h-[438px]"
                  src="https://cdn.galaxycine.vn/media/2022/12/16/300_1671174185632.jpg"
                  alt=""
                ></img>
              </div>
              <div>
                <img
                  className="w-[290px] h-[438px]"
                  src="https://cdn.galaxycine.vn/media/2022/12/16/300_1671174185632.jpg"
                  alt=""
                ></img>
              </div>
              <div>
                <img
                  className="w-[290px] h-[438px]"
                  src="https://cdn.galaxycine.vn/media/2022/12/16/300_1671174185632.jpg"
                  alt=""
                ></img>
              </div>
            </div>
          </div>
          {/* về chúng tôi */}
          <div className="py-5">
            <button className="text-white text-[17px] border-b-2 mb-10 border-[#E50914]">
              REACT FLIX
            </button>
            <p className="text-zinc-300 text-justify">
              &ensp;React Flix là một trong những công ty một mình tao đầu tiên về điện
              ảnh được thành lập từ năm 2003, đã khẳng định thương hiệu là 1
              trong 10 địa điểm vui chơi giải trí được yêu thích nhất. Ngoài hệ
              thống rạp chiếu phim hiện đại, thu hút hàng triệu lượt người đến
              xem, React Flix còn hấp dẫn khán giả bởi không khí thân thiện
              cũng như chất lượng dịch vụ hàng đầu. Đến website galaxycine.vn,
              khách hàng sẽ dễ dàng tham khảo các phim hay nhất, phim mới nhất
              đang chiếu hoặc sắp chiếu luôn được cập nhật thường xuyên. Lịch
              chiếu tại tất cả hệ thống rạp chiếu phim của React Flix cũng
              được cập nhật đầy đủ hàng ngày hàng giờ trên trang chủ.<br></br> 
              &ensp;Từ vũ trụ điện ảnh Marvel, người hâm mộ sẽ có cuộc tái ngộ với Người Nhện
              qua Spider-Man: No Way Home hoặc Doctor Strange 2. Ngoài ra 007:
              No Time To Die, Turning Red, Minions: The Rise Of Gru..., là những
              tác phẩm hứa hẹn sẽ gây bùng nổ phòng vé trong thời gian tới. Giờ
              đây đặt vé tại React Flix càng thêm dễ dàng chỉ với vài thao
              tác vô cùng đơn giản. Để mua vé, hãy vào tab Mua vé. Quý khách có
              thể chọn Mua vé theo phim, theo rạp, hoặc theo ngày. Sau đó, tiến
              hành mua vé theo các bước hướng dẫn. Chỉ trong vài phút, quý khách
              sẽ nhận được tin nhắn và email phản hồi Đặt vé thành công của
              React Flix. Quý khách có thể dùng tin nhắn lấy vé tại quầy vé
              của React Flix hoặc quét mã QR để một bước vào rạp mà không cần
              tốn thêm bất kỳ công đoạn nào nữa.<br></br>&ensp; Nếu bạn đã chọn được phim hay
              để xem, hãy đặt vé cực nhanh bằng box Mua Vé Nhanh ngay từ Trang
              Chủ. Chỉ cần một phút, tin nhắn và email phản hồi của Galaxy
              Cinema sẽ gửi ngay vào điện thoại và hộp mail của bạn. Nếu chưa
              quyết định sẽ xem phim mới nào, hãy tham khảo các bộ phim hay
              trong mục Phim Đang Chiếu cũng như Phim Sắp Chiếu tại rạp chiếu
              phim bằng cách vào mục Bình Luận Phim ở Góc Điện Ảnh để đọc những
              bài bình luận chân thật nhất, tham khảo và cân nhắc. Sau đó, chỉ
              việc đặt vé bằng box Mua Vé Nhanh ngay ở đầu trang để chọn được
              suất chiếu và chỗ ngồi vừa ý nhất. React Flix luôn có những
              chương trình khuyến mãi, ưu đãi, quà tặng vô cùng hấp dẫn như giảm
              giá vé, tặng vé xem phim miễn phí, tặng Combo, tặng quà phim… dành
              cho các khách hàng.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
