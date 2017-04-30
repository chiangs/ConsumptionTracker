angular.module('tracker').component('stats', {
	templateUrl : 'ng/app/tracker/stats/stats.component.html',
	controller : function($routeParams, trackerService) {
		var vm = this;

		vm.consumables = [];
		trackerService.index().then(function(res) {
			vm.consumables = res.data;
		});
		
		vm.qtyConsumed = function(category) {
			var counter = 0;
			for (var i = 0; i < vm.consumables.length; i++) {
				if (vm.consumables[i].category == category) {
					counter++;
				}
			}
			return counter;
		}
		
		vm.totalCatCost = function(category) {
			var total = 0;
			for (var i = 0; i < vm.consumables.length; i++) {
				if (vm.consumables[i].category == category) {
					total = total + vm.consumables[i].cost;
				}
			}
			return total;
		}
		
		vm.budgetStatus = function(category) {
			var totalCost = vm.totalCatCost(category);
			if (totalCost > 200)
				return 'danger';
			if (totalCost > 90)
				return 'warning';
			return 'safe';
		}

	},
	controllerAs : 'vm'
})
