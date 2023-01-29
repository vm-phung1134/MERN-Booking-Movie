import { Formik } from "formik";
import { memo } from "react";

function InfoForm() {
  const initialValues = {};
  const validate = (values) => {};
  const submitForm = (values) => {};
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitForm}
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
          <form className="mt-10" onSubmit={handleSubmit}>
            <h1 className="text-white text-[15px] mb-5">THÔNG TIN CƠ BẢN</h1>
            <div className="mb-4">
              <label
                htmlFor="userName"
                className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
              >
                Họ tên thành viên
              </label>
              <input
                type="userName"
                name="userName"
                id="emailAccount"
                value={values.userName}
                onChange={handleChange}
                onBlur={handleBlur}
                className=" block w-full px-4 py-2 mt-2 text-white bg-transparent border rounded-md focus:border-white focus:ring-white focus:outline-none "
              />
              {errors.userName && touched.userName && (
                <span className="text-red-500 text-[14px]">
                  {errors.userName}
                </span>
              )}
            </div>
            <div className="mb-4 flex items-center">
              <div className="mr-2 w-[70%]">
                <label
                  htmlFor="birthDay"
                  className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
                >
                  Ngày sinh
                </label>
                <input className="block w-full px-4 py-2 mt-2 text-white bg-transparent border rounded-md focus:border-white focus:ring-white focus:outline-none" />
              </div>
              <div className="ml-3 w-[30%]">
                <label
                  htmlFor="gender"
                  className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
                >
                  Giới tính
                </label>
                <select
                  className="form-select appearance-none
                            block
                            w-full
                            px-4
                            py-2.5
                            text-sm 
                            font-medium
                            text-gray-300
                            bg-transparent bg-clip-padding bg-no-repeat
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-300 focus:bg-black bg-white focus:outline-none"
                  aria-label="Default select example"
                >
                  <option selected disabled>
                    --- Chọn giới tính ---
                  </option>
                  <option value="1">Nam</option>
                  <option value="2">Nữ</option>
                  <option value="3">Khác</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="Email"
                className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
              >
                Email
              </label>
              <input className="block w-full px-4 py-2 mt-2 text-white bg-transparent border rounded-md focus:border-white focus:ring-white focus:outline-none" />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
              >
                Số điện thoại
              </label>
              <input className="block w-full px-4 py-2 mt-2 text-white bg-transparent border rounded-md focus:border-white focus:ring-white focus:outline-none" />
            </div>

            <button className="px-4 my-5 py-2 text-sm text-gray-200 bg-[#E50914]">
              LƯU THAY ĐỔI
            </button>
          </form>
        );
      }}
    </Formik>
  );
}

export default memo(InfoForm);
