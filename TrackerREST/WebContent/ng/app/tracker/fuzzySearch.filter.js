angular.module('appModule')
.filter('fuzzySearch', function() {
  return function(list, text) {
    if (!text) return list;
    var results = [];
    list.forEach(function(consumable) {
    	for (var p in consumable) {
//    		if (typeof consumable[p] !== 'string') {
//    			continue;
//    		}
    		if(String (consumable[p]).toLowerCase().includes(text.toLowerCase())) {
    			return results.push(consumable);
    		}
    	}
    }) // end forEach
    return results;
  }
  // end function
})
