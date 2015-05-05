'use strict';

describe('Controller: FarmcreateCtrl', function () {

  // load the controller's module
  beforeEach(module('bovcontrolApp'));

  var FarmcreateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FarmcreateCtrl = $controller('FarmcreateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
