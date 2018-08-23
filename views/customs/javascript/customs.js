'use strict';

angular.module('myApp.customs', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
        .when('/customsDashboard', {
            templateUrl: 'views/customs/html/customsDashboard.html',
            //controller: 'customsDashboardCtrl'
        })
        .when('/analyseEntity', {
            templateUrl: 'views/customs/html/analyseEntity.html',
            //controller: 'customsDashboardCtrl'
        })
        .when('/analyseConsignment', {
            templateUrl: 'views/customs/html/analyseConsignment.html',
            //controller: 'customsDashboardCtrl'
        })
        .when('/analyseShipment', {
            templateUrl: 'views/customs/html/analyseShipment.html',
            //controller: 'customsDashboardCtrl'
        })

    }])

    .controller('dashboard', ['$scope', '$route', function ($scope, $route) {


        $scope.location = $route.current.$$route.originalPath;
    }]);