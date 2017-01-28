var angular=require("angular");
var issue=angular.module("issue",['ui.select']);

issue.controller("issueController", function () {
    vm = this;
    vm.submitted = false;

    vm.priorities = [{
        'id': 0,
        'value': 'normal'
    }, {
        'id': 1,
        'value': 'high'
    }, {
        'id': 2,
        'value': 'urgent'
    }];

    vm.selectedPriority = vm.priorities[0];

    vm.cancel =function () {
        window.history.back();
    };

    vm.submit = function () {
        $scope.submitted =true;
    }



});
