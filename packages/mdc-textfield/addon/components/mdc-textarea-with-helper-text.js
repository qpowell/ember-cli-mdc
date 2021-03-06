import Component from '@ember/component';
import layout from '../templates/components/mdc-textarea-with-helper-text';

import HelperTextSupport from '../mixins/helper-text-support';

export default Component.extend (HelperTextSupport, {
  layout,

  classNames: ['mdc-text-area-with-helper-text'],
});
