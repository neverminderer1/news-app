(function () {
    'use strict';

    var app = angular.module('myApp');

    app.component('newsItem', {
        bindings: {
            news: '='
        },
        templateUrl: '/client/app/components/news/news.html',
        controller: ['$sce', newsItemController]
    });

    function newsItemController ($sce) {
        var self = this;
        this.item = self.news.data;
        this.item.html = $sce.trustAsHtml(this.item.html);
    };

})();