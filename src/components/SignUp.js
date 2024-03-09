import React, { useEffect, useState } from "react";
import { CiUser, CiMobile3, GoKey, AiOutlineEye, AiOutlineEyeInvisible } from "../utils/icons";
import { useForm } from "react-hook-form";
// import Greet from "../Greet";
// import Otp from "./Otp";
// import ResetPassword from "./ResetPassword";
import { BASE_URL_ONE, registerData, SIGNUP_URL } from "../common/constants";
import Button from "../components/Button";
// import { authApi } from "../../api/api";
// import alertMessage from "../alert/alertMessage";
// import useFormStep from "../hooks/useFormStep";
import Email from "../components/Email";
import InputField from "../components/InputField";
import {
  CAPTCH_MESSAGE,
  CONTACT_VALIDATIONS,
  DATE_MESSAGE,
  NAME_VALIDATION,
  REQUIRED_FIELD,
} from "../common/validations";
import { MAX_DATE, handleKeyDown } from "../utils/helpers";
import { NavLink } from "react-router-dom";
import useType from "../hooks/useType";

const SignUp = () => {
  const [captchaError, setCaptchaError] = useState("");
  const [dateError, setDateError] = useState("");
  const { type, handlePassword } = useType();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Sumbit Function
  const onSubmit = (formData) => {
    signup(formData);
  };

  // Signup Function
  const signup = async (formData) => {
    console.log(formData,'formData')
  };

  return (
    <>
      {/* {step === 0 && ( */}
        <div className="container">
          <div className="auth__container flex__center">
            <form
              className="form__container register"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="auth__title-container">
                <h2 className="auth__title">CREATE ACCOUNT</h2>
              </div>

              <InputField
                icon={<CiUser />}
                type="text"
                name="name"
                placeholder="Full Name"
                register={register}
                errors={errors}
                validations={NAME_VALIDATION}
                onKeyDown={(e) => handleKeyDown(e)}
              />

              <Email register={register} errors={errors} />

                <InputField
                  icon={<CiMobile3 />}
                  type="number"
                  name="contact"
                  placeholder="Mobile No."
                  register={register}
                  errors={errors}
                  validations={CONTACT_VALIDATIONS}
                />

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

              <Button type="submit" btnText="SUBMIT" />
              <NavLink style={{textAlign:"center"}} to="/login" >Login</NavLink>
            </form>
          </div>
        </div>
    {/* //   )} */}
      {/* {step === 1 ? (
        <Otp formTitle="CREATE ACCOUNT" nextStep={nextStep} />
      ) : step === 2 ? (
        <ResetPassword formTitle="CREATE ACCOUNT" />
      ) : (
        ""
      )} */}
    </>
  );
};

export default SignUp;
