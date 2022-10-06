import { departament, documentType } from "../../shared/types";
import { validateCnpj } from "../../shared/utils/functions/validateCnpj";
import { validateCpf } from "../../shared/utils/functions/validateCpf";
//Descobrir uma maneira de compartilhar os types
export interface EmployeesProps {
  name: string;
  birthday: Date;
  document: string;
  documentType: documentType;
  departament: departament;
  role: string;
}

export class Employee {
  private props: EmployeesProps;

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

  set name(value: string) {
    this.props.name = value;
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
    this.props = props;
  }
}
