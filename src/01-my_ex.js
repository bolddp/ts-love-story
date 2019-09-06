class CustomerService {
  insert(customer) {
    if (!customer.id) {
      throw new Error('missing id');
    }
    console.log(`Customer inserted (id: ${customer.id})`);
  }
}

const srv = new CustomerService();

// Oops, missing id...
srv.insert({ name: 'customer01' });

// Hmm, what type is id?
srv.insert({ id: 123, name: 'customer01' }); // Works just fine
srv.insert({ id: 'abc', name: 'customer01' }); // Also works


