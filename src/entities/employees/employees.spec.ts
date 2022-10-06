import { expect, test } from "vitest";
import { Employee } from "./Employees";

test("should be create a employee", () => {
  const employee = new Employee({
    name: "Joe doe",
    birthday: new Date("09/10/1980"),
    document: "458.622.688-98",
    departament: "Technology",
    role: "developer",
  });

  expect(employee).toBeInstanceOf(Employee);
});
