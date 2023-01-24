function SpinnerLoading() {
  return (
    <>
      
        <div class="relative items-center block w-full h-screen bg-black ">
          <div
            role="status"
            class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
          >
            <div class="w-16 h-16 border-t-4 border-b-4 border-white rounded-full animate-spin"></div>
          </div>
        </div>
    </>
  );
}

export default SpinnerLoading;
