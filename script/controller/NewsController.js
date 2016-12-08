mainApp.controller('NewsController',['$scope','Factory', function($scope,Factory){

	 $scope.getNewsSliderData = function(text, page, pageSize, total){
       $scope.myInterval = 3000;
		$scope.newsList=[
		{id:1,title:'news 1',description:'fasgfasgfasgfgas'},
		{id:2,title:'news 2',description:'Descrioptoks'},
		{id:3,title:'news 3',description:'Descrioptoks'},
		{id:4,title:'news 4',description:'fasgfasgfasgfgas'},
		{id:5,title:'news 5',description:'Descrioptoks'}
		]
    };
}]);