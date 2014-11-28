'use strict';

describe('Main', function () {
  var ReactPockerApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ReactPockerApp = require('../../../src/scripts/components/ReactPockerApp.jsx');
    component = ReactPockerApp();
  });

  it('should create a new instance of ReactPockerApp', function () {
    expect(component).toBeDefined();
  });
});
