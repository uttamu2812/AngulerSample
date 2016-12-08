mainApp.controller('LoginController',['$rootScope','$scope','Factory','$localStorage', function($rootScope,$scope,Factory,$localStorage){

	$scope.user=null;
	$scope.logged=false;
	if(!$localStorage.logged){
	$localStorage.user = $scope.user;
	$localStorage.logged = $scope.logged;
	}

	$rootScope.user=$localStorage.user;
	$rootScope.logged=$localStorage.logged;
		
	console.log("user logged-"+$localStorage.logged);		
	$scope.entry=function(){
		Factory.getUserDetails(function(data){
			$scope.logged=true;
			$scope.user= data.user;
			$localStorage.user = $scope.user;
			$localStorage.logged = $scope.logged;
			$rootScope.user=$localStorage.user;
			$rootScope.logged=$localStorage.logged;
			console.log("user is-"+$rootScope.user);
			
		});
	}
	$scope.exit=function(){
		Factory.getUserDetails(function(data){
			$scope.logged=false;
			$scope.user=null;
			$localStorage.user = $scope.user;
			$localStorage.logged = $scope.logged;
			$rootScope.user=$localStorage.user;
			$rootScope.logged=$localStorage.logged;
			
			
		});
	}

}]);