function SpinnerLoading() {
  return (
    <>
      
        <div className="relative items-center block w-full h-screen bg-black ">
          <div
            role="status"
            className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
          >
            <div className="w-16 h-16 border-t-4 border-b-4 border-white rounded-full animate-spin"></div>
          </div>
        </div>
    </>
  );
}

export default SpinnerLoading;
