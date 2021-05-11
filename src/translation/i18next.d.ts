import { ELanguages } from '../constants';
import { resources } from './index';

declare module 'react-i18next' {
  type DefaultResourses = typeof resources[ELanguages];
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Resources extends DefaultResourses {}
}
