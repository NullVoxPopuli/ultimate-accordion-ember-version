import Service from '@ember/service';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

const themeProperties = [
  'bg-color',
  'color',
  'focus-bg-color',
  'open-bg-color'
]

export default class ThemeService extends Service {
  current = Theme.LIGHT;

  changeTheme(theme: Theme) {
    // Just like React's this.setState
    //
    // NOTE: this.set is going to be replaced by a native es5 setter
    //       in the near future.
    //       (with the caveat that for state changes, you mark the
    //        the properties as `@tracked`)
    this.set('current', theme);

    this.updateDocumentTheme(theme);
  }

  private updateDocumentTheme(theme: Theme) {
    const style = document.documentElement.style;

    themeProperties.forEach(propertyName => {
      const themeProp = style.getPropertyValue(`--${theme}-${propertyName}`);

      style.setProperty(`--${propertyName}`, themeProp);
    });
  }
}
