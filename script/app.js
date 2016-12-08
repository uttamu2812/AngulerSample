  var mainApp = angular.module("mainApp", ['ngRoute','ngResource','ui.bootstrap','checklist-model','paging','ui.bootstrap.datetimepicker','ngSanitize','ngNotificationsBar','angular-timeline','angular-scroll-animate','ngAnimate','ngStorage']);
 

      mainApp.config(['$routeProvider',
         function($routeProvider) {
            $routeProvider.
               when('/', {
                  templateUrl: './view/partials/home.html',
                  controller: 'HomeController'
               }).
                when('/profile', {
                  templateUrl: './view/partials/profile.html',
                  controller: 'ProfileController'
               }).
               when('/registered_users', {
                  templateUrl: './view/partials/registered_users.html',
                  controller: 'ListingController'
               }).
               when('/posts', {
                  templateUrl: './view/partials/approved_posts.html',
                  controller: 'ListingController'
               }).
                when('/action_list', {
                  templateUrl: './view/partials/action_list.html',
                  controller: 'ListingController'
               }).
                when('/test', {
                  templateUrl: './view/partials/slider.html',
                  
               }).
               otherwise({
                  redirectTo: './view/partials/home.html'
               });
         }]);


mainApp.config(['notificationsConfigProvider', function(notificationsConfigProvider){
  notificationsConfigProvider.setHideDelay(3000);
  notificationsConfigProvider.setAutoHide(true);
  notificationsConfigProvider.setAcceptHTML(true);
}]);



mainApp.directive('header', function () {
return {
restrict: 'A', //This menas that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
replace: true,
scope: {user: '='}, // This is one of the cool things :). Will be explained in post.
templateUrl: "./view/directive/header.html",
controller:"LoginController"
}
});        

mainApp.directive('footer', function () {
return {
restrict: 'A', //This menas that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
replace: true,
templateUrl: "./view/directive/footer.html",
controller: ['$scope', '$filter', function ($scope, $filter) {
// Your behaviour goes here :)
}]
}
});       

// Store the HTML template for each type of field in $templateCache.
mainApp.run(['$templateCache', function ($templateCache) {
  $templateCache.put('filter/checkbox.html','<div  ng-repeat="o in options" >  <input  ng-required="field.required" type="checkbox" checklist-model="field.value" checklist-value="o"> {{o.name}}</div>');
  $templateCache.put('filter/date.html','<div class="control-group input-append"><input type="text" ng-model="field.value" data-date-format="mm/dd/yyyy" bs-datepicker  ng-required="field.required" ><button type="button" class="btn" data-toggle="datepicker"><i class="fa fa-calendar"></i></button>  </div>');
   $templateCache.put('filter/radio.html', '<div ><div  ng-repeat="o in options|filter:searchText"><input  type="radio" ng-value="{{o}}" ng-model="field.value"/> {{o.name}}</div></div>');

 }]);

// <filter-data> directive
mainApp.directive('filterData', function($parse, $compile, $templateCache) {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      field: '=which'
    },
    link: function(scope, element, attrs) {

      var field = scope.field;  // This is the field definition.

      // Prepare the scope so that the field renders properly when linked.
      if (field.options) {
        scope.options = field.options;
      }
     
      var tid = 'filter/' + field.type + '.html',
          template = $templateCache.get(tid) || '<div class="alert alert-error">No template found for type "'+ field.type +'".</div>';
      element.html(template);
      $compile(element.contents())(scope);
    }

  };
});

mainApp.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);