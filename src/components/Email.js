import { TfiEmail } from "../utils/icons";
import { EMAIL_VALIDATIONS } from "../common/validations";
import InputField from "./InputField";
const Email = ({ register, errors }) => (
  <InputField
    icon={<TfiEmail />}
    name="email"
    placeholder="Email"
    register={register}
    errors={errors}
    validations={EMAIL_VALIDATIONS}
  />
);

export default Email;
