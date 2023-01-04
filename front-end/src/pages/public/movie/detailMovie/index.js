//import logic
import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom'
import { getOneMovie } from '../../../../redux/actions/movieActions'
//import components
import HeaderPublic from '../../components/headerPublic'
import MovieNowList from '../homeMovie/movieNowList'
import Cinema from './cinema'


const DetailMovie = () => {
    const dispatch = useDispatch()
    const movieId = useParams()
    const {movie} = useSelector((state) => state.movie)
    useEffect(() => {
        dispatch(getOneMovie(movieId.id))
    }, [dispatch, movieId])
    return (  
    <>
    <HeaderPublic/>
        <div className="bg-black max-h-full px-10 pt-10">
           <div className="grid grid-cols-4">
                <div className="mt-5">
                    <img src={movie.poster} className="w-[300px]" alt=''></img>
                </div>
                <div className="col-span-3 px-5 text-white">
                    <button className="mb-3 py-[10px] border-b-2 border-[#E50914]">
                        THÔNG TIN CHI TIẾT PHIM
                    </button>
                    <h1 className="text-[25px] font-medium uppercase">
                        {movie.name}
                    </h1>
                    <h2 className="text-[20px] text-zinc-400 font-medium uppercase">
                        {movie.namevn}
                    </h2>
                    <div className="text-[17px]">
                        <p>Năm sản xuất: {movie.year}</p>
                        <p>Đạo diễn: {movie.director}</p>
                        <p>Quốc gia: {movie.country}</p>
                        <p>Thời lượng: {movie.duration} phút</p>
                        <p>Đạo diễn: {movie.director}</p>
                        <p>Thể loại: {movie.type}</p>
                        <p className="text-[#091dce]">Ngày khởi chiếu: {movie.released}</p>
                    </div>
                    <button className="px-8 my-5 py-2 text-white bg-[#E51409]">
                        ĐẶT VÉ
                    </button>
                </div>
           </div>
            <div>
                <div className="pt-10">
                    <button className="mb-5 py-[10px] text-white border-b-2 border-[#E50914]">
                        NỘI DUNG PHIM
                    </button>
                    <p className="text-white text-justify">
                        &emsp;{movie.disription}
                    </p>
                </div>
                <div className="pt-10">
                    <button className="mb-5 py-[10px] text-white border-b-2 border-[#E50914]">
                        LỊCH CHIẾU
                    </button>
                    <div className="grid grid-cols-2 gap-5">
                        <Cinema/> <Cinema/>
                    </div>
                </div>
                <div className="py-10">
                    <button className="mb-5 py-[10px] text-white border-b-2 border-[#E50914]">
                        PHIM ĐANG CHIẾU
                    </button>
                    <div>
                        <MovieNowList/>
                    </div>
                </div>
           </div>
           
        </div>    
    </>
    );
}

export default DetailMovie;