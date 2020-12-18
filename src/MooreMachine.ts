type State = string;
type InputSymbol = string;

export interface MooreMachineDescription {
  transitions: {
    [key: string]: {
      0: State;
      1: State;
    };
  };
  outputs: {
    [key: string]: string;
  };
  start: State;
}

export default class DeterministicFiniteStateMachine {
  private description: MooreMachineDescription;
  constructor(description: MooreMachineDescription) {
    this.description = description;
  }

  transition(state: State, symbol: InputSymbol): State {
    const {
      description: { transitions },
    } = this;
    return transitions[state][symbol];
  }

  createOutput(s: string): string {
    const {
      description: { start },
    } = this;

    let state = start;
    let output = this.description.outputs[state];

    for (const symbol of s) {
      state = this.transition(state, symbol);
      output += this.description.outputs[state];
    }

    return output;
  }
}
