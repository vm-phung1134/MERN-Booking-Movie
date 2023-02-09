import { Formik } from "formik";
import { memo } from "react";
// import { useDispatch } from "react-redux";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SupportForm({ userInfo }) {
  //const dispatch = useDispatch();
  const initialValues = {};
  const validate = (values) => {
    let errors = {};
    const regex =
      /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
    if (!regex.test(values.phone)) {
      errors.phone = "! Số điện thoại không chính xác";
    }
    return errors;
  };
  const submitForm = async (values) => {
    // toast.success("Đã gửi góp ý của bạn thành công - check Email lại sau nhá !", {
    //   position: toast.POSITION.BOTTOM_LEFT,
    // });
  };
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitForm}
      enableReinitialize
    >
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
        } = formik;
        return (
          <form className="mt-10 text-[15px]" onSubmit={handleSubmit}>
            <div className="text-sm text-white bg-[#111111] p-3 mt-5">
              <div className="text-center text-gray-300 leading-6">
                <h1 className="text-[20px]">
                  {" "}
                  Hãy đóng góp ý kiến về hệ thống của chúng tôi
                </h1>
                <p className="font-thin">Email: supports@reactflix.com.vn</p>
                <p className="font-thin">Đường dây nóng: 19000000</p>
              </div>
              <div className="bg-[#1d1c1c] p-5 mt-3">
                <div className="grid grid-cols-3 gap-x-2 mb-5">
                  <div className="">
                    <input
                      name="userName"
                      id="userName"
                      value={values.userName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="p-2 w-full mb-1 text-black bg-gray-200 placeholder:text-gray-700"
                      type="text"
                      placeholder="Họ và tên"
                    />{" "}
                    {errors.userName && touched.userName && (
                      <span className="text-red-500 text-[14px]">
                        {errors.userName}
                      </span>
                    )}
                  </div>

                  <div>
                    <input
                      name="email"
                      id="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="p-2 w-full mb-1 text-black bg-gray-200 placeholder:text-gray-700"
                      type="text"
                      placeholder="Email"
                    />
                    {errors.email && touched.email && (
                      <span className="text-red-500 text-[14px]">
                        {errors.email}
                      </span>
                    )}
                  </div>
                  <div>
                    <input
                      name="phone"
                      id="phone"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="p-2 w-full mb-1 text-black bg-gray-200 placeholder:text-gray-700"
                      type="text"
                      placeholder="Số điên thoại"
                    /><br></br>
                    {errors.phone && touched.phone && (
                      <span className="text-red-500 text-[14px]">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <textarea
                    name="content"
                    id="content"
                    value={values.content}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="p-3 text-black bg-gray-200 placeholder:text-gray-700 w-full"
                    rows="10"
                    placeholder="Nội dung"
                  />
                  {errors.content && touched.content && (
                    <span className="text-red-500 text-[14px]">
                      {errors.content}
                    </span>
                  )}
                  <div className="flex justify-end mt-2">
                    <button
                      type="submit"
                      className="py-2 px-3 bg-[#E50914] text-white"
                    >
                      GỬI
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        );
      }}
    </Formik>
  );
}

export default memo(SupportForm);