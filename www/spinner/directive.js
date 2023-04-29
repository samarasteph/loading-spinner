var mod = angular.module('spinnerMod', []);

mod.directive('spinner', function() {
	return {
		templateUrl: 'spinner/spinner-template.html',
		restrict: 'E',
		scope: {
			state: '=start'
		}
	}

});
