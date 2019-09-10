// Transforming your ex
export interface Customer {
  id: string;
  name: string;
}

class CustomerService {
  insert(customer: Customer) {
    if (!customer.id) {
      throw new Error('missing id');
    }
    console.log(`Customer inserted (id: ${customer.id})`);
  }
}

const srv = new CustomerService();
srv.insert({ id: 'abc', name: 'name02' });