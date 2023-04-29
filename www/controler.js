
var spinnerApp = angular.module('spinnerExample', ['spinnerMod']);

spinnerApp.controller('spinnerCtrl', ['$scope', '$interval',  function($scope, $interval){
	$scope.running= false;

  const nb_seconds = 5;
  $scope.seconds = nb_seconds;
  $scope.run = function() {
		if(! $scope.running){
			$scope.running = true;
			$interval(function(){ $scope.running = false; $scope.seconds = nb_seconds }, nb_seconds * 1000, 1);
			$interval(function(){ $scope.seconds -= 1; }, 1000, $scope.seconds-1);

		}
	}	
}]);
