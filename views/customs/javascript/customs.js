'use strict';

angular.module('myApp.customs', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
        .when('/customsDashboard', {
            templateUrl: 'views/customs/html/customsDashboard.html',
        })
        .when('/analyseEntity', {
            templateUrl: 'views/customs/html/analyseEntity.html',
        })
        .when('/analyseConsignment', {
            templateUrl: 'views/customs/html/analyseConsignment.html',
        })
        .when('/analyseShipment', {
            templateUrl: 'views/customs/html/analyseShipment.html',
        })
        .otherwise({
            templateUrl: 'views/customs/html/customsDashboard.html',
        })
        .otherwise({
            redirectTo: '/customsDashboard',
        });

    }])

    .controller('dashboardCtrl', ['$scope', '$route', function ($scope, $route) {

        $scope.viewProductsOrCountries = false;
        $scope.location = $route.current.$$route.originalPath;
    }]);