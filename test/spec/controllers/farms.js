'use strict';

describe('Controller: FarmsCtrl', function () {

  // load the controller's module
  beforeEach(module('bovcontrolApp'));

  var FarmsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FarmsCtrl = $controller('FarmsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
