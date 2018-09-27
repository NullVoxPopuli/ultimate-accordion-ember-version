import Component from '@ember/component';
import { action } from '@ember-decorators/object';

export default class extends Component {
  openIndexes: number[] = [0];

  @action
  onItemClick(index: number) {
    const currentIndexes = this.openIndexes || [0];
    let newIndexes;

    if (currentIndexes.includes(index)) {
      newIndexes = currentIndexes.filter(i => i !== index);
    } else {
      newIndexes = [...currentIndexes, index];
    }

    console.log('before', this.openIndexes);
    this.set('openIndexes', newIndexes);
    console.log('after', this.openIndexes);
  }
}
