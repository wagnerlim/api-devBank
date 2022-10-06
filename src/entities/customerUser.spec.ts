import { expect, test } from "vitest";
import { Customer } from "./customer/customer";
import { CustomerUser } from "./customerUser";

test('Should be create a customerUser', () => {
    const customer = new Customer({
        name: 'John Doe',
        birthday: new Date(),
        document: '963.259.440-11',
        documentType: 'CPF'
    })

    const customerUser = new CustomerUser({
        customer: customer,
        password: '1234',
        user: customer.document
    })
    expect(customerUser).toBeInstanceOf(CustomerUser)
})

test('Cannot create a customerUser if user !== customer.document', () => {
    const customer = new Customer({
        name: 'John Doe',
        birthday: new Date(),
        document: '963.259.440-11',
        documentType: 'CPF'
    })

    expect(() => {
        return new CustomerUser({
            customer: customer,
            password: '1234',
            user: 'test'
        })
    }).toThrowError('Customer user expect to be a document')
})