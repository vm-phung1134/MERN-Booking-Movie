import {memo} from 'react'

function MovieSoon() {
  return (
    <>
      <div className="grid grid-cols-3 gap-5 justify-items-center mt-10">
        <div className="">
          <div className="relative">
            <img
              className="w-[350px] h-[250px] bg-cover"
              src="https://cdn.galaxycine.vn/media/2022/12/14/gangnamthatthu-4_1671011569719.jpg"
              alt=""
            ></img>
            <a href="/#">
              <div className="absolute opacity-0 hover:opacity-100 transition duration-400 ease-in-out top-0 right-0 left-0 bottom-0 w-full h-full overflow-hidden bg-fixed bg-black/50">
                <button
                  className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white
                                     border border-white py-[15px] px-[30px] hover:bg-[#E50914] hover:border-none
                                    "
                >
                  MUA VÉ
                </button>
              </div>
            </a>
          </div>

          <div className="text-[15px]">
            <p className="text-white">AVATAR THE WAY OF WATER</p>
            <p className="text-zinc-300">AVATAR DÒNG CHẢY CỦA NƯỚC</p>
          </div>
        </div>
        <div className="">
          <img
            className="w-[350px] h-[250px] bg-cover"
            src="https://cdn.galaxycine.vn/media/2022/12/14/gangnamthatthu-4_1671011569719.jpg"
            alt=""
          ></img>
          <div className="text-[15px]">
            <p className="text-white">AVATAR THE WAY OF WATER</p>
            <p className="text-zinc-300">AVATAR DÒNG CHẢY CỦA NƯỚC</p>
          </div>
        </div>
        <div className="">
          <img
            className="w-[350px] h-[250px] bg-cover"
            src="https://cdn.galaxycine.vn/media/2022/12/14/gangnamthatthu-4_1671011569719.jpg"
            alt=""
          ></img>
          <div className="text-[15px]">
            <p className="text-white">AVATAR THE WAY OF WATER</p>
            <p className="text-zinc-300">AVATAR DÒNG CHẢY CỦA NƯỚC</p>
          </div>
        </div>
        <div className="">
          <img
            className="w-[350px] h-[250px] bg-cover"
            src="https://cdn.galaxycine.vn/media/2022/12/14/gangnamthatthu-4_1671011569719.jpg"
            alt=""
          ></img>
          <div className="text-[15px]">
            <p className="text-white">AVATAR THE WAY OF WATER</p>
            <p className="text-zinc-300">AVATAR DÒNG CHẢY CỦA NƯỚC</p>
          </div>
        </div>
        <div className="">
          <img
            className="w-[350px] h-[250px] bg-cover"
            src="https://cdn.galaxycine.vn/media/2022/12/14/gangnamthatthu-4_1671011569719.jpg"
            alt=""
          ></img>
          <div className="text-[15px]">
            <p className="text-white">AVATAR THE WAY OF WATER</p>
            <p className="text-zinc-300">AVATAR DÒNG CHẢY CỦA NƯỚC</p>
          </div>
        </div>
        <div className="">
          <img
            className="w-[350px] h-[250px] bg-cover"
            src="https://cdn.galaxycine.vn/media/2022/12/14/gangnamthatthu-4_1671011569719.jpg"
            alt=""
          ></img>
          <div className="text-[15px]">
            <p className="text-white">AVATAR THE WAY OF WATER</p>
            <p className="text-zinc-300">AVATAR DÒNG CHẢY CỦA NƯỚC</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(MovieSoon);
