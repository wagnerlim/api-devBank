import { validateCnpj } from "../../utils/functions/validateCnpj";
import { validateCpf } from "../../utils/functions/validateCpf";

export interface CustomerProps {
  name: string;
  birthday: Date;
  document: string;
  documentType: "CPF" | "CNPJ";
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
    } else if (props.documentType === "CNPJ") {
      if (!validateCnpj(props.document)) throw new Error("invalid CNPJ");
    }
    this.props = props;
  }
}

// Falta ver se os testes estão funcionando.
