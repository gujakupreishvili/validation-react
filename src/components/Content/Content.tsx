import { useFormik } from "formik";
import { validation } from "../../utils/validationschemas";
const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};
export default function Content() {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: validation,
  });

  const { handleBlur, handleChange, handleSubmit, values, errors } = formik;
  return (
    <div className=" flex flex-col items-center justify-center gap-10 lg:flex-row">
      <div className=" flex flex-col items-center  gap-1 lg:gap-6">
        <p
          className="text-[28px] text-white font-[700] leading-9 w-[327px] text-center
         lg:text-start lg:w-[525px] lg:text-[55px] lg:leading-[55px]"
        >
          Learn to code by watching others
        </p>
        <p
          className="text-[16px] text-white font-[500] leading-6 w-[327px] text-center my-2
        lg:text-start lg:w-[515px] 
        "
        >
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className=" flex flex-col items-center">
        <button className="bg-[#5E54A4] h-[88px] rounded-lg mb-[20px]  w-[327px] text-center shadow-lg lg:w-[540px] lg:mt-[50px]">
          <p className=" text-center text-white font-light p-5 text-xl ">
            <span className="text-white font-bold">Try it free 7 days</span>{" "}
            then $20/mo. thereafter
          </p>
        </button>
        <form
          action=""
          className=" flex flex-col items-center gap-6 w-[327px] bg-white p-7 rounded-md shadow-lg lg:w-[540px]"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Firstname"
            className={`w-[279px] h-11 border-2 pl-[14px] rounded-sm lg:w-[460px] lg:h-14 ${
              errors.firstname ? "border-red-500" : "border-slate-300 "
            }`}
            value={values.firstname}
            name="firstname"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.firstname && (
            <p className="text-red-500 self-start mt-[-20px]">
              {errors.firstname}
            </p>
          )}
          <input
            type="text"
            placeholder="Lastname"
            className={`w-[279px] h-11 border-2 pl-[14px] rounded-sm  lg:w-[460px] lg:h-14 ${
              errors.lastname ? "border-red-500" : "border-slate-300"
            }`}
            value={values.lastname}
            name="lastname"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.lastname && (
            <p className="text-red-500 self-start mt-[-20px]">
              {errors.lastname}
            </p>
          )}
          <input
            type="email"
            placeholder="Email address"
            className={`w-[279px] h-11 border-2 pl-[14px] rounded-sm  lg:w-[460px] lg:h-14 ${
              errors.email ? "border-red-500" : "border-slate-300"
            }`}
            value={values.email}
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && (
            <p className="text-red-500 self-start mt-[-20px]">{errors.email}</p>
          )}
          <input
            type="password"
            placeholder="Password"
            className={`w-[279px] h-11 border-2 pl-[14px] rounded-sm lg:w-[460px] lg:h-14 ${
              errors.password ? "border-red-500" : "border-slate-300"
            }`}
            value={values.password}
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && (
            <p className="text-red-500 self-start mt-[-20px]">
              {errors.password}
            </p>
          )}

          <button
            className="w-[279px] bg-[#38CC8B] h-[56px] rounded-lg lg:w-[460px]"
            type="submit"
          >
            <p className="text-white text-base">CLAIM YOUR FREE TRIAL</p>
          </button>
          <p className="text-center w-[299px] text-gray-600 lg:w-[490px]">
            By clicking the button, you are agreeing to our
            <span className="text-red-500">Terms and Services</span>
          </p>
        </form>
      </div>
    </div>
  );
}
