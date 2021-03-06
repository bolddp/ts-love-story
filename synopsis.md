## Preparations
* Connect to phone wifi
* Open project ts-love-story
  * Remove dist folder
  * Remove tsconfig.json
  * Copy my_package.json to package.json
  * npm install
  * Open 01-my_ex.js
  * Open preview of 02-getting_started.md
* Open project react-typescript-vscode -> Textbox.tsx
* Open project fluent-aws -> Ec2Api.ts

## Splash screen
* Welsome - TypeScript - love story
* Current assignment AWS Lambda and Javascript. Fantastic -> productive - frontend and backend.
* But maintenance, refactoring, returning after months, rather uncomortable.
* Tried TypeScript, fell head over heels. Warm cozy safe feeling. Still powerful, productive.
* Ditched old sweetheart in favor of new one.

## Introduction
* A short survey
  * How many have worked with Javascript?
  * How many have worked with TypeScript?

## CustomerService in Javascript
* insert({ name: 'customer01' });
  * missing id error
* insert({ id: 123, name: 'customer02' });
  * seems to work
  * maybe id should be string
* insert({ id: 'abc', name: 'customer02' });
  * hmm, also working
  * insert(customer, authToken)
    * no compile time errors

## Getting started
* you can get started in under 10 minutes
* Node.js -> https://nodejs.org/en/
* > npm install -g typescript
* > tsc init - show the huge list of available configuration attributes
* copy my_tsconfig.json -> tsconfig.json

## 03 basic types
* let count: number = 12;
* let customerName: string = 'DOTP';
* let isVerified: boolean = false;
* let implicitNumber = 12;
* ERROR -> implicitNumber = 'abc'; -> NO WAY!
* let input: string | number = 'abc';
* enum CustomerState { CREATED, VERIFIED, REJECTED };
* This will translate the enum values to numbers, has some drawbacks
* Even better: String enums -> CREATED = 'Created' etc.
* Mayhem and chaos - the any type (should never be needed, really)

## 04 introducing my new girlfriend
* copy contents from 01-my_ex.js
* tsc -> works fine
* show folder dist ->
* export interface Customer { id: number; name: string; }
* export class CustomerService { insert(customer: Customer) ... }
* const srv = new CustomerService();
* const customer: Customer = { id: 'abc', name: 'Acme INC' }
* srv.insert(customer); -> COMPILE TIME ERROR!
* change -> id: 123
* tsc
* add Customer.address? field

## 05 Interfaces and classes
* interface Order -> id: string -> articleNumber: string
* interface OrderRepository -> insert
* class DbOrderRepository -> log in constructor and insert
* class InMemoryOrderRepository -> log in constructor and insert
* let rep: OrderRepository -> new Db... -> new InMemory...
* tsc && node dist/interfaces_and_classes.js
* remove the executable code at the bottom

## 06 Generics
* interface InstanceProvider<T> -> get
* class Singleton -> creator ->  instance -> get()
* const useInMemory: boolean = false
* const repFactory = new Singleton... useInMemory ? :
* rep1, rep2 = repFactory.get();
* tsc && node dist/generics.js
* swap useInMemory and run again
* comment out code
* const rndFactory = new Singleton<number>(... Math.random())
* rndFactory.get() * 2 (same number!)
* exchange Math.random() -> new DbOrderRepository() -> generics won't allow it

## 07 3rd party support
* npm install --save checksum
* create file ChecksumCreator.ts
* import * as checksum from 'checksum';
* show warning message about missing type definitions
* for TypeScript to utilize a Javascript library, it needs to know about the API: type declaration files either included in the packages or provided through an extra dev-dependency package: @types/...
* npm install --save-dev @types/checksum
* the warning message has been replaced with a description of the checksum function
* Code it!
* Change algorithm to Algorithm, immediate error

## 3rd party support: React

## Black magic (type discriminators)
  also added some rather cool features, show one
  * 03-type_disc.ts
  * walkthrough code
  * fill out last case -> UpdateActionType.RecycleAll
  * consume it -> executeAction({ ... })
  * very common when using redux


3rd party support: AWS SDK

Unit testing (in case of time)
  * fluent-aws -> Ec2InstanceTest.ts






