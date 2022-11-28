import { Customer } from "../customer/customer";
import { Employee } from "../employees/Employees";

export interface UserProps {
  userType?: "Customer" | "Employee";
  user: Customer | Employee;
  password: string;
}

export class User {
  private props: UserProps;
  get user() {
    return this.props.user;
  }
  get password() {
    return this.props.password;
  }

  constructor(props: UserProps) {
    if (
      props.user.constructor.name === "Customer" ||
      props.user.constructor.name === "Employee"
    )
      props.userType = props.user.constructor.name;

    this.props = props;
  }
}
