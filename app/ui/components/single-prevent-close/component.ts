import Component from "sparkles-component";
import { combineReducers, single, preventClose } from "ultimate-accordion/utils/reducers";

export default class extends Component {
  singlePreventClose = combineReducers(single, preventClose);
}