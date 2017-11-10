// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$filter', 'sort', function ($scope, $filter, sort) {
    $scope.size='';
    $scope.players=[
        for(var i=0; i<$scope.size; i++){
            {
                name:'',
                email:'',
                secretSanta=[],
                assigned = false,
            }
        }];
    $scope.sortedPlayers=[];
    $scope.sortAndSend = function() {
    sort($scope.players).createPairs();
    sendEmail();
}

}]);
