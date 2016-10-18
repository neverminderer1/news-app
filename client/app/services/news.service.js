(function () {
    'use strict';

    var app = angular.module('myApp');

    app.factory('News', ['$resource', News]);

    function News ($resource) {

        var params = {
            id: '@id'
        };

        var actions = {
            get: {
                isArray: false
            }
        };

        return $resource('/api/list/:id', params, actions);
    };

})();