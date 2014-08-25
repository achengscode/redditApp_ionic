angular.module("starter.controllers", [])

.controller("MenuCtrl", function($scope){})

.controller("HomeCtrl", function($scope, $http){
	this.jsonData = null;

	ionic.DomUtil.ready(function () {
		// get the reddit front page
		var response = $http.get("http://www.reddit.com/.json");
		response.success(function (data, status, headers, config){
			this.jsonData = data;
			console.log(this.jsonData);
		});
		response.error(function(data, status, headers,config ){
			alert("uhoh, an error " + status + " occured");
		});
	});
});
