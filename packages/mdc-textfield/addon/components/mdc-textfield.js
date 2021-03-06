/* global mdc */

import layout from '../templates/components/mdc-textfield';
import Component from '@ember/component';

import TextSupport from '../mixins/text-support';

import { computed } from '@ember/object';
import { isPresent, isNone } from '@ember/utils';
import { or, readOnly, equal, not, and } from '@ember/object/computed';

export default Component.extend (TextSupport, {
  layout,

  tagName: 'div',

  classNameBindings: [
    'styleClassName',
    'iconClassName'
  ],

  label: null,
  style: null,
  helperText: null,
  disabled: false,
  dense: false,

  icon: null,
  iconPosition: null,
  iconClickable: false,
  iconClick: null,

  isOutlined: equal ('style', 'outlined'),
  isFullWidth: equal ('style', 'fullwidth'),
  notFullWidth: not ('isFullWidth'),

  styleClassName: computed ('style', function () {
    const style = this.get ('style');

    if (isNone (style)) {
      return null;
    }

    return `mdc-text-field--${style}`;
  }),

  // Helper methods for the position.

  leadingIcon: equal ('iconPosition', 'leading'),
  hasLeadingIcon: and ('icon', 'leadingIcon'),

  trailingIcon: equal ('iconPosition', 'trailing'),
  hasTrailingIcon: and ('icon', 'trailingIcon'),

  iconClassName: computed ('iconPosition', function () {
    const { trailingIcon, leadingIcon } = this.getProperties (['trailingIcon', 'leadingIcon']);

    return leadingIcon ? 'mdc-text-field--with-leading-icon' : (trailingIcon ? 'mdc-text-field--with-trailing-icon' : null);
  }),

  inputId: computed (function () {
    return `${this.elementId}-input`;
  })
});
