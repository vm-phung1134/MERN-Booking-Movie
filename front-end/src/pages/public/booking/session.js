import { Radio } from "@material-tailwind/react";
import { useCallback } from "react";

function Session({ showtime, valueShowTime, setValueShowTime, valueTime, setValueTime }) {
  
  const handleShowTime = useCallback((e, time) => {
    setValueShowTime(e.target.value) // Get showtime
    setValueTime(time) 
  },[setValueShowTime, setValueTime])
  return (
    <>
      <div className="text-white">
        <h5 className="bg-[#E50914] px-4 py-2 w-[40%]">
          Ngày Chiếu - {showtime.startDate}
        </h5>
        <div className="border-2 max-h-max items-center border-gray-600 px-5 grid grid-cols-3">
          <p className="uppercase text-sm">PHỤ ĐỀ - {showtime.typeMovie}</p>
          <div className="col-span-2 my-2 text-white" >
            {showtime.startTime.map((time) => (
              <Radio onChange={e => handleShowTime(e, time.time)} value={showtime._id} labelProps={{style: {color: 'white'}}} key={time._id} id={time.time} name="type" 
              label={
                <div className="border mx-2 border-gray-500 text-center py-1 px-3">
                  <p className="text-[11px] uppercase">{time.nameScreen}</p>
                  <p className="py-1 font-medium">{time.time}</p>
                  <p className="text-[12px] text-gray-500">Số ghế còn trống: {time.quantitySeat}</p>
                </div>
              } hidden>
              </Radio>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Session;
