/**scope
 * Created by dw on 14-8-28.
 */
angular.module('activityappApp')
    .controller('CreateCtrl', function ($scope, $location) {

        $scope.add_activity = function () {
            var activity_name = $scope.activity_name
            var activity = JSON.parse(localStorage.getItem('activity')) || []
            activity.push(activity_name)
            localStorage.setItem('activity', JSON.stringify(activity));
            $location.path('/');
        }

        $scope.changer = function () {

            var activity = JSON.parse(localStorage.getItem('activity')) || []
//
            for (i = 0; i < activity.length; i++) {
                console.log(1);
                if ($scope.activity_name == activity[i]) {
                    $scope.warnning = true;
                    break;
                }
                else {
                    $scope.warnning = false;
                }
            }
        }
        $scope.btn_show = localStorage.getItem('activity')

        $scope.back_to_list = function () {
            $location.path('/')
        }
    })