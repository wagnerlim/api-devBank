import { expect, test } from "vitest";
import { Customer } from "../customer/customer";
import { User } from "./user";
import { Employee } from "../employees/Employees";

const validCustomer: Customer = new Customer({
  name: "John Doe",
  birthday: new Date(),
  document: "963.259.440-11",
  documentType: "CPF",
});

const validEmployee: Employee = new Employee({
  name: "John Doe",
  birthday: new Date(),
  document: "963.259.440-11",
  documentType: "CPF",
  departament: "Technology",
  role: "Developer",
  registerNumber: 0,
});

test("Should be create a Customer User", () => {
  const customerUser = new User({
    user: validCustomer,
    password: "1234",
  });
  expect(validCustomer).toBeInstanceOf(Customer);
  expect(customerUser).toBeInstanceOf(User);
});

test("Should be create a Employee User", () => {
  const employeeUser = new User({
    user: validEmployee,
    password: "1234",
  });
  expect(validEmployee).toBeInstanceOf(Employee);
  expect(employeeUser).toBeInstanceOf(User);
});
