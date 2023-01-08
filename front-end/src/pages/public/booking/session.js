function Session({ showtime }) {
  return (
    <>
      <div className="text-white">
        <h5 className="bg-[#E50914] px-4 py-2 w-[30%]">
          Ngày {showtime.startDate}
        </h5>
        <div className="border-2 h-[100px] items-center border-gray-600 px-5 grid grid-cols-4">
          <p>2D - Phụ đề</p>
          <div className="col-span-3">
            {showtime.startTime.map((time) => (
              <button
                key={time}
                className="px-2 py-1 mx-2 border-2 border-gray-600"
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Session;
