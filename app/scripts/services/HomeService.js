'use strict'; 

angular.module('myShopApp')
.service('HomeService', ['$http', function($http) {
    this.getProductCategories = function() {
        return $http(/* {
           method: "GET",
           url: "models/Category.json"
        } */ {
           method: "GET",
           url: "http://localhost:8080/api/home/getProductCategories"
        });
    };

    this.getProductDeals = function() {
        return $http(/* {
           method: "GET",
           url: "models/Deal.json"
        } */ {
           method: "GET",
           url: "http://localhost:8080/api/home/getProductDeals"
        });
    };
}]);