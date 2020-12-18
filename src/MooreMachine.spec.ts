import test from 'ava';

import MooreMachine from './MooreMachine';
import { mooreMachineTests } from './MooreMachineTestData';

for (const [name, testDescription] of Object.entries(mooreMachineTests)) {
  test(`${name}/constructor`, (t) => {
    const mooreMachine = new MooreMachine(testDescription.description);
    t.truthy(mooreMachine);
  });

  test(`${name}/createOutput`, (t) => {
    const mooreMachine = new MooreMachine(testDescription.description);
    const { examples } = testDescription;

    for (const [input, output] of examples) {
      t.assert(output == mooreMachine.createOutput(input));
    }
  });
}
