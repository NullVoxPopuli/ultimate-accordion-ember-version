// import Component from '@ember/component';
import Component, { tracked } from "sparkles-component";

// import { action } from '@ember-decorators/object';

export default class extends Component {
  @tracked openIndexes = [0];

  onItemClick(index: number) {
    const currentIndexes = this.openIndexes || [0];
    let newIndexes;

    if (currentIndexes.includes(index)) {
      newIndexes = currentIndexes.filter(i => i !== index);
    } else {
      newIndexes = [...currentIndexes, index];
    }

    console.log('before', this.openIndexes);
    this.openIndexes = newIndexes;
    console.log('after', this.openIndexes);
  }
}

// export default class extends Component {
//   openIndexes: number[] = [0];

//   @action
//   onItemClick(index: number) {
//     const currentIndexes = this.openIndexes || [0];
//     let newIndexes;

//     if (currentIndexes.includes(index)) {
//       newIndexes = currentIndexes.filter(i => i !== index);
//     } else {
//       newIndexes = [...currentIndexes, index];
//     }

//     console.log('before', this.openIndexes);
//     this.set('openIndexes', newIndexes);
//     console.log('after', this.openIndexes);
//   }
// }
