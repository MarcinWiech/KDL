'use strict';

angular.module('myApp.companyDashboard', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/companyDashboard', {
            templateUrl: 'views/companyDashboard/companyDashboard.html',
            //controller: 'companyDashboardCtrl'
        })
            .when('/3SCI', {
                templateUrl: 'views/companyDashboard/3SCI.html',
                //controller: 'companyDashboardCtrl'
        });

    }]);