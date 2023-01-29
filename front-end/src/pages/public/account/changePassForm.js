import { Formik } from "formik";
import {memo} from 'react'
function ChangePassForm() {
  const initialValues = {
    
  };
  const validate = (values) => {
  };
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
            <h1 className="text-white text-[15px] mb-5">THAY ĐỔI MẬT KHẨU</h1>
            <div className="mb-4">
              <label
                htmlFor="currentPass"
                className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
              >
                Mật khẩu hiện tại
              </label>
              <input
                type="currentPass"
                name="currentPass"
                id="currentPass"
                value={values.currentPass}
                onChange={handleChange}
                onBlur={handleBlur}
                className=" block w-full px-4 py-2 mt-2 text-white bg-transparent border rounded-md focus:border-white focus:ring-white focus:outline-none "
              />
              {errors.currentPass && touched.currentPass && (
                <span className="text-red-500 text-[14px]">
                  {errors.currentPass}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="newPass"
                className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
              >
                Mật khẩu mới
              </label>
              <input className="block w-full px-4 py-2 mt-2 text-white bg-transparent border rounded-md focus:border-white focus:ring-white focus:outline-none" />
            </div>
            <div className="mb-4">
              <label
                htmlFor="comfirmPass"
                className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
              >
                Xác nhận mật khẩu
              </label>
              <input className="block w-full px-4 py-2 mt-2 text-white bg-transparent border rounded-md focus:border-white focus:ring-white focus:outline-none" />
            </div>
            <button className="px-4 my-5 py-2 text-sm text-gray-200 bg-[#E50914]">
                XÁC NHẬN
            </button>
          </form>
        );
      }}
    </Formik>
  );
}

export default memo(ChangePassForm);
