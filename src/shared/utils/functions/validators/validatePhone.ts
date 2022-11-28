import { phone } from "../../../types";
import { structBoolean } from "../../../interfaces";

export function validatePhone(phone: phone): structBoolean {
  phone.countryCode = phone.countryCode.replace(/[^\d]+/g, "");
  if (phone.countryCode.length > 3)
    return {
      message: "Phone Contry Code Invalid!",
      valid: false,
    };

  phone.areaCode = phone.areaCode.replace(/[^\d]+/g, "");
  if (phone.areaCode.length < 2 || phone.areaCode.length >= 3)
    return {
      message: "Phone area Code Invalid!",
      valid: false,
    };

  phone.number = phone.number.replace(/[^\d]+/g, "");
  if (phone.number.length >= 10 || phone.number.length <= 7)
    return {
      message: "Phone Number Invalid!",
      valid: false,
    };
  return {
    message: "Phone is valid!",
    valid: true,
  };
}
