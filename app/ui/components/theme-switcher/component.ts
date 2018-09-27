import Component from '@ember/component';
import { service } from '@ember-decorators/service';
import { action, computed } from '@ember-decorators/object';
import { readOnly } from '@ember-decorators/object/computed';

import ThemeService, { Theme } from 'ultimate-accordion/services/theme';

export default class ThemeSwitcher extends Component {
  @service theme!: ThemeService;

  @readOnly('theme.current') currentTheme!: Theme;
  
  @computed('currentTheme')
  get label() {
    if (this.currentTheme === Theme.LIGHT) {
      return '☀️';
    }

    return '🌙';
  }

  @action onClick() {
    const nextTheme = this.currentTheme == Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

    this.theme.changeTheme(nextTheme);
  }
}