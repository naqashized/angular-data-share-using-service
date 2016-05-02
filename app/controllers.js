var module = angular.module('dataApp.main')

module.controller('SubmitNameController',function($scope,$location, dataShareService) {
   
    $scope.name="";
    $scope.submit = function() {
        dataShareService.setName(this.name)
        $location.path('/name');
    };
});

module.controller('ShowNameController',function($scope,dataShareService) {

    $scope.name='no name received yet.';
    $scope.$on('name_shared', function() {
        $scope.name = dataShareService.name;

    });

});

