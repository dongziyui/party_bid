/**
 * Created by dw on 14-8-28.
 */
angular.module('activityappApp')
    .controller('CreateCtrl', function ($scope, $location) {
 $scope.add_activity=function(){


     var activity_name=$scope.activity_name
     var activity=JSON.parse(localStorage.getItem('activity')) || []
     activity.push(activity_name)
     localStorage.setItem('activity',JSON.stringify(activity));
     $location.path('/');


 }
    })