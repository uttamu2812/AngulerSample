mainApp.controller('ProfileController',['$rootScope','$scope','Factory', function($rootScope,$scope,Factory){
	$scope.user={};
	$scope.showAddNew=false;

	$scope.cancel=function(){
		$scope.showAddNew=false;
		$scope.newTimeline=null;
	}
	$scope.getUserDetails=function(){
		Factory.getUserDetails(function(data){

			$scope.user= data.user;
			if($scope.user.interests!=null){
				$scope.oldInterest=$scope.user.interests;
			}else{
				$scope.oldInterest=[];
			}
			
			console.log($scope.user);
		});
	}
	$scope.addNewInterest=function(newInterest){
		$scope.user.interests.push(newInterest);
		$scope.newInterest=null;
	}
	$scope.removeInterest=function(interest){
		for(i in $scope.user.interests){
			if($scope.user.interests[i]==interest){
				$scope.user.interests.splice(i, 1);
			}
		}
		
	}
	$scope.saveInterest=function(user){
		$rootScope.showMessage=true;
        $rootScope.responseMessage=" New interest(s) has been added successfully.";
        $rootScope.showSuccess($rootScope.responseMessage);
      
	}
	$scope.cancelInterestEdit=function(){
		$scope.user.interests=$scope.oldInterest;
		$scope.showEditInterest=!$scope.showEditInterest;
		console.log($scope.oldInterest);
      
	}
	$scope.getTimeLine=function(){
	 
			$scope.types=['Education','Work'];
			$scope.events =[];
			Factory.getUserTimeLine(function(data){

			$scope.events = data.timeLine;
			for(i in $scope.events){
			setbadgeClass($scope.events[i]);
			
			}
			console.log($scope.events);
		});
		
	}
		$scope.addEvent = function() {
		setbadgeClass($scope.newTimeline);
		$scope.events.push($scope.newTimeline);
		$scope.newTimeline={};
		$rootScope.showMessage=true;
        $rootScope.responseMessage=" New timeline has been added successfully.";
         $rootScope.showSuccess($rootScope.responseMessage);
       

	};
	$scope.deleteEvent = function(event) {
		for(i in $scope.events){
			if($scope.events[i]==event){
				$scope.events.splice(i, 1);
			}
		}
		$rootScope.showMessage=true;
        $rootScope.responseMessage=" Timeline been deleted successfully.";
         $rootScope.showSuccess($rootScope.responseMessage);
       

	};
		$scope.updateEvent = function(event) {
		setbadgeClass(event);
		event.editDisable=true;
		$rootScope.showMessage=true;
        $rootScope.responseMessage=" Timeline been updated successfully.";
        $rootScope.showSuccess($rootScope.responseMessage);

	};
	setbadgeClass=function(event){
			if(event.type=='Education'){
					event.badgeClass='info';
					event.badgeIconClass= 'glyphicon-check';
					event.editDisable=true;
				}else if(event.type=='Work'){
					event.badgeClass='warning';
					event.badgeIconClass= 'glyphicon-credit-card';
					event.editDisable=true;
				}else{
						event.badgeClass='default';
						event.badgeIconClass= 'glyphicon-credit-card';
						event.editDisable=true;
				}
	}
	// optional: not mandatory (uses angular-scroll-animate)
	$scope.animateElementIn = function($el) {
		$el.removeClass('hidden');
		$el.addClass('bounce-in');
	};

	// optional: not mandatory (uses angular-scroll-animate)
	$scope.animateElementOut = function($el) {
		$el.addClass('hidden');
		$el.removeClass('bounce-in');
	};
}]);