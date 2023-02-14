import { Link } from "react-router-dom";

function Events({event}) {
  return (
    <>
      <div className="relative">
        <img
          className="w-[290px] h-[438px]"
          src={event.topImage}
          alt=""
        ></img>
        <Link to={`/event-detail/${event._id}`}>
          <div className="absolute ease-in-out duration-500 opacity-0 hover:opacity-100 top-0 right-0 left-0 bottom-0 w-full h-full overflow-hidden bg-fixed bg-black/80">
            <div className="text-white text-center p-5 absolute top-[15%]">
              <p className="font-medium py-3 uppercase text-[18px]">
                {event.name}
              </p>
              <p className="text-sm">
                {event.topContent}
              </p>
            </div>
            <Link to={`/event-detail/${event._id}`}>
             <button
              className="absolute bottom-[5%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white
                                     border border-white text-sm py-[13px] px-[25px] hover:bg-[#E50914] hover:border-none
                                    "
            >
              CHI TIẾT
            </button>
            </Link>
           
          </div>
        </Link>
      </div>
    </>
  );
}

export default Events;
