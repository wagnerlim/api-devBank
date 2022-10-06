type departament = "Technology" | "Communication" | "Financial" | "management";
export interface EmployeesProps {
  name: string;
  birthday: Date;
  document: string;
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
    this.props = props;
  }
}
