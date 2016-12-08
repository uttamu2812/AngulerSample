mainApp.controller('IndexController',['$rootScope','notifications', function($rootScope, notifications){
$rootScope.showError = function (responseMessage) {
		notifications.showError(responseMessage);
	};

	$rootScope.showWarning = function (responseMessage) {
		notifications.showWarning(responseMessage);
	};

	$rootScope.showSuccess = function (responseMessage) {
		notifications.showSuccess(responseMessage);
	};

	$rootScope.closeAll = function () {
		notifications.closeAll();
	};
   
}]);