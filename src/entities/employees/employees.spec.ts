import { expect, test } from "vitest";
import { Employee } from "./Employees";

test("should be create a employee", () => {
  const employee = new Employee({
    name: "John Doe",
    birthday: new Date("09/10/1980"),
    document: "458.622.688-98",
    documentType:'CPF',
    departament: "Technology",
    role: "Developer",
  });
  expect(employee.name).toEqual("John Doe");
  expect(employee.birthday).toEqual(new Date("09/10/1980"));
  expect(employee.document).toEqual("45862268898");
  expect(employee.departament).toEqual("Technology");
  expect(employee.role).toEqual("Developer");
  expect(employee).toBeInstanceOf(Employee);
});
