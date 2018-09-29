import Component from "sparkles-component";
import { preventClose } from "ultimate-accordion/utils/reducers";

export default class extends Component {
  preventClose = preventClose;
}