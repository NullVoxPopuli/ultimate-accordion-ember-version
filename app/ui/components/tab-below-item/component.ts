import Component, { tracked } from "sparkles-component";
import { localClassName } from 'ember-css-modules';

interface IProps {
  isOpen: boolean;
}

export default class extends Component<IProps> {
  @localClassName('is-open') isOpen: boolean;
}
