var module = angular.module('dataApp.main')
module.factory('dataShareService',function($rootScope,$timeout){
    var service = {};
    this.name = '';
    service.setName = function(name){
        this.name = name;
        console.log("name in service =>"+name);
        $timeout(function(){
            $rootScope.$broadcast('name_shared');
        },100);
    };
    service.getName = function(){
        return this.name;
    };
    return service;
});