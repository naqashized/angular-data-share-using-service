angular.module('dataApp.main').controller('NameController',function($scope,$location) {
   
    $scope.name="";
    $scope.submit = function() {
      console.log("name "+this.name);
      $scope.name = this.name;
       $scope.$emit('name', {
       	name:this.name
       });
       $location.path('/name');
    };
    

  });
angular.module('dataApp.name').controller('ParentController',function($scope) {
   
    $scope.name='no name entered yet.';
     $scope.$on('name', function(event, data) { $scope.name=data.name; });
    

  });