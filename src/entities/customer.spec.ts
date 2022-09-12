import { expect, test } from 'vitest';
import { Customer } from './customer';

let testCustomer = {
    name: 'John Doe',
    birthday: new Date(),
    document: '963.259.440-11',
    documentType: 'CPF'
}

test('create an customer with a valid CPF', () => {
    const customer = new Customer({
        name: 'John Doe',
        birthday: new Date(),
        document: '963.259.440-11',
        documentType: 'CPF'
    })

    expect(customer.name).toEqual('John Doe');
    expect(customer.document).toEqual('963.259.440-11')
    expect(customer).toBeInstanceOf(Customer);
});

test('create an customer with a valid CNPJ', () => {
    const customer = new Customer({
        name: 'John Doe',
        birthday: new Date(),
        document: '03.808.310/0001-25',
        documentType: 'CNPJ'
    })

    expect(customer.name).toEqual('John Doe');
    expect(customer.document).toEqual('03.808.310/0001-25')
    expect(customer).toBeInstanceOf(Customer);
});

test('Should be throw a error when try create with a invalid CNPJ ', () => {
    const customer = new Customer({
        name: 'John Doe',
        birthday: new Date(),
        document: '963.259.440-11',
        documentType: 'CNPJ'
    })
    expect(customer.name).toEqual('John Doe');
    expect(customer.document).toEqual('03.808.310/0001-25')
    expect(customer).toBeInstanceOf(Customer);
});