import { Customer } from "./customer";

export interface CustomerUserProps {
    customer: Customer,
    user: string;
    password: string;
}

export class CustomerUser {
    private props: CustomerUserProps
    get customer() {
        return this.props.customer;
    }
    get user() {
        return this.props.user;
    }
    get password() {
        return this.props.password;
    }

    constructor(props: CustomerUserProps) {
        if (props.user !== props.customer.document) throw new Error("Customer user expect to be a document");

        this.props = props
    }
}