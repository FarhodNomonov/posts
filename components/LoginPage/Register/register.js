import React from "react";
import { useForm } from "react-hook-form";
import { getLanguage } from "../../../redux/selector";

function SignUp() {
  const { language } = getLanguage();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="login_bg h-screen">
        <div className="flex justify-center items-center pt-5 h-full">
          <div className="block p-6 rounded-lg shadow-lg bg-white w-3/5 login_container h-72">
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
              {language["signUp"]}
            </h5>
            <input
              type="text"
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mb-2
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        
      "
              id="exampleText0"
              placeholder={language["user_name"]}
              name="username"
              {...register("username", { required: true })}
              style={errors.username && { border: "1px solid red" }}
            />
            <input
              type="text"
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleText0"
              placeholder={language["password"]}
              name="password"
              {...register("password", { required: true })}
              style={errors.password && { border: "1px solid red" }}
            />
            <button
              type="submit"
              className="inline-block px-6 py-2.5 bg-purple-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mt-2  btn_login"
            >
              {language["login"]}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignUp;
