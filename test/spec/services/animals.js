'use strict';

describe('Service: Animals', function () {

  // load the service's module
  beforeEach(module('bovcontrolApp'));

  // instantiate service
  var Animals;
  beforeEach(inject(function (_Animals_) {
    Animals = _Animals_;
  }));

  it('should do something', function () {
    expect(!!Animals).toBe(true);
  });

});
