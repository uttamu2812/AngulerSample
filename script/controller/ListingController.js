mainApp.controller('ListingController',['$rootScope','$scope','Factory', function($rootScope,$scope,Factory){

    // A function to do some act on paging click
    // In reality this could be calling a service which 
    // returns the items of interest from the server
    // based on the page parameter
$scope.show=false;
    $scope.appliedFilter=[];
    $scope.applied=false;
    $rootScope.showMessage=false;
    $scope.userToBeApproveList=[];

    $scope.DoCtrlPagingAct = function(text, page, pageSize, total){
        console.log({text, page, pageSize, total});
        
    };
    /* FOR POST RELATED */

  $scope.getPostsTobeApprove=function(){
    Factory.getPostsTobeApprove(function(data){
      
      $scope.posts= data.posts;
      console.log($scope.posts);
    });
  }
   $scope.getApprovedPosts=function(){
    Factory.getApprovedPosts(function(data){
      
      $scope.posts= data.posts;
      console.log($scope.posts);
    });
  }
  $scope.getBlogApproveFilterData = function(){
 Factory.getBlogApproveFilterData(function(data){

  $scope.blogApproveFilterData= data.filter;
  console.log( $scope.blogApproveFilterData);
});

};
    /*FOR POST RELATED ENDED*/
    /*USER RELATED */
     $scope.approveUser=function(user){

        //if approved success
        for(i in $scope.userToBeApproveList){
            if($scope.userToBeApproveList[i]==user){
               $scope.userToBeApproveList.splice(i, 1);
               break;
           }
       }
       $rootScope.showMessage=true;
       $rootScope.responseMessage=user.firstName+" "+user.middleName+" "+user.lastName+" has been approved successfully.";
       $rootScope.showSuccess($rootScope.responseMessage);
      
   }
   $scope.rejectUser=function(user){
         //if rejected success
         for(i in $scope.userToBeApproveList){
            if($scope.userToBeApproveList[i]==user){
               $scope.userToBeApproveList.splice(i, 1);
               break;
           }
       }
       $rootScope.showMessage=true;
       $rootScope.responseMessage=user.firstName+" "+user.middleName+" "+user.lastName+" has been rejected successfully.";
        $rootScope.showWarning($rootScope.responseMessage);
   }
   $scope.getApprovedUserList=function(registeredUserFilterData){
    Factory.getApprovedUserList(function(data){

      $scope.approvedUserList= data.userList;
      console.log( $scope.approvedUserList);
  });
};

$scope.getUserToBeApproveList=function(){
    Factory.getUserToBeApproveList(function(data){

      $scope.userToBeApproveList= data.userList;
      console.log( $scope.approvedUserList);
  });
};


$scope.getRegisteredUserFilterData = function(){
 Factory.getRegisteredUserFilterData(function(data){

  $scope.registeredUserFilterData= data.filter;
  console.log( $scope.registeredUserFilterData);
});

};

$scope.getUserApproveFilterData = function(){
 Factory.getUserApproveFilterData(function(data){

  $scope.userApproveFilterData= data.filter;
  console.log( $scope.userApproveFilterData);
});

};
/*USER RELATED END*/
/*PHOTO RELATED*/
$scope.getPhotoApproveFilterData = function(){
 Factory.getPhotoApproveFilterData(function(data){

  $scope.photoApproveFilterData= data.filter;
  console.log( $scope.photoApproveFilterData);
});

};
    
 /*PHOTO RELATED END*/  
   /*If any option is selected then Apply All option will be active*/
   $scope.anyValueSelected=function(filterList){
    var isSelected=false;
    for (i in filterList) {
        if(filterList[i].value!=null && filterList[i].value.length!=0){
            isSelected=true;
            break;
        }else{
         isSelected=false;  
     }
 }
 console.log("isSelected "+isSelected);

 return isSelected;
}
/*If any option is deleted */
$scope.removeAppliedValue=function(attribute,value){
    for (i in attribute.value) {
        if (attribute.value[i] ==value) {
            attribute.value.splice(i, 1);
            break;
        }
    }

}
$scope.clearAllSelectedValue=function(filterList){
    for (i in filterList) {
        filterList[i].value=null;
    }
    
}
/*After clicking apply option */
$scope.applyFilter=function(filter){

    $scope.appliedFilter.push(filter.value);
    console.log("applied "+ $scope.appliedFilter);
    $scope.applied=true;
}
/*After clicking apply all option */
$scope.applyAllFilter=function(filter){

    appliedFilter.push(filter);
}


}]);