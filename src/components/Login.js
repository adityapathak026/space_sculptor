import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import {
  CiUser,
  GoKey,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "../utils/icons";
import Button from "../components/Button";
import useType from "../hooks/useType";
import useModal from "../hooks/useModal";
// import { authApi } from "../../api/api";
// import alertMessage from "../alert/alertMessage";
import {
  BASE_URL_THREE,
  DASHBOARD,
  DEVICE_NAME,
  LOGIN_URL,
  loginData,
} from "../common/constants";
import { REQUIRED_FIELD } from "../common/validations";
import InputField from "./InputField";
import Email from "./Email";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { type, handlePassword } = useType();
  const { openModal, handleOpen, handleClose } = useModal();

  const login = async (formData) => {
    console.log(formData,'formData')
  };

  return (
    <>
      <div className="container">
        <div className="auth__container flex__center">
          <form
            className="form__container login"
            onSubmit={handleSubmit(login)}
          >
            <div
              className="auth__title-container"
            >
              <h2 className="auth__title">LOGIN</h2>
            </div>

            <Email register={register} errors={errors} />

            <InputField
              icon={<GoKey />}
              type={type}
              name="password"
              placeholder="Password"
              register={register}
              errors={errors}
              validations={REQUIRED_FIELD}
              handlePassword={handlePassword}
              passIcon={
                type !== "password" ? (
                  <AiOutlineEye onClick={() => handlePassword("password")} />
                ) : (
                  <AiOutlineEyeInvisible
                    onClick={() => handlePassword("text")}
                  />
                )
              }
            />

            <div className="flex__between">
              <div className="flex__start">
                <span>Does not have account? <NavLink to="/signup" >Signup</NavLink></span>
              </div>
              <NavLink
              to="/reset_password"
                onClick={() => {
                  handleOpen();
                }}
              >
                Forgot Password?
              </NavLink>
            </div>

            <Button type="submit" btnText="SIGN IN" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
