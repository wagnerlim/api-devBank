import { documentType, phone } from "../../shared/types";
import { validateCnpj } from "../../shared/utils/functions/validateCnpj";
import { validateCpf } from "../../shared/utils/functions/validateCpf";
import { validateEmail } from "../../shared/utils/functions/validateEmail";
import { validatePhone } from "../../shared/utils/functions/validatePhone";

export interface CustomerProps {
  name: string;
  birthday: Date;
  document: string;
  documentType: documentType;
  email?: string;
  phone?: phone;
}

export class Customer {
  private props: CustomerProps;

  get name() {
    return this.props.name;
  }
  get birthday() {
    return this.props.birthday;
  }
  get document() {
    return this.props.document;
  }
  get documentType() {
    return this.props.documentType;
  }
  get email() {
    return this.props.email;
  }
  get phone() {
    return this.props.phone;
  }

  constructor(props: CustomerProps) {
    if (props.documentType === "CPF") {
      if (!validateCpf(props.document)) throw new Error("invalid CPF");
      props.document = props.document.replace(/[^\d]+/g, "");
    } else if (props.documentType === "CNPJ") {
      if (!validateCnpj(props.document)) throw new Error("invalid CNPJ");
      props.document = props.document.replace(/[^\d]+/g, "");
    }
    if (props.email) {
      if (!validateEmail(props.email)) throw new Error("invalid Email");
    }
    if (props.phone) {
      const verifyPhone = validatePhone(props.phone);
      if (!verifyPhone.valid) throw new Error(verifyPhone.message);
    }
    this.props = props;
  }
}
