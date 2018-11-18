'use strict';

var SharedModule = angular.module('SharedModule', []);
SharedModule.value('ShopName', "AD's Cake Shop")
.factory('Page', ['ShopName', function(ShopName) {
    var title = ShopName;
    return {
        title: function getTitle() {
            return title;
        },
        setTitle: function setTitle(path) {
            title = ShopName + ' - ' + path;
        }
    };
}]);
