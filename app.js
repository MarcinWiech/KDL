'use strict';

var myApp = angular.module('MyApp', [
    'ngRoute',
    'ngMaterial',
    'ngMessages',
    'material.svgAssetsCache',
    'myApp.customs',
    'myApp.company',
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
            window.localStorage.setItem('customsView', JSON.stringify(false));
        }
        $scope.customsView = JSON.parse(window.localStorage.getItem('customsView'));

        $scope.isCustomsView = function() {

            $scope.customsView = !$scope.customsView;

            if($scope.customsView == true){
                $location.path('/customsDashboard');
            }
            else {
                $location.path('/companyDashboard');
            }
            window.localStorage.setItem('customsView', $scope.customsView);
            return $scope.customsView;
        };
    }]);

    myApp.config(["$routeProvider", function($routeProvider){

    $routeProvider
        .when('/views/company/html/newShipment', {
            templateUrl: '/newShipment.html',
        })
        .when('/views/company/html/myShipments', {
            templateUrl: '/myShipments.html',
        })
        .when('/views/company/html/newConsignment', {
            templateUrl: '/newConsignment.html',
        })
        .when('/views/company/html/myConsignments', {
            templateUrl: '/myConsignments.html',
        })
        .when('/views/company/html/templates', {
            templateUrl: '/templates.html',
        })
        .when('/views/company/html/finishedShipments', {
            templateUrl: '/finishedShipments.html',
        })
        .when('/views/company/html/manageOfferedShipments', {
            templateUrl: '/manageOfferedShipments.html',
        })
        .when('/views/company/html/changeOfCustody', {
            templateUrl: '/changeOfCustody.html',
        })
        .when('/views/company/html/shipmentHistory', {
            templateUrl: '/shipmentHistory.html',
        })
        .when('/views/company/html/companyScans', {
            templateUrl: '/companyScans.html',
        })
        .when('/views/company/html/map', {
            templateUrl: '/map.html',
        })
        .when('/views/company/html/employeesInvolved', {
            templateUrl: '/employeesInvolved.html',
        })
        .when('/views/company/html/consignmentScans', {
            templateUrl: '/consignmentScans.html',
        })
        .when('/views/company/html/editConsignment', {
            templateUrl: '/editConsignment.html',
        })
        .when('/views/company/html/companyDashboard', {
            templateUrl: '/companyDashboard.html',
        })
        .when('/views/customs/html/customsDashboard', {
            templateUrl: '/customsDashboard.html',
        })
        .otherwise({
            redirectTo: '/customsDashboard'
        });
    }]);
