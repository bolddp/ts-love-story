// Interface and classes
export interface Order {
  id: string;
  articleNumber: string;
}

export interface OrderRepository {
  insert(order: Order): void;
}

export class DbOrderRepository implements OrderRepository {
  constructor() {
    console.log('Db created');
  }

  insert(order: Order) {
    console.log('Db inserted');
  }
}

export class InMemoryOrderRepository implements OrderRepository {
  constructor() {
    console.log('In memory created');
  }

  insert(order: Order) {
    console.log('In memory inserted');
  }
}

