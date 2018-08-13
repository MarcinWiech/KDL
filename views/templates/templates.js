'use strict';

angular.module('myApp.templates', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/templates', {
            templateUrl: 'views/templates/templates.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', [function() {

    }]);