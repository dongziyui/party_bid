/**
 * Created by dw on 14-8-28.
 */
angular.module('activityappApp')
    .controller('CreateCtrl', function ($scope, $location) {

$scope.add_activity = function(){
    var activity_name = $scope.activity_name;
    console.log(activity_name);
}



    })