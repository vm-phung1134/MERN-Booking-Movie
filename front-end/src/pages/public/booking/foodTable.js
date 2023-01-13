import { useDispatch } from "react-redux";
import { memo, useEffect } from "react";
import {
  incrementFood,
  decrementFood,
} from "../../../redux/actions/foodActions";

function FoodTable({ foods, vlPriceFood, setvlPriceFood}) {
  const dispatch = useDispatch();
  useEffect(() => {
    let total = 0;
    foods.map(food => 
      total = total +  food.quantity * food.price
    )
    setvlPriceFood(total)
  },[foods, setvlPriceFood])
  return (
    <>
      <div className="flex flex-col mt-3">
        <div className="overflow-x-auto">
          <div className="w-full inline-block align-middle">
            <div className="overflow-hidden border border-gray-500 rounded-lg">
              <table className="min-w-full divide-y divide-gray-500">
                <thead className="bg-[#206cb391]">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                    >
                      Combo
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-center text-white uppercase "
                    >
                      Số Lượng
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-center text-white uppercase "
                    >
                      Giá
                      <p className="text-[11px] font-thin">&#40; 1000 VNĐ = 1 RF &#41;</p>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-center text-white uppercase "
                    >
                      Tổng &emsp;
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {foods.map((food, index) => (
                    <tr key={index}>
                      <td className="pl-6 py-4 flex text-[12px] font-medium text-white whitespace-nowrap">
                        <img
                          className="w-[100px] h-[60px]"
                          src={food.image}
                          alt=""
                        ></img>
                        <div className="ml-2">
                          <p className="uppercase">{food.typeFood}</p>
                          <p className="text-gray-400">{food.discription}</p>
                        </div>
                      </td>
                      <td className="px-3 py-4 text-sm text-white whitespace-nowrap">
                        <div className="flex justify-between">
                          <button
                            className="border rounded-full px-1"
                            onClick={() => dispatch(decrementFood(food._id))}
                          >
                            <i className="fa-solid fa-minus"></i>
                          </button>
                          <p>{food.quantity}</p>
                          <button
                            className="border rounded-full px-1"
                            onClick={() => dispatch(incrementFood(food._id))}
                          >
                            <i className="fa-solid fa-plus"></i>
                          </button>
                        </div>
                      </td>
                      <td className="px-6 text-center py-4 text-sm text-white whitespace-nowrap">
                        {food.price} <span className="text-[10px]">RF</span>
                      </td>
                      <td className="px-6 text-center py-4 text-sm text-white whitespace-nowrap">
                        {food.price * food.quantity} <span className="text-[10px]">RF</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(FoodTable);
