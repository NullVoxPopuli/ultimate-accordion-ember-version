import Component from "sparkles-component";
import { IState, IChanges } from "ultimate-accordion";
import { combineReducers, single, preventClose } from "ultimate-accordion/utils/reducers";

interface IProps {
  stateReducer: (state: IState, changes?: IChanges) => IChanges;
}

const defaultReducer = (_state: IState, changes?: any) => changes;


export default class extends Component<IProps> {
  get stateReducer() {
    return this.args.stateReducer || defaultReducer;
  }

  combinedStateReducer = combineReducers(single, preventClose, this.stateReducer);
}