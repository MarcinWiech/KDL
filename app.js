'use strict';


var myApp = angular.module('MyApp', [
    'ngRoute',
    'ngMaterial',
    'ngMessages',
    'material.svgAssetsCache',
    'myApp.newShipment',
    'myApp.myShipments',
    'myApp.newConsignment',
    'myApp.myConsignments',
    'myApp.templates',
    'myApp.finishedShipments',
    'myApp.manageOfferedShipments',
    'myApp.changeOfCustody',
    'myApp.shipmentHistory',
    'myApp.companyScans',
    'myApp.map',
    'myApp.employeesInvolved',
    'myApp.consignmentScans',
    'myApp.editConsignment',
]);

    myApp.controller('sidenavCtrl', function($scope, $location) {
        $scope.selectedMenu = 'dashboard';
        $scope.collapseVar = 0;

        $scope.check = function (x) {

            if (x == $scope.collapseVar)
                $scope.collapseVar = 0;
            else
                $scope.collapseVar = x;
        };
        $scope.multiCheck = function (y) {

            if (y == $scope.multiCollapseVar)
                $scope.multiCollapseVar = 0;
            else
                $scope.multiCollapseVar = y;
        };
    });

    myApp.config(["$routeProvider", function($routeProvider){

        $routeProvider
            .when('/home', {
                templateUrl: 'views/home/home.html',
                controller: 'sidenavCtrl'
            })
            .when('/views/newShipment/newShipment', {
                templateUrl: '/newShipment.html',
            })
            .when('/views/myShipments/myShipments', {
                templateUrl: '/myShipments.html',
            })
            .when('/views/newConsignment/newConsignment', {
                templateUrl: '/newConsignment.html',
            })
            .when('/views/myConsignments/myConsignments', {
                templateUrl: '/myConsignments.html',
            })
            .when('/views/templates/templates', {
                templateUrl: '/templates.html',
            })
            .when('/views/finishedShipments/finishedShipments', {
                templateUrl: '/finishedShipments.html',
            })
            .when('/views/manageOfferedShipments/manageOfferedShipments', {
                templateUrl: '/manageOfferedShipments.html',
            })
            .when('/views/changeOfCustody/changeOfCustody', {
                templateUrl: '/changeOfCustody.html',
            })
            .when('/views/shipmentHistory/shipmentHistory', {
                templateUrl: '/shipmentHistory.html',
            })
            .when('/views/scans/companyScans/companyScans', {
                templateUrl: '/companyScans.html',
            })
            .when('/views/map/map', {
                templateUrl: '/map.html',
            })
            .when('/views/employeesInvolved/employeesInvolved', {
                templateUrl: '/employeesInvolved.html',
            })
            .when('/views/scans/consignmentScans', {
                templateUrl: '/consignmentScans.html',
            })
            .when('/views/editConsignment/editConsignment', {
                templateUrl: '/editConsignment.html',
            })
            .otherwise({
            redirectTo: '/home'
        });
    }]);