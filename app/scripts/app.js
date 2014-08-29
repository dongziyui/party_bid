'use strict';

/**
 * @ngdoc overview
 * @name activityappApp
 * @description
 * # activityappApp
 *
 * Main module of the application.
 */
angular
  .module('activityappApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider

      .when('/create', {
            templateUrl: 'views/create.html',
            controller: 'CreateCtrl'
      })
        .when('/list', {
            templateUrl: 'views/list.html',
            controller: 'ListCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });

  });
