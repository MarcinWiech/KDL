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
    'myApp.customs',
    'myApp.companyDashboard',
]);

    myApp.controller('indexCtrl',[ '$scope','$rootScope','$location','$route', function($rootScope, $scope, $location, $route) {

        /*
          //$scope.pathUrl = $route.current.$$route.originalPath;

        if($scope.pathUrl === '/customsDashboard') {
            $scope.customsView = false;
        }
        else {
            $scope.customsView = true;
        }
         */

        //refresh problem!!!!!!!!!!
        if(!('customsView' in localStorage)) {
            window.localStorage.setItem('customsView', false);
        }
        $scope.customsView = window.localStorage.getItem('customsView');

        $scope.isCustomsView = function() {



            $scope.customsView = !$scope.customsView;

            if($scope.customsView === true){
                $location.path('/customsDashboard');
            }
            else {
                $location.path('/companyDashboard');
            }
            window.localStorage.setItem('customsView', $scope.customsView);
        };
    }]);

    myApp.config(["$routeProvider", function($routeProvider){

        $routeProvider
            .when('/home', {
                templateUrl: 'views/home/home.html',
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
            .when('/views/companyDashboard/companyDashboard', {
                templateUrl: '/companyDashboard.html',
            })
            .when('/views/customs/html/customsDashboard', {
                templateUrl: '/customsDashboard.html',
            })
            .otherwise({
            redirectTo: '/home'
        });
    }]);