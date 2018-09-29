
import Ember from 'ember';

declare global {
  interface Array<T> extends Ember.ArrayPrototypeExtensions<T> {}
  // interface Function extends Ember.FunctionPrototypeExtensions {}
}

export {};


export interface IState {
  openIndexes: number[];
}

export interface IChanges {
  type: string;
  openIndexes: number[];
}
