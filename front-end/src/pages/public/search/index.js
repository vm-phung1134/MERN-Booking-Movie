import HeaderPublic from "../components/headerPublic";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovie } from "../../../redux/actions/movieActions";
import { Link } from "react-router-dom";

function SearchPage() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const [isActive, setIsActive] = useState("1");
  const [isSearching, setIsSearching] = useState("");
  const [searchCurrentMovie, setSearchCurrentMovie] = useState([]);
  const handleClickActive = (e) => {
    setIsActive(e.target.value);
  };
  const handleSearch = (e) => {
    setIsSearching(e.target.value);
    setSearchCurrentMovie(
      movies.filter((entry) =>
        Object.values(entry).some(
          (val) =>
            typeof val === "string" &&
            val.toLowerCase().includes(isSearching.toLowerCase())
        )
      )
    );
  };
  useEffect(() => {
    dispatch(getAllMovie());
  }, [dispatch]);
  useEffect(() => {
    setSearchCurrentMovie(movies);
  }, [movies]);
  return (
    <>
      <div className="bg-black min-h-screen max-h-full w-full">
        <HeaderPublic />
        <div className="pt-20 pb-10">
          <div className="flex justify-center">
            <button
              style={{ background: isActive === "1" ? "#E50914" : "" }}
              value="1"
              onClick={handleClickActive}
              className="py-2 px-4 text-sm  text-white rounded-md ease-in-out duration-500"
            >
              PHIM ĐANG CHIẾU
            </button>
            <button
              value="2"
              style={{ background: isActive === "2" ? "#E50914" : "" }}
              onClick={handleClickActive}
              className="py-2 px-4 text-sm text-white rounded-md ease-in-out duration-500"
            >
              PHIM SẮP CHIẾU
            </button>
            <button
              value="3"
              style={{ background: isActive === "3" ? "#E50914" : "" }}
              onClick={handleClickActive}
              className="py-2 px-4 text-sm text-white rounded-md ease-in-out duration-500"
            >
              DIỄN VIÊN
            </button>
          </div>
        </div>
        <div className="px-20">
          <input
            type="text"
            onChange={handleSearch}
            placeholder="Tìm kiếm React Flix"
            className=" placeholder:text-gray-600 focus:outline-none focus:border-2 focus:border-green-700 text-white border px-5 border-gray-700 w-full py-4 bg-transparent"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {isActive === "1" && (
            <div className="grid grid-cols-4 py-10 px-20">
              {searchCurrentMovie.map((movie) => (
                <div key={movie._id}>
                  <div className="">
                    <div className="relative">
                      <img
                        className="w-[370px] h-[450px] bg-cover"
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
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchPage;