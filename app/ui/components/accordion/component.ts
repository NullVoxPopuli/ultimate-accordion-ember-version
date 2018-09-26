import Component from '@ember/component';

export default class extends Component {
  openIndexes = [];

  onItemClick(index) {
    let newIndexes;

    if (newIndexes.includes(index)) {
      newIndexes = this.openIndexes.filter(i => i !== index);
    } else {
      newIndexes = [...this.openIndexes, index];
    }

    this.set('openIndexes', newIndexes);
  }
}
