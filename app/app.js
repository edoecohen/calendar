angular.module('calendarDemoApp', [])

.controller("MainCtrl", ['$scope', '$http',
	function($scope, $http){
		$scope.range = [];
		$scope.months = [];
		$scope.getRange = function() {
			$scope.range = CalendarRange.getMonthlyRange(new Date($scope.selectedMonth.label + ", " + $scope.selectedYear));
		};
		

		/*$scope.getMonths = function () {
			$http.get("./months.json")
			.success(function(data) {
				$scope.months = data.months;
			});

		};

		$scope.getMonths();*/
		
		$scope.months = [
			{ label: "January", value: 0 },
			{ label: "February", value: 1 },
			{ label: "March", value: 2 },
			{ label: "April", value: 3 },
			{ label: "May", value: 4 },
			{ label: "June", value: 5 },
			{ label: "July", value: 6 },
			{ label: "August", value: 7 },
			{ label: "September", value: 8 },
			{ label: "October", value: 9 },
			{ label: "November", value: 10 },
			{ label: "December", value: 11 }
		];


		var today = new Date();
		var thisMonth = today.getMonth();
		var thisYear = today.getFullYear();

		$scope.selectedMonth = $scope.months[thisMonth];
		$scope.selectedYear = thisYear;
		console.log($scope.selectedYear);

		$scope.getYearRange = function() {
			$scope.years = [];
			
			var thisYear = today.getFullYear();
			$scope.years.push(thisYear);
			nextYear = lastYear = thisYear;
			for( i = 0; i < 20; i++) {
				nextYear++;
				lastYear--;
				$scope.years.push(nextYear);
				$scope.years.push(lastYear);
			};
			$scope.years.sort(function(a, b){return a-b});
			return $scope.years;
		};
		$scope.getYearRange();
		$scope.getRange();
	}
]);


