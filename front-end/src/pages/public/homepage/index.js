import React, {useCallback, useState} from 'react'
import MovieNow from "./movieNow"
import MovieSoon from './movieSoon'
function HomePage() {
    const [stateMovie, setStateMovie] = useState(true)
    const handleClickMovie = useCallback(() => {
        setStateMovie(!stateMovie)
    },[stateMovie])

    return ( 
    <>
        {/* header phim hay của tháng */}
        {/* <p className=" w-[120px] h-10 bg-[url('https://www.galaxycine.vn/website/images/ic_hotnews.png')]"></p> */}
        <div className="relative w-full h-screen bg-[url('https://i0.wp.com/www.irishfilmcritic.com/wp-content/uploads/2022/08/Top-Gun-Maverick.jpg')]">
            <div className="bg-gradient-to-r from-black/100 h-screen w-full">
                <div data-aos="fade-right" className="absolute text-white translate-x-[-50%] top-[20%] left-20 w-[50%]">
                    <h2 className="text-[20px]">TOP PHIM ĐIỆN ẢNH DOANH THU CAO NHẤT PHÒNG VÉ</h2>
                    <h3 className="text-[30px] font-bold my-2">TOPGUN - PHI CÔNG SIÊU ĐẲNG MAVERICK</h3>
                    <button className="bg-[#E50914] rounded-full p-3 mb-2">8.7/10 <i className="fas fa-star"></i></button>
                    <p>
                        After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope 
                        as a courageous test pilot and dodging the advancement in rank that would ground him.
                    </p>
                    <button className="py-2 px-3 bg-[#E50914] mt-5">
                        ĐẶT VÉ NGAY 
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
                        <button className="mx-3 py-[20px] border-b-2 border-[#E50914]" onClick={handleClickMovie}
                            style={{
                                borderBottom: stateMovie === true ? '2px solid #E50914' : 'none'
                            }}
                        >
                            PHIM ĐANG CHIẾU
                        </button>
                        <button className="mx-3 py-[20px]" onClick={handleClickMovie}
                            style={{
                                borderBottom: stateMovie === false ? '2px solid #E50914' : 'none'
                            }}
                        >
                            PHIM SẮP CHIẾU
                        </button>
                    </div>
                    <div className="py-[5px] text-white">
                        <p className="w-[120px] brightness-200 h-10 bg-[url('https://www.galaxycine.vn/website/images/ic_hotnews.png')]"></p>
                        <p className="text-zinc-400">
                            Avatar: The Way Of Water
                        </p>
                    </div>  
                </div>
                {/* RENDER PHIM ĐANG CHIẾU OR PHIM SẮP CHIẾU */}
                {
                    stateMovie===true ? <MovieNow/> : <MovieSoon/>
                }
                <div className="p-10">
                    {/* SƯ KIỆN - TIN TỨC */}
                </div>
            </div>
        </div>
    </> 
    );
}

export default HomePage;