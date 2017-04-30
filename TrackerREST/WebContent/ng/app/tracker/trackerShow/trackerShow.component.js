angular.module('tracker')
	.component('trackerShow', {
	templateUrl: 'ng/app/tracker/trackerShow/trackerShow.component.html',
	controller : function($routeParams, trackerService) {
		var vm = this;
		if (!vm.consumable && parseInt($routeParams.id)) {
			trackerService.show(parseInt($routeParams.id)).then(function(res){
				  vm.consumable = res.data;
			  })
		}

		vm.editMode = false;
		vm.editConsumable = null;
		
		
		vm.setEditConsumable = function() {
			vm.editMode = true;
			vm.editConsumable = angular.copy(vm.consumable);
		}		
		
		vm.cancel = function() {
			vm.editMode = false;
			vm.editConsumable = null;
			vm.backButton();
		}
		
		vm.save = function() {
			vm.onUpdate({consumable : vm.editConsumable});
			vm.editConsumable = null;
			vm.editMode = false;
		}
		
		vm.backButton = function() {
			if (parseInt($routeParams.id)) {
				$location.path('/')
			} else {
				vm.goBack();
			}
		}
		
		vm.saveButton = function() {
			if (parseInt($routeParams.id)) {
				trackerService.update(vm.editConsumable).then(function(res){
					vm.consumable = res.data;
				});
			} else {
				vm.onUpdate({consumable : vm.editConsumable});
				vm.consumable = vm.editConsumable;
			}
			vm.editConsumable = null;
			vm.editMode = false;
		}
	},
	controllerAs : 'vm',
	bindings : {
		consumable : '<',
		goBack : '&',
		onUpdate : '&'
	}
})
