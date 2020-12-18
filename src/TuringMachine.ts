type State = string;
type Transition = { write: string; newState: State; direction: Direction };
export enum Direction {
  L = 'L',
  R = 'R',
}
interface Cell {
  symbol: string;
  next?: Cell;
  previous?: Cell;
}

export interface TuringMachineDescription {
  transitions: {
    [key: string]: {
      [k: string]: Transition;
    };
  };
  start: State;
  acceptStates: State[];
}

class Tape {
  private blank: string;
  private head: Cell;

  constructor(blank: string, input: string) {
    this.blank = blank;
    this.head = {
      symbol: blank,
    };
    this.loadString(input);
  }

  moveLeft() {
    if (!this.head.previous) {
      this.head.previous = {
        symbol: this.blank,
        next: this.head,
      };
    }
    this.head = this.head.previous;
  }

  moveRight() {
    if (!this.head.next) {
      this.head.next = {
        symbol: this.blank,
        previous: this.head,
      };
    }
    this.head = this.head.next;
  }

  read(): string {
    return this.head.symbol;
  }

  write(symbol: string) {
    this.head.symbol = symbol;
  }

  loadString(s: string) {
    for (const symbol of s) {
      this.head.symbol = symbol;
      this.moveRight();
    }
    for (let i = 0; i < s.length; i++) {
      this.moveLeft();
    }
  }
}

export default class TuringMachine {
  private description: TuringMachineDescription;
  private blank: string;

  constructor(blank: string, description: TuringMachineDescription) {
    this.blank = blank;
    this.description = description;
  }

  accepts(s: string): boolean {
    const {
      description: { start, acceptStates },
      blank,
    } = this;
    const tape = new Tape(blank, s);
    let state = start;
    const t = this.transition(state, tape.read());
    while (t) {
      const t = this.transition(state, tape.read());
      if (!t) {
        return acceptStates.includes(state);
      }
      const { write, newState, direction } = t;
      state = newState;
      tape.write(write);
      if (direction == 'R') {
        tape.moveRight();
      } else {
        tape.moveLeft();
      }
    }
    return acceptStates.includes(state);
  }

  transition(state: State, symbol: string): Transition {
    const { description: transitions } = this;
    return transitions.transitions[state][symbol];
  }
}
