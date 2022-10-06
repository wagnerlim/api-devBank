import { documentType } from "../../shared/types";
import { validateCnpj } from "../../shared/utils/functions/validateCnpj";
import { validateCpf } from "../../shared/utils/functions/validateCpf";

export interface CustomerProps {
  name: string;
  birthday: Date;
  document: string;
  documentType: documentType;
  email?: string;
  phone?: {
    contryCode: string;
    areaCode: string;
    number: string;
  };
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

  constructor(props: CustomerProps) {
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

// Falta ver se os testes estão funcionando.
