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
            $scope.$digest();
            return $scope.customsView;
        };
    }]);
