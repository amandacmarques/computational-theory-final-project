import { MooreMachineDescription } from './MooreMachine';

export const mooreMachineTests: {
  [name: string]: {
    description: MooreMachineDescription;
    examples: string[][];
  };
} = {
  onesComplement: {
    examples: [
      ['', '0'],
      ['1', '00'],
      ['1011', '00100'],
      ['10101', '001010'],
    ],
    description: {
      transitions: {
        q0: {
          0: 'q1',
          1: 'q2',
        },
        q1: {
          0: 'q1',
          1: 'q2',
        },
        q2: {
          0: 'q1',
          1: 'q2',
        },
      },
      outputs: {
        q0: '0',
        q1: '1',
        q2: '0',
      },
      start: 'q0',
    },
  },
  dividesByHalf: {
    examples: [
      ['101', '0010'],
      ['11111', '001111'],
      ['01001', '000100'],
      ['100', '0010'],
      ['110', '0011'],
      ['1', '00'],
      ['0', '00'],
    ],
    description: {
      transitions: {
        q0: {
          0: 'q0',
          1: 'q1',
        },
        q1: {
          0: 'q3',
          1: 'q2',
        },
        q2: {
          0: 'q3',
          1: 'q2',
        },
        q3: {
          0: 'q0',
          1: 'q1',
        },
      },
      outputs: {
        q0: '0',
        q1: '0',
        q2: '1',
        q3: '1',
      },
      start: 'q0',
    },
  },
};
