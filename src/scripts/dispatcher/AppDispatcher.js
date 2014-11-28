'use strict';

var Dispatcher = require('../lib/Dispatcher.js');
var copyProperties = require('react/lib/copyProperties');

var _ = require('lodash');

var AppDispatcher = copyProperties(new Dispatcher(), {

  handleAction: function(name, params) {
    if(_.isUndefined(name)) {
      console.error('Undefined name');
    }
    this.dispatch({
      actionType: name,
      params: params || {}
    });
  },

}, Dispatcher);

module.exports = AppDispatcher;
