(function() {
    'use strict';

    var app = angular.module('myApp', ['ui.router','ngResource']);

    app.config(['$stateProvider', '$locationProvider', '$httpProvider', Config]);
    app.run(['$rootScope', '$location', '$http', '$q', Run]);

    function Config ($stateProvider, $locationProvider) {

        $stateProvider
            .state('news', {
                url: '/',
                template: 	'<news-list news="$resolve.newsData"></news-list>',
                component: 	'newsList',
                resolve: {
                    newsData: ['News', function (News) {
                        return News.get().$promise;
                    }]
                }
            })
            .state('item', {
                url: '/item/{id}',
                template: '<news-item news="$resolve.newsData"></news-item>',
                component: 	'newsItem',
                resolve: {
                    newsData: ['News', '$stateParams', function (News, $stateParams) {
                        if ($stateParams.id) {
                            return News.get({id: $stateParams.id}).$promise;
                        };

                        return false;
                    }]
                }
            });

        $locationProvider.html5Mode({requireBase: false, enabled: true});

    };

    function Run ($rootScope, $location, $http, $q, News) {

    };

})();