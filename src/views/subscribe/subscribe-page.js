angular.module("subscribeEmail",['ngResource']).controller("subscribeEmailCtrl",subscribeEmail).factory("getAllSubscribeUser",getAllSubscribeUser);

function subscribeEmail($scope) {
}
function getAllSubscribeUser($resource) {
    return $resource("/api/getAllSubscribeUser",{}, {
        getAllUsers: {
            method:'get',
            isArray:true
        }
    });
}