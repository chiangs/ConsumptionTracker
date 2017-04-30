angular.module('tracker').component('trackerList', {
	templateUrl : 'ng/app/tracker/trackerList/trackerList.component.html',
	controller : function(trackerService, $filter, $location, $scope) {
		var vm = this;
		vm.consumables = [];

		vm.showTable = true;
		vm.selected = null;

		$scope.column = 'id';
		$scope.reverse = false;
		$scope.sortColumn = function(col) {
			$scope.column = col;
			if ($scope.reverse) {
				$scope.reverse = false;
				$scope.reverseclass = 'arrow-up';
			} else {
				$scope.reverse = true;
				$scope.reverseclass = 'arrow-down';
			}
		};

		// remove and change class
		$scope.sortClass = function(col) {
			if ($scope.column == col) {
				if ($scope.reverse) {
					return 'arrow-down';
				} else {
					return 'arrow-up';
				}
			} else {
				return '';
			}
		}

		vm.displayConsumable = function(c) {
			vm.showTable = false;
			vm.selected = c;
		}

		vm.displayTable = function() {
			vm.showTable = true;
			vm.selected = null;
		}

		vm.addToList = function(consumable) {
			trackerService.create(consumable).then(function(res) {
				vm.reload();
			});
		}

		vm.deleteConsumable = function(consumable) {
			trackerService.destroy(consumable.id).then(function(res) {
				vm.reload();
			});
		}

		vm.updateConsumable = function(consumable) {
			trackerService.update(consumable).then(function(res) {
				vm.reload();
			});
		}

		vm.reload = function() {
			trackerService.index().then(function(res) {
				vm.consumables = res.data;
			});
		}

		vm.sortName = function() {

		}

		vm.reload();
	},
	controllerAs : 'vm'
})