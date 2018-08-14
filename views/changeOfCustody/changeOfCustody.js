'use strict';

angular.module('myApp.changeOfCustody', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/changeOfCustody', {
            templateUrl: 'views/changeOfCustody/changeOfCustody.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', [function() {

    }]);
