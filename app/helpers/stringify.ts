import { helper } from '@ember/component/helper';

export function stringify(params/*, hash*/) {
  return JSON.stringify(params[0]);
}

export default helper(stringify);
