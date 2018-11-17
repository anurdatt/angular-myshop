'use strict';

/**
 * @ngdoc function
 * @name myShopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myShopApp
 */
angular.module('myShopApp')
  .controller('AboutCtrl', ['Page', function (Page) {
    Page.setTitle('About');

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
