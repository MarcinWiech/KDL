'use strict';

angular.module('myApp.customsDashboard', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/customsDashboard', {
            templateUrl: 'views/customsDashboard/customsDashboard.html',
            //controller: 'customsDashboardCtrl'
        });

    }]);