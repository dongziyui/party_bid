/**
 * Created by dw on 14-8-28.
 */
angular.module('activityappApp')
    .controller('ListCtrl', function ($scope, $location) {
      $scope.back_to_create = function ()
        {
            $location.path('/create')
        }
      $scope.activities=[]


    })