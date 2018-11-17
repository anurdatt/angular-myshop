'use strict';

/**
 * @ngdoc overview
 * @name myShopApp
 * @description
 * # myShopApp
 *
 * Main module of the application.
 */
angular
  .module('myShopApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'SharedModule'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(['$rootScope', 'Page', 'ShopName', function($rootScope, Page, ShopName) {
    $rootScope.Page = Page;
    $rootScope.ShopName = ShopName;
  }])
  .controller('NavCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.isActive = function(viewPath) {
      return viewPath === $location.path();
    };
    
    $scope.gotoAbout = function() {
      $location.path('/about');
    };
  }]);
