import { expect, test } from "vitest";
import { Employee } from "./Employees";

test("should be create a employee", () => {
  const employee = new Employee({
    name: "Joe doe",
    birthday: new Date("09/10/1980"),
    document: "458.622.688-98",
    departament: "Technology",
    role: "Developer",
  });
  expect(employee.birthday).toEqual('John Doe');
  expect(employee.birthday).toEqual(new Date("09/10/1980"));
  expect(employee.document).toEqual("458.622.688.98");
  expect(employee.departament).toEqual("Technology");
  expect(employee.role).toEqual("Developer");
  expect(employee).toBeInstanceOf(Employee);
});
