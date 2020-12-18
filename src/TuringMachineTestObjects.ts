import { Direction, TuringMachineDescription } from './TuringMachine';

export const turingMachineTests: {
  [name: string]: {
    description: TuringMachineDescription;
    accepted: string[];
    rejected: string[];
  };
} = {
  equalAsAndBs: {
    accepted: ['', 'ab', 'abba', 'ba', 'abbaabbbaa'],
    rejected: ['a', 'b', 'abbaa', 'aaaaa', 'bbbbb', '10'],
    description: {
      transitions: {
        q0: {
          b: {
            write: 'b',
            direction: Direction.R,
            newState: 'q0',
          },
          x: {
            write: 'x',
            direction: Direction.R,
            newState: 'q0',
          },
          a: {
            write: 'x',
            direction: Direction.L,
            newState: 'q1',
          },
          _: {
            write: '_',
            direction: Direction.L,
            newState: 'q4',
          },
        },
        q1: {
          b: {
            write: 'b',
            direction: Direction.L,
            newState: 'q1',
          },
          x: {
            write: 'x',
            direction: Direction.L,
            newState: 'q1',
          },
          _: {
            write: '_',
            direction: Direction.R,
            newState: 'q2',
          },
        },
        q2: {
          a: {
            write: 'a',
            direction: Direction.R,
            newState: 'q2',
          },
          b: {
            write: 'x',
            direction: Direction.L,
            newState: 'q3',
          },
          x: {
            write: 'x',
            direction: Direction.R,
            newState: 'q2',
          },
        },
        q3: {
          a: {
            write: 'a',
            direction: Direction.L,
            newState: 'q3',
          },
          x: {
            write: 'x',
            direction: Direction.L,
            newState: 'q3',
          },
          _: {
            write: '_',
            direction: Direction.R,
            newState: 'q0',
          },
        },
        q4: {
          x: {
            write: 'x',
            direction: Direction.L,
            newState: 'q4',
          },
          _: {
            write: '_',
            direction: Direction.R,
            newState: 'q5',
          },
        },
        q5: {},
      },
      start: 'q0',
      acceptStates: ['q5'],
    },
  },
  wwr: {
    accepted: ['', '0110', '1001', '10100101', '000000', '111111'],
    rejected: ['0', '1', '01100', '010', '00000', '11111', 'abba'],
    description: {
      transitions: {
        q0: {
          0: {
            write: 'y',
            direction: Direction.R,
            newState: 'q2',
          },
          1: {
            write: 'x',
            direction: Direction.R,
            newState: 'q1',
          },
          x: {
            write: 'x',
            direction: Direction.R,
            newState: 'q6',
          },
          y: {
            write: 'y',
            direction: Direction.R,
            newState: 'q6',
          },
          _: {
            write: '_',
            direction: Direction.R,
            newState: 'q7',
          },
        },
        q1: {
          0: {
            write: '0',
            direction: Direction.R,
            newState: 'q1',
          },
          1: {
            write: '1',
            direction: Direction.R,
            newState: 'q1',
          },
          x: {
            write: 'x',
            direction: Direction.L,
            newState: 'q3',
          },
          y: {
            write: 'y',
            direction: Direction.L,
            newState: 'q3',
          },
          _: {
            write: '_',
            direction: Direction.L,
            newState: 'q3',
          },
        },
        q2: {
          0: {
            write: '0',
            direction: Direction.R,
            newState: 'q2',
          },
          1: {
            write: '1',
            direction: Direction.R,
            newState: 'q2',
          },
          x: {
            write: 'x',
            direction: Direction.L,
            newState: 'q3',
          },
          y: {
            write: 'y',
            direction: Direction.L,
            newState: 'q3',
          },
          _: {
            write: '_',
            direction: Direction.L,
            newState: 'q3',
          },
        },
        q3: {
          0: {
            write: 'y',
            direction: Direction.L,
            newState: 'q5',
          },
          1: {
            write: 'x',
            direction: Direction.L,
            newState: 'q4',
          },
        },
        q4: {
          0: {
            write: '0',
            direction: Direction.L,
            newState: 'q4',
          },
          1: {
            write: '1',
            direction: Direction.L,
            newState: 'q4',
          },
          x: {
            write: 'x',
            direction: Direction.R,
            newState: 'q0',
          },
          y: {
            write: 'y',
            direction: Direction.R,
            newState: 'q0',
          },
        },
        q5: {
          0: {
            write: '0',
            direction: Direction.L,
            newState: 'q5',
          },
          1: {
            write: '1',
            direction: Direction.L,
            newState: 'q5',
          },
          x: {
            write: 'x',
            direction: Direction.R,
            newState: 'q0',
          },
          y: {
            write: 'y',
            direction: Direction.R,
            newState: 'q0',
          },
        },
        q6: {
          x: {
            write: 'x',
            direction: Direction.R,
            newState: 'q6',
          },
          y: {
            write: 'y',
            direction: Direction.R,
            newState: 'q6',
          },
          _: {
            write: '_',
            direction: Direction.L,
            newState: 'q7',
          },
        },
        q7: {},
      },
      start: 'q0',
      acceptStates: ['q7'],
    },
  },
  anbn: {
    accepted: ['', 'ab', 'aabb', 'aaabbb', 'aaaaabbbbb'],
    rejected: ['a', 'b', 'aa', 'aba', 'bbaa', 'baba', '10'],
    description: {
      transitions: {
        q0: {
          a: {
            write: 'x',
            direction: Direction.R,
            newState: 'q1',
          },
          y: {
            write: 'y',
            direction: Direction.R,
            newState: 'q3',
          },
          _: {
            write: '_',
            direction: Direction.L,
            newState: 'q4',
          },
        },
        q1: {
          a: {
            write: 'a',
            direction: Direction.R,
            newState: 'q1',
          },
          y: {
            write: 'y',
            direction: Direction.R,
            newState: 'q1',
          },
          b: {
            write: 'y',
            direction: Direction.L,
            newState: 'q2',
          },
        },
        q2: {
          a: {
            write: 'a',
            direction: Direction.L,
            newState: 'q2',
          },
          x: {
            write: 'x',
            direction: Direction.R,
            newState: 'q0',
          },
          y: {
            write: 'y',
            direction: Direction.L,
            newState: 'q2',
          },
        },
        q3: {
          y: {
            write: 'y',
            direction: Direction.R,
            newState: 'q3',
          },
          _: {
            write: '_',
            direction: Direction.L,
            newState: 'q4',
          },
        },
        q4: {},
      },
      start: 'q0',
      acceptStates: ['q4'],
    },
  },
};
