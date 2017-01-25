var angular=require("angular");
var issue=angular.module("issue",['ui.select', require('angular-sanitize')]);

issue.controller("issueController",["$scope", function ($scope) {
    $scope.priority="normal";
    $scope.priorities=[{
        id:"0",
        title:"normal"
    }, {
        id:"1",
        title:"high"
    }, {
        id:"2",
        title:"urgent"
    }];

    $scope.priority="0";



}]);
