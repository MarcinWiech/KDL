'use strict';

angular.module('myApp.companyDashboard', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/companyDashboard', {
            templateUrl: 'views/companyDashboard/companyDashboard.html',
            //controller: 'companyDashboardCtrl'
        });

    }]);