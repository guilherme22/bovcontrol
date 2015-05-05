'use strict';

describe('Controller: FarmscreateCtrl', function () {

  // load the controller's module
  beforeEach(module('bovcontrolApp'));

  var FarmscreateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FarmscreateCtrl = $controller('FarmscreateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
