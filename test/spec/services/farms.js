'use strict';

describe('Service: Farms', function () {

  // load the service's module
  beforeEach(module('bovcontrolApp'));

  // instantiate service
  var Farms;
  beforeEach(inject(function (_Farms_) {
    Farms = _Farms_;
  }));

  it('should do something', function () {
    expect(!!Farms).toBe(true);
  });

});
