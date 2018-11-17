'use strict';

SharedModule
.filter('range', function() {
    return function(input, max) {
        var maxi = parseInt(max);
        for(var i=0; i<maxi; i++) {
            input.push(i);
        }
        return input;
    };
});