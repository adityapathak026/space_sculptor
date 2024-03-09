const InputField = ({
    icon,
    validations,
    type,
    placeholder,
    name,
    register,
    errors,
    passIcon,
    dateError,
    captchaError,
    confirmPassError,
    onKeyDown,
    max,
  }) => {
    return (
      <div className="field__container">
        <div className={`flex__start input__field ${errors[name] && "invalid"}`}>
          <span>{icon}</span>
          <div className="devider" />
          <input
            type={type ? type : "text"}
            placeholder={placeholder}
            {...register(name, validations)}
            onKeyDown={onKeyDown}
            max={max}
          />
          {passIcon}
        </div>
        {errors[name] && <p className="error">{errors[name].message}</p>}
        {<p className="error">{dateError || captchaError || confirmPassError}</p>}
      </div>
    );
  };
  
  export default InputField;
  