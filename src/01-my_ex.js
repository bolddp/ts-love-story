class CustomerService {
  insert(customer) {
    if (!customer.id) {
      throw new Error('missing id');
    }
    console.log(`Customer inserted (id: ${customer.id})`);
  }
}