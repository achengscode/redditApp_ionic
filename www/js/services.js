angular.module("starter.services", [])

.factory("article", function() {
	return {
		get: function(id) {
			return id;
		}
	}
});