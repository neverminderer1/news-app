(function () {
    'use strict';

    var app = angular.module('myApp');

    app.component('newsList', {
        bindings: {
            news: '='
        },
        templateUrl: 'client/app/components/news-list/news-list.html',
        controller: newsListController
    });

    function newsListController () {
        var self = this;
        this.news = self.news.data;
    }

})();