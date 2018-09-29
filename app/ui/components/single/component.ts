import Component from "sparkles-component";
import { IState, IChanges } from "ultimate-accordion";

export default class extends Component {
  single(_state: IState, changes: IChanges) {
    if (changes.type === 'opening') {
      return { openIndexes: changes.openIndexes.slice(-1) };
    }

    return changes;
  }
}