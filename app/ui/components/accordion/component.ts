import Component, { tracked } from "sparkles-component";
import { IState, IChanges } from "ultimate-accordion";


type ChangesFunction = (state: IState) => IChanges;
type ChangesObjectOrFunction =
  | IChanges
  | ChangesFunction;

interface IProps {
  stateReducer: (state: IState, changes?: IChanges) => IChanges;
}

const defaultReducer = (_state: IState, changes?: any) => changes;

export default class extends Component<IProps> {
  @tracked openIndexes = [0];

  get stateReducer() {
    return this.args.stateReducer || defaultReducer;
  }

  onStateChange = (_changes: IState) => {};

  onItemClick(index: number) {
    this.internalUpdate((state: IState) => {
      const closing = this.openIndexes.includes(index);

      return {
        type: closing ? 'closing' : 'opening',
        openIndexes: closing
          ? state.openIndexes.filter(i => i !== index)
          : [...state.openIndexes, index]
      }
    });
  }

  private internalUpdate(changes: ChangesObjectOrFunction, callback = () => {}) {
    const openIndexes = this.openIndexes;
    const changeObject = 
      typeof changes === 'function' ? changes({ openIndexes }) : changes;

    const allChanges = this.stateReducer.call(this, { openIndexes }, changeObject);

    this.openIndexes = allChanges.openIndexes;

    this.onStateChange(allChanges);
    callback();
  }
}
