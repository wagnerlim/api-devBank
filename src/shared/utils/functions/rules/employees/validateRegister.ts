import { structBoolean } from "../../../../interfaces";

export function validateRegisterNumber(register: number): structBoolean {
  if (!Number.isInteger(register)) {
    return {
      message: "Register expect to be a integer value",
      valid: false,
    };
  }
  return {
    message: "Register is valid!",
    valid: true,
  };
}
