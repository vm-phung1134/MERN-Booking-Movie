import React, { useCallback, useEffect, useState } from "react"
import HeaderPublic from '../components/headerPublic'
import MovieNow from "../movie/homeMovie/movieNowList"
import MovieSoon from "../movie/homeMovie/movieSoonList"
import News from "./news"
import Events from "./events"
function HomePage() {
  const [stateMovie, setStateMovie] = useState(true);
  const handleClickMovie = useCallback(() => {
    setStateMovie(!stateMovie);
  }, [stateMovie]);

  useEffect(() => {
    window.scrollTo(0, 0)
  },[])
  return (
    <>
      <div className="relative w-full h-screen bg-[url('https://i0.wp.com/www.irishfilmcritic.com/wp-content/uploads/2022/08/Top-Gun-Maverick.jpg')]">
        
        <div className="bg-gradient-to-r from-black/100 h-screen w-full">
          <HeaderPublic/>
          <div
            data-aos="fade-right" data-aos-duration="2000"
            className="absolute text-white translate-x-[-50%] top-[30%] left-20 w-[50%]"
          >
            <h2 className="text-[20px]">
              TOP PHIM ĐIỆN ẢNH DOANH THU CAO NHẤT PHÒNG VÉ
            </h2>
            <h3 className="text-[40px] font-bold my-2">
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
              <span></span>
              <span></span>
              <span></span>
              <span></span>
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
          <div className="pt-20">
            <button className="text-white py-[17px] text-[17px] border-b-2 border-[#E50914]">
              BÌNH LUẬN PHIM
            </button>
            <div className="grid grid-cols-2 py-10 gap-4 px-6">
{/* bình luận phim */}
              <News/><News/><News/><News/>
            </div>
          </div>
{/* sự kiện */}
          <div className="pt-5">
            <button className="text-white py-[17px] text-[17px] border-b-2 mb-10 border-[#E50914]">
              TIN KHUYẾN MÃI
            </button>
            <div className="grid grid-cols-4 gap-4 pb-10">
              <Events/><Events/><Events/><Events/>
            </div>
          </div>
{/* về chúng tôi */}
          <div className="py-5">
            <button className="text-white py-[17px]  text-[17px] border-b-2 mb-10 border-[#E50914]">
              REACT FLIX
            </button>
            <p className="text-gray-400 text-justify">
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
