import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { getLanguage } from "../../../redux/selector";
import { postRequest } from "../../../utils/request";
import { getUsersSuccess } from "../../../redux/reducer/Auth/userSlice";
import Loader from "../../Ui/Loader";

function SignIn() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { language } = getLanguage();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    data.password_confirmation = data.password;
    postRequest("login", data)
      .then(({ data }) => {
        localStorage.setItem("token", data.token);
        dispatch(getUsersSuccess(data?.user));
        router.push("/");
        toast.success("Вы успешно вошли в систему");
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Ошибка авторизации");
        setLoading(false);
      });
  };

  return (
    <>
      {loading && <Loader />}
      <form onSubmit={handleSubmit(onSubmit)} className="login_bg h-screen">
        <div className="pt-5 h-full h-92 ">
          <div className="block p-6 rounded-lg shadow-lg bg-white w-2/5 login_container h-72">
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
              {language["login"]}
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
              placeholder={language["phone"]}
              name="phone"
              {...register("phone", { required: true })}
              style={errors.phone && { border: "1px solid red" }}
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
              className="inline-block px-6 py-2.5 bg-purple-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mt-10  btn_login"
            >
              {language["login"]}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignIn;
