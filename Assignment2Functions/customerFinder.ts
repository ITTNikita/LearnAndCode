class Customer {
    constructor(
        public CustomerID: string,
        public CompanyName: string,
        public ContactName: string,
        public Country: string
    ) {}
}

class CustomerSearch {
    private database: { customers: Customer[] };

    constructor(database: { customers: Customer[] }) {
        this.database = database;
    }

    public searchByCountry(country: string): Customer[] {
        return this.searchCustomer(country);
    }

    public searchByCompanyName(company: string): Customer[] {
        return this.searchCustomer(company);
    }

    public searchByContact(contact: string): Customer[] {
        return this.searchCustomer(contact);
    }

    private searchCustomer(searchFactor: string): Customer[] {
        return this.database.customers
            .filter(customer => 
                customer.Country.includes(searchFactor) ||
                customer.CompanyName.includes(searchFactor) ||
                customer.ContactName.includes(searchFactor)
            )
            .sort((a, b) => a.CustomerID.localeCompare(b.CustomerID));
    }
}

class CustomerDataExporter {
    public exportCustomerDataToCSV(customerData: Customer[]): string {
        return customerData
            .map(customer => `${customer.CustomerID}, ${customer.CompanyName}, ${customer.ContactName}, ${customer.Country}`)
            .join("\n");
    }
}



