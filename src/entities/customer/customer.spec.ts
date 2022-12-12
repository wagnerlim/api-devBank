import { createExpect, expect, test } from "vitest";
import { Customer } from "./customer";

// General Tests-----------------------------------------------------
test("create a customer with valid optionals values", () => {
  const customer = new Customer({
    name: "John Doe",
    birthday: new Date(),
    document: "96325944011",
    documentType: "CPF",
    email: "johndoe@devbank.com.br",
    phone: {
      countryCode: "55",
      areaCode: "11",
      number: "979675773",
    },
  });

  expect(customer?.email).toEqual("johndoe@devbank.com.br");
  expect(customer?.phone).toMatchObject({
    countryCode: "55",
    areaCode: "11",
    number: "979675773",
  });
});

test("should be throw a error invalid country code", () => {
  expect(() => {
    try {
      new Customer({
        name: "John Doe",
        birthday: new Date(),
        document: "96325944011",
        documentType: "CPF",
        email: "johndoe@devbank.com.br",
        phone: {
          countryCode: "5555",
          areaCode: "11",
          number: "979675773",
        },
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  }).toThrowError("Phone Contry Code Invalid!");
});

test("Expect to throw a exact error: Phone Contry Code Invalid!", () => {
  try {
    new Customer({
      name: "John Doe",
      birthday: new Date(),
      document: "96325944011",
      documentType: "CPF",
      email: "johndoe@devbank.com.br",
      phone: {
        countryCode: "5555",
        areaCode: "11",
        number: "979675773",
      },
    });
  } catch (error: any) {
    expect(error.message).toEqual("Phone Contry Code Invalid!");
  }
});

test("Expect to throw a exact error: Phone area Code Invalid!", () => {
  try {
    new Customer({
      name: "John Doe",
      birthday: new Date(),
      document: "96325944011",
      documentType: "CPF",
      email: "johndoe@devbank.com.br",
      phone: {
        countryCode: "555",
        areaCode: "111",
        number: "9796757739",
      },
    });
  } catch (error: any) {
    expect(error.message).toEqual("Phone area Code Invalid!");
  }
});

test("Expect to throw a exact error: Phone Number Invalid!", () => {
  try {
    new Customer({
      name: "John Doe",
      birthday: new Date(),
      document: "96325944011",
      documentType: "CPF",
      email: "johndoe@devbank.com.br",
      phone: {
        countryCode: "555",
        areaCode: "11",
        number: "9796757733333",
      },
    });
  } catch (error: any) {
    expect(error.message).toEqual("Phone Number Invalid!");
  }
});

//CPF TESTS-----------------------------------------------------------

test("create a customer with a valid CPF and with special character", () => {
  const customer = new Customer({
    name: "John Doe",
    birthday: new Date(),
    document: "963.259.440-11",
    documentType: "CPF",
  });
  expect(customer.name).toEqual("John Doe");
  expect(customer.document).toEqual("96325944011");
  expect(customer).toBeInstanceOf(Customer);
});

test("create a customer with a valid CPF and without special character", () => {
  const customer = new Customer({
    name: "John Doe",
    birthday: new Date(),
    document: "96325944011",
    documentType: "CPF",
  });

  expect(customer.name).toEqual("John Doe");
  expect(customer.document).toEqual("96325944011");
  expect(customer).toBeInstanceOf(Customer);
});

test("Should be throw a error when try create with a invalid CPF", () => {
  expect(() => {
    new Customer({
      name: "John Doe",
      birthday: new Date(),
      document: "43.465.298/0001-18",
      documentType: "CPF",
    });
  }).toThrow();
});

test("Expect to throw exact message: invalid CPF", () => {
  try {
    new Customer({
      name: "John Doe",
      birthday: new Date(),
      document: "0000000000",
      documentType: "CPF",
    });
  } catch (error: any) {
    expect(error.message).toEqual("invalid CPF");
  }
});

//CNPJ TESTS-----------------------------------------------------------

test("create an customer with a valid CNPJ and with special character", () => {
  const customer = new Customer({
    name: "John Doe",
    birthday: new Date(),
    document: "43.465.298/0001-18",
    documentType: "CNPJ",
  });

  expect(customer.name).toEqual("John Doe");
  expect(customer.document).toEqual("43465298000118");
  expect(customer).toBeInstanceOf(Customer);
});
test("create an customer with a valid CNPJ and without special character", () => {
  const customer = new Customer({
    name: "John Doe",
    birthday: new Date(),
    document: "43465298000118",
    documentType: "CNPJ",
  });

  expect(customer.name).toEqual("John Doe");
  expect(customer.document).toEqual("43465298000118");
  expect(customer).toBeInstanceOf(Customer);
});

test("Should be throw a error when try create with a invalid CNPJ ", () => {
  expect(() => {
    new Customer({
      name: "John Doe",
      birthday: new Date(),
      document: "963.259.440-11",
      documentType: "CNPJ",
    });
  }).toThrow("invalid CNPJ");
});

test("Expect to throw exact message: invalid CNPJ", () => {
  try {
    new Customer({
      name: "John Doe",
      birthday: new Date(),
      document: "0000000000",
      documentType: "CNPJ",
    });
  } catch (error: any) {
    expect(error.message).toEqual("invalid CNPJ");
  }
});
