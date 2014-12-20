'use strict';

module.exports = {
  name: 'ember-cli-es5-shim',

  included: function(app) {
    this._super.included(app);

    this.app.import({
      development: app.bowerDirectory + '/es5-shim/es5-shim.js',
      production: app.bowerDirectory + '/es5-shim/es5-shim.min.js'
    });
  }
};
