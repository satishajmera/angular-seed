'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/login.html',
    controller: 'view1Ctrl'
  });
}])

.controller('view1Ctrl', [function() {

}]);