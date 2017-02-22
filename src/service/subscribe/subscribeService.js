var models= require("../../models");
var Subscribe = models.Subscribe;

var subscribeService = {
    subscribeEmail:subscribeEmail
}
function subscribeEmail(email) {
    return new Promise(function(resolve, reject){
        Subscribe.create({email:email}).then(function (data) {
            resolve(data);
        },function (err) {
            reject(err);
        })
    })
}
module.exports=subscribeService;