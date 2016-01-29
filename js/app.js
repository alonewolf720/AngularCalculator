angular.module('CalcApp', [])
.controller("CalcCtrl", ["$scope", function($scope){
 $scope.num1 = null;
	$scope.num2 = null;
	$scope.ans = null;
	var a = null;
	var b = null;

	$scope.setNum = function(value) {
		if($scope.operator == null) {
			if (a == null) {
				a = value;
			} else {
				a = "" + a + value;
			}
			$scope.num1 = a;
		}
		else if($scope.operator != 'square'){
			if (b == null) {
				b = value;
			} else {
				b = "" + b + value;
			}
			$scope.num2 = b;
		}
	}

	$scope.setOperator = function(value) {
		if($scope.operator == null) {
			$scope.operator = value;
		} else {
			$scope.compute();
			$scope.operator = value;
		}
		
	}

	$scope.compute = function() {
		if ($scope.num1 != null && $scope.num2 != null && $scope.operator != null) {
			if($scope.operator == '+') {
				$scope.ans = parseFloat($scope.num1) + parseFloat($scope.num2);
			} else if ($scope.operator == '-') {
				$scope.ans = parseFloat($scope.num1) - parseFloat($scope.num2);
			}  else if ($scope.operator == 'x') {
				$scope.ans = parseFloat($scope.num1) * parseFloat($scope.num2);
			}  else if ($scope.operator == '/') {
				$scope.ans = parseFloat($scope.num1) / parseFloat($scope.num2);
			}
		}
		else if($scope.num1 != null && $scope.operator == 'square') {
			$scope.ans = parseFloat($scope.num1) * parseFloat($scope.num1);
		}
		$scope.num1 = $scope.ans;
		$scope.num2 = null;
		$scope.operator = null;
		$scope.ans = null;
		a = null;
		b = null;
	}
	
	$scope.clear = function() {
		$scope.num1 = null;
		$scope.num2 = null;
		$scope.ans = null;
		$scope.operator = null;
		a = null;
		b = null;
	}
}]);