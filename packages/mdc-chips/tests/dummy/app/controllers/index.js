import Controller from '@ember/controller';
import { map } from '@ember/object/computed';

export default Controller.extend ({
  names: map ('filtered', function (id) {
    return this.get ('filterChips').findBy ('id', id).text;
  })
});