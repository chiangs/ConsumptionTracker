angular.module('appModule', [ 'static', 'tracker', 'ngRoute', 'nav' ]).config(
		function($routeProvider) {
			$routeProvider.when('/', {
				template : '<tracker-list></tracker-list>'
			}).when('/stats',{
				template : '<stats></stats>'
			}).when('/contact', {
				template : '<contact></contact>'
			}).when('/item/:id', {
				template : '<tracker-show></tracker-show>'
			}).otherwise({
				template : '<error></error>'
			})
		});