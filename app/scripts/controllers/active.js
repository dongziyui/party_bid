/**
 * Created by dw on 14-8-29.
 */
angular.module('activityappApp')
    .controller('ActiveCtrl', function ($scope, $location) {
        $scope.go_to_list=function(){
            $location.path('/')
        }
    })