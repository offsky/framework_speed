'use strict'; //http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/

// Declare app level module which depends on filters, and services
angular.module('test', []);



angular.module('test').controller('testCtl', ['$scope', '$rootScope', function($scope, $rootScope) {

	console.log("controller");

	$scope.items = [];
	$rootScope.loading = "Loading";
	
	//Adds num more rows
	$scope.add = function() {
		for(var i = 0;i<5000;i++) {
			var cols = [1,1,1,1,1,1,1,1,1,1,1,1,1];
			$scope.items.push({"name":"Item"+i,"text":"This is "+i+" comment","c":cols});
		}
	}

	$rootScope.loading = "Ready";

	$scope.add();

	$scope.click = function(i,index) {
		$scope.items[index].c[i]++;
	}

}]);

