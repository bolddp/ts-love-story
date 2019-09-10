import { OrderRepository, InMemoryOrderRepository, DbOrderRepository } from './05-i_and_c';

// Generics
export interface InstanceProvider<T> {
  get(): T;
}

export class Singleton<T> implements InstanceProvider<T> {
  creator: () => T;
  instance?: T;

  constructor(creator: () => T) {
    this.creator = creator;
  }

  get(): T {
    if (!this.instance) {
      this.instance = this.creator();
    }
    return this.instance;
  }
}

// const useInMemory = true;
// const repFactory = new Singleton<OrderRepository>(() => useInMemory
//   ? new InMemoryOrderRepository()
//   : new DbOrderRepository());

// let rep1 = repFactory.get();
// let rep2 = repFactory.get();

const rndFactory = new Singleton<number>(() => Math.random());

console.log(rndFactory.get());
console.log(rndFactory.get());