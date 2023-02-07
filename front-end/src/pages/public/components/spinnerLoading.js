function SpinnerLoading() {
  return (
    <>
      <div className="relative items-center block w-full h-screen bg-black ">
        <div
          role="status"
          className="absolute -translate-x-1/2 -translate-y-1/2 top-[45%] left-[51%]"
        >
          <div className="">
            <div className="w-16 ml-6 h-16 border-t-4 border-b-4 border-white rounded-full animate-spin"></div>
            <h1 className="text-[white] text-[27px] pr-5 w-full font-bold">
              React Flix
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpinnerLoading;
