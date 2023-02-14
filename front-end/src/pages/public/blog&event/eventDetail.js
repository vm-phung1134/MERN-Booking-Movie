import HeaderPublic from "../components/headerPublic";
import { useParams } from "react-router-dom";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Events from "./events";
import { useSelector, useDispatch } from "react-redux";
import { getOneEvent, getAllEvent } from "../../../redux/actions/eventActions";
import { useEffect } from "react";

function EventDetail() {
  const dispatch = useDispatch();
  const eventId = useParams();
  const { event } = useSelector((state) => state.event);
  const events = useSelector((state) => state.events.events);
  useEffect(() => {
    dispatch(getOneEvent(eventId.id));
    dispatch(getAllEvent());
  }, [eventId.id, dispatch]);
  return (
    <>
      <div className="bg-black max-h-full">
        <HeaderPublic />
        <div className="px-16 py-20 text-white w-full">
          <div>
            <Breadcrumbs className="bg-transparen p-0 mb-3">
              <Link to="/home" className="text-gray-400">
                Trang chủ
              </Link>
              <Link to="/blog&event" className="text-gray-400">
                Góc điện ảnh & Sự kiện
              </Link>
              <Link className="text-white">Sự kiện</Link>
            </Breadcrumbs>
            <h1 className="text-[20px] font-medium uppercase">{event.name}</h1>
            <div className="leading-7">
              <button className="bg-blue-500 my-5 mr-1 py-1 px-3 text-sm">
                <i className="fas fa-thumbs-up"></i> Thích 504
              </button>
              <button className="bg-[#d4491f] ml-1 my-5 py-1 px-3 text-sm">
                ĐÁNH GIÁ
              </button>
              <p className="mb-5">Thời gian: {event.date}</p>
              <img className="mb-5" src={event.mainImage} width="400px" alt=""></img>
              <p className="text-justify mb-5 font-medium">Thể lệ: <br></br><span className="text-gray-300 font-thin">{event.mainContent}</span></p>
              <p className="text-justify font-medium">Điều kiện: <br></br><span className="text-gray-300 font-thin">{event.mainContent2}</span></p>

            </div>
          </div>
          <div className="mt-10 mb-3">
            <button
              disabled
              className="text-white text-[15px] pr-6 py-[15px] mb-5  border-b-[3px] border-[#E50914]"
            >
              KHUYẾN MÃI KHÁC
            </button>
            <div className="grid grid-cols-4 gap-5">
            {events.map((event) => (
              <Events key={event._id} event={event} />
            ))}
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventDetail;
