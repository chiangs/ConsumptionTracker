angular.module('tracker').factory('trackerService',function($http,  $filter) {
	var service = {};

	var BASE_URL = 'http://localhost:8080/TrackerREST/api/consumables';

	var todos = [];
	
	service.index = function() {
		return $http({
			method : 'GET',
			url : BASE_URL 
		}).then(function(res) {
			return res;
		})
	}
	
	service.show = function(id) {
		return $http({
			method : 'GET',
			url : BASE_URL + '/item/' + id
		})
	}

	service.create = function(consumable) {
		return $http({
			method : 'POST',
			url : BASE_URL,
			headers : {
				'Content-Type' : 'application/json'
			},
			data : consumable
		})
	};

	service.destroy = function(id) {
		return $http({
			method : 'DELETE',
			url : BASE_URL + '/item/' + id
		})
	}

	service.update = function(consumable) {
		
		return $http({
			method : 'PUT',
			url : BASE_URL + '/item/' + consumable.id,
			headers : {
				'Content-Type' : 'application/json'
			},
			data : consumable
		})
	};

	return service;
})