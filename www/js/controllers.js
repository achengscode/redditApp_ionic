angular.module("starter.controllers", [])

.controller("MenuCtrl", function($scope){})

.controller("HomeCtrl", function($scope, $http) {
	// $scope represents the page
	$scope.links = null; 
	// get the reddit front page when DOM is ready
	var response = $http.get("http://www.reddit.com/.json");
	response.success(function (data, status, headers, config){
		$scope.links = data.data.children;
	});
	response.error(function(data, status, headers,config ){
		alert("uhoh, an error " + status + " occured");
	});
})

.controller("CommentCtrl", function($scope, $http, $stateParams, article) {
	$scope.articleID = article.get($stateParams.id);
	$scope.articleContent = null;
	var response = $http.get("http://www.reddit.com/" + $stateParams.id + "/.json");
	response.success(function (data, status, headers, config) {
		$scope.content = data[0].data.children[0];
		$scope.comments = data[1];
		$scope.loading = false;
	});
	response.error(function(data, status, headers, config){
		alert("uhoh, an error occured");
	})
});
