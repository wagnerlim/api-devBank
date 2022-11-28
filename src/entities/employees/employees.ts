import { departament, documentType } from "../../shared/types";
import { validateRegisterNumber } from "../../shared/utils/functions/rules/employees/validateRegister";
import { validateCnpj } from "../../shared/utils/functions/validators/validateCnpj";
import { validateCpf } from "../../shared/utils/functions/validators/validateCpf";
//Descobrir uma maneira de compartilhar os types
export interface EmployeesProps {
  name: string;
  birthday: Date;
  document: string;
  documentType: documentType;
  departament: departament;
  registerNumber: number;
  role: string;
}

export class Employee {
  private props: EmployeesProps;
  //Getters
  get name(): string {
    return this.props.name;
  }
  get birthday() {
    return this.props.birthday;
  }
  get document() {
    return this.props.document;
  }
  get departament() {
    return this.props.departament;
  }
  get role() {
    return this.props.role;
  }
  //Setters
  set name(value: string) {
    this.props.name = value;
  }

  set birthday(value: Date) {
    this.props.birthday = value;
  }

  set departament(value: departament) {
    this.props.departament = value;
  }

  set role(value: string) {
    this.props.role = value;
  }

  constructor(props: EmployeesProps) {
    if (props.documentType === "CPF") {
      if (!validateCpf(props.document)) throw new Error("invalid CPF");
      props.document = props.document.replace(/[^\d]+/g, "");
    } else if (props.documentType === "CNPJ") {
      if (!validateCnpj(props.document)) throw new Error("invalid CNPJ");
      props.document = props.document.replace(/[^\d]+/g, "");
    }
    const verifyRegister = validateRegisterNumber(props.registerNumber);
    if (!verifyRegister.valid) throw new Error(verifyRegister.message);
    this.props = props;
  }
}
