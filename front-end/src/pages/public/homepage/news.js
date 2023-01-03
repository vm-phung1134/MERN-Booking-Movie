function News() {
  return (
    <>
      <div className="grid grid-cols-3 gap-x-2 text-white">
        <img
          className="w-[220px] h-[150px]"
          src="https://cdn.galaxycine.vn/media/2022/11/11/black-panther-wakanda-forever-bao-den-tim-duoc-nguoi-ke-vi-xung-dang-2_1668181423298.jpg"
          alt=""
        ></img>
        <div className="col-span-2">
          <p>
            Review - Black Panther Wakanda Forever: Báo Đen Tìm Được Người Kế Vị
            Xứng Đáng
          </p>
          <button className="text-[#E50914] py-2">
            3.4K <i className="fas fa-heart"></i>
          </button>
          <p className="text-zinc-400">
            Mất đi ngôi sao quan trọng nhất, Marvel gặp nhiều khó khăn khi thực
            hiện Black Panther 2
          </p>
        </div>
      </div>
    </>
  );
}

export default News;
