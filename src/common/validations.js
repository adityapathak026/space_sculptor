const REQUIRED = "This field is required";
const NAME_PATTERN = /[a-zA-Z]/;
const NAME_MESSAGE = "Name should contain atleast one alphabet";
const EMAIL_PATTERN =
  /^\w*[A-Za-z-]+(?:([._]?\w+)*)\@[A-Za-z]\w*[-]?\w+\.[A-Za-z]{1,}?(\.?[A-Za-z]+)$/i;
const EMAIL_MESSAGE =
  "Please enter a valid email Id (Email should contain atleast one alphabet)";
const CONTACT_MIN_LENGTH = 10;
const CONTACT_MAX_LENGTH = 12;
const CONTACT_MIN_LENGTH_MESSAGE = "Mobile number can't be less than 10 digit";
const CONTACT_MAX_LENGTH_MESSAGE =
  "Mobile number can't be greater than 12 digit";
const OTP_MIN_LENGTH = 6;
const OTP_MAX_LENGTH = 6;
const OTP_MIN_LENGTH_MESSAGE = "OTP can't be less than 6 digit";
const OTP_MAX_LENGTH_MESSAGE = "OTP can't be greater than 6 digit";

const PASSWORD_PATTERN =
  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
const PASSWORD_MESSAGE =
  "Password must be alphanumeric and must contain at least one special character such as '&@!#$.";

export const CONFIRM_PASS_MESSAGE = "Password does not match";
export const DATE_MESSAGE = "DOB cannot be greater than today's date";
export const CAPTCH_MESSAGE = "Invalid captcha";

export const REQUIRED_FIELD = { required: REQUIRED };

export const NAME_VALIDATION = {
  required: REQUIRED,
  pattern: {
    value: NAME_PATTERN,
    message: NAME_MESSAGE,
  },

  // value: /^[A-Za-z]+$/,
};

export const EMAIL_VALIDATIONS = {
  required: REQUIRED,
  pattern: {
    value: EMAIL_PATTERN,
    message: EMAIL_MESSAGE,
  },
};

export const CONTACT_VALIDATIONS = {
  required: REQUIRED,
  minLength: {
    value: CONTACT_MIN_LENGTH,
    message: CONTACT_MIN_LENGTH_MESSAGE,
  },
  maxLength: {
    value: CONTACT_MAX_LENGTH,
    message: CONTACT_MAX_LENGTH_MESSAGE,
  },
};

export const PASSWORD_VALIDATIONS = {
  required: REQUIRED,
  pattern: {
    value: PASSWORD_PATTERN,
    message: PASSWORD_MESSAGE,
  },
};

export const OTP_VALIDATIONS = {
  required: REQUIRED,
  minLength: {
    value: OTP_MIN_LENGTH,
    message: OTP_MIN_LENGTH_MESSAGE,
  },
  maxLength: {
    value: OTP_MAX_LENGTH,
    message: OTP_MAX_LENGTH_MESSAGE,
  },
};
