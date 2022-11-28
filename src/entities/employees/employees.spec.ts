import { expect, test } from "vitest";
import { Employee, EmployeesProps } from "./Employees";

const validEmployee: EmployeesProps = {
  name: "John Doe",
  birthday: new Date("09/10/1980"),
  document: "458.622.688-98",
  documentType: "CPF",
  departament: "Technology",
  role: "Developer",
  registerNumber: 0,
};

test("should be create a employee", () => {
  const employee = new Employee(validEmployee);
  expect(employee.name).toEqual("John Doe");
  expect(employee.birthday).toEqual(new Date("09/10/1980"));
  expect(employee.document).toEqual("45862268898");
  expect(employee.departament).toEqual("Technology");
  expect(employee.role).toEqual("Developer");
  expect(employee).toBeInstanceOf(Employee);
});

test("Should be throw a register error", () => {
  validEmployee.registerNumber = 1.5;
  expect(() => {
    new Employee(validEmployee);
  }).toThrowError();
});
