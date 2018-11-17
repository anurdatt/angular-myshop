'use strict';

/**
 * @ngdoc function
 * @name myShopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myShopApp
 */
angular.module('myShopApp')
  .controller('MainCtrl', ['$scope', 'Page', 'HomeService', function ($scope, Page, HomeService) {

    /* var pageTitle = Page.title() + ' - Home'; */
    Page.setTitle('Home');

    HomeService.getProductCategories()
    .then(function(response) {
      $scope.categories = response.data;
    }, function() {
    	alert('There was an error please try again!');
    });

    HomeService.getProductDeals()
    .then(function(response) {
      $scope.deals = response.data;
    }, function() {
    	alert('There was an error please try again!');
    });

  }]);
