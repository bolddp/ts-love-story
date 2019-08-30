// Basic types
let count: number = 12;
let str: string = 'Day of the programmer';
let bool: boolean = true;

// Array
let strArray: string[] = [];

// Enum (very niiice!)
enum State { Idle, Processing, Finished, Failed };

// String enums (makes for better logging etc.)
enum StrState {
  Idle = 'Idle',
  Processing = 'Processing',
  Finished = 'Failed'
}