import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';
import { dasherize } from '@ember/string';

import { assert } from '@ember/debug';

const THEME_TEXT_STYLES = [
  'primary',
  'secondary',
  'disabled',
  'icon',
  'hint',
];

const THEMES = [
  'dark',
  'light'
];

const THEME_COLORS = [
  'primary',
  'secondary',
  'onPrimary',
  'onSecondary',
  'onSurface'
];

export default Mixin.create ({
  classNameBindings: [
    'mdcThemeTextColorClassName',
    'mdcThemeClassName',
  ],

  /**
   * Sets the text color to the selected theme. The themeTextColor must be one
   * of the following values:
   *
   * = primary
   * = secondary
   * = onPrimary
   * = onSecondary
   * = onSurface
   */
  themeTextColor: null,

  mdcThemeTextColorClassName: computed ('themeTextColor', function () {
    const themeTextColor = this.get ('themeTextColor');

    if (isEmpty (themeTextColor)) {
      return null;
    }

    assert (`The themeTextColor must be one of the following values: ${THEME_COLORS}`, THEME_COLORS.includes (themeTextColor));
    return `mdc-theme--${ dasherize (themeTextColor)}`;
  }),

  /**
   * Set the theme for the text style. The `theme` attribute must be one
   * of the following values:
   *
   * = dark
   * = light
   */
  theme: null,

  /**
   * Set the theme for the text style. The `theme` attribute must be one
   * of the following values:
   *
   * = primary
   * = secondary
   * = disabled
   * = icon
   * = hint
   */
  themeTextStyle: null,

  mdcThemeClassName: computed ('{theme,themeTextStyle}', function () {
    const {theme, themeTextStyle} = this.getProperties (['theme','themeTextStyle']);

    if (isEmpty (theme) || isEmpty (themeTextStyle)) {
      return null;
    }

    assert (`The theme attribute must be one of the following values: ${THEMES}`, THEMES.includes (theme));
    assert (`The themeTextStyle attribute must be one of the following values: ${THEME_TEXT_STYLES}`, THEME_TEXT_STYLES.includes (themeTextStyle));

    return `mdc-theme--text-${themeTextStyle}-on-${theme}`;
  })
});
