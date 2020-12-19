import test from 'ava';

import TuringMachine from './TuringMachine';
import { turingMachineTests } from './TuringMachineTestObjects';

for (const [name, testDescription] of Object.entries(turingMachineTests)) {
  test(`${name}/constructor`, (t) => {
    const turingMachine = new TuringMachine('_', testDescription.description);
    t.truthy(turingMachine);
  });

  test(`${name}/accepts`, (t) => {
    const turingMachine = new TuringMachine('_', testDescription.description);
    const { accepted, rejected } = testDescription;

    for (const s of accepted) {
      t.assert(turingMachine.accepts(s));
    }
    for (const s of rejected) {
      t.assert(!turingMachine.accepts(s));
    }
  });
}
