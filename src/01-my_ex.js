class CustomerService {
  insert(customer) {
    if (!customer.id) {
      throw new Error('missing id');
    }
    console.log(`Customer inserted (id: ${customer.id})`);
  }
}

const srv = new CustomerService();
srv.insert({ name: 'name01' });
srv.insert({ id: 123, name: 'abc' });
srv.insert({ id: 'abc', name: 'name02' });