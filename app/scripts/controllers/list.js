/**
 * Created by dw on 14-8-28.
 */
angular.module('activityappApp')
    .controller('ListCtrl', function ($scope, $location) {
      $scope.back_to_create = function ()
        {
            $location.path('/create')
        }
       $scope.activities=JSON.parse(localStorage.getItem('activity'))
        console.log($scope.activities)

       $scope.go_to_action=function(){
           $location.path('/active')
       }

    })
