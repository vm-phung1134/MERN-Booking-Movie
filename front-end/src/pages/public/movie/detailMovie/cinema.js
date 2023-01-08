function Cinema() {
  return (
    <>
      <div className="text-black">
        <h5 className="bg-[#E50914] px-4 py-2 w-[30%]">React Flix Tân Bình</h5>
        <div className="border-2 h-[150px] items-center border-gray-500 px-5 grid grid-cols-4">
          <p>2D - Phụ đề</p>
          <div className="col-span-3">
            <button className="p-3 mx-2 border-2 border-gray-500">20:15</button>
            <button className="p-3 mx-2 border-2 border-gray-500">20:15</button>
            <button className="p-3 mx-2 border-2 border-gray-500">20:15</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cinema;
