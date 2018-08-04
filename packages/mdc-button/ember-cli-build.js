'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
const path = require ('path');

module.exports = function(defaults) {
  const options = {
    sassOptions: {
      includePaths: [
        path.resolve ('./node_modules')
      ]
    }
  };

  if (defaults.project.pkg.name === 'ember-cli-mdc-button')
    options.sassOptions.includePaths.push (path.resolve ('./tests/dummy/app/styles'));

  let app = new EmberAddon (defaults, options);

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
