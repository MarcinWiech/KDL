'use strict';

angular.module('myApp.customsDashboard', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/customsDashboard', {
            templateUrl: 'views/customs/html/customsDashboard.html',
            //controller: 'customsDashboardCtrl'
        });

    }]);