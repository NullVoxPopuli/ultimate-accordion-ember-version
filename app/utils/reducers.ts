import { IState, IChanges } from "ultimate-accordion";

export function preventClose(state: IState, changes: IChanges) {
  if (changes.type === 'closing' && state.openIndexes.length < 2) {
    return {...changes, openIndexes: state.openIndexes}
  }
  return changes
}

export function single(_state: IState, changes: IChanges) {
  if (changes.type === 'opening') {
    return {openIndexes: changes.openIndexes.slice(-1)}
  }
  return changes
}

export function combineReducers(...reducers: any[]) {
  return (state: IState, changes: IChanges) => {
    for (let reducer of reducers) {
      const result = reducer(state, changes)
      if (result !== changes) {
        return result
      }
    }
    return changes
  }
}
