import { useState } from "react";
import {
    GoKey,
    AiOutlineEye,
    AiOutlineEyeInvisible,
  } from "../utils/icons";
  import { useForm } from "react-hook-form";
  import useType from "../hooks/useType";
  import Button from "./Button";
//   import alertMessage from "../alert/alertMessage";
  import {
    ADD_USER_DETAILS,
    CHANGE_PASSWORD,
    LOGIN_PAGE,
    BASE_URL_ONE,
    BASE_URL_THREE,
  } from "../common/constants";
  import { useNavigate } from "react-router-dom";
  import InputField from "./InputField";
  import {
    CONFIRM_PASS_MESSAGE,
    PASSWORD_VALIDATIONS,
  } from "../common/validations";
  
  const ResetPassword = ({ formTitle }) => {
    const navigate = useNavigate();
  
    const [confirmPassError, setConfirmPassError] = useState("");
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    
    const { type, handlePassword, handleConfirmPassword, ctype } = useType();
  
    // Set Password Function
    const setPassword = async (formData) => {
        console.log(formData,'formData')
        validatePassword(formData)
    };
  
    const validatePassword = (formData) => {
      if (formData.password !== formData.cpassword) {
        setConfirmPassError(CONFIRM_PASS_MESSAGE);
        return false;
      } else {
        setConfirmPassError("");
        return true;
      }
    };
  
    return (
      <div className="container">
        <div className="auth__container flex__center">
          <form
            className="form__container flex__center"
            onSubmit={handleSubmit(setPassword)}
          >
            <div className="auth__title-container" style={{ padding: "1rem 0" }}>
              <h2 className="auth__title">{formTitle}</h2>
              <p>In order to protect your account, make sure your password:</p>
              <ul className="flex__start">
                <li>Should be 8-16 characters long.</li>
                <li>
                  Must be alphanumeric and must contain at least one special
                  character such as '&@!#$'.
                </li>
              </ul>
            </div>
  
            <InputField
              icon={<GoKey />}
              type={type}
              name="password"
              placeholder="Password"
              register={register}
              errors={errors}
              validations={PASSWORD_VALIDATIONS}
              passIcon={
                type !== "password" ? (
                  <AiOutlineEye onClick={() => handlePassword("password")} />
                ) : (
                  <AiOutlineEyeInvisible onClick={() => handlePassword("text")} />
                )
              }
            />
  
            <InputField
              icon={<GoKey />}
              type={ctype}
              name="cpassword"
              placeholder="Confirm Password"
              register={register}
              errors={errors}
              confirmPassError={confirmPassError}
              passIcon={
                ctype !== "password" ? (
                  <AiOutlineEye
                    onClick={() => handleConfirmPassword("password")}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    onClick={() => handleConfirmPassword("text")}
                  />
                )
              }
            />
  
            <Button type="submit" btnText="RESET" />
          </form>
        </div>
      </div>
    );
  };
  
  export default ResetPassword;
  