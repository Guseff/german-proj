import { ETenses } from '../../../constants';
import {
  Deklination,
  Perfect,
  Prasens,
  Preter,
} from '../../../components/common/Tasks';

export const getTaskComponent = (tense: ETenses): (() => JSX.Element) => {
  if (tense === ETenses.PERFECT) {
    return Perfect;
  }

  if (tense === ETenses.DEKLINATION) {
    return Deklination;
  }

  if (tense === ETenses.PRASENS) {
    return Prasens;
  }

  if (tense === ETenses.PRETER) {
    return Preter;
  }

  throw new Error('unappropiate tense');
};
