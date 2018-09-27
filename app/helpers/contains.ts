
import Helper from '@ember/component/helper';

type IParams = [any,any[]];

export default Helper.extend({
  compute(params: IParams) {
    const [element, array] = params;

    return array.includes(element);
  }
});