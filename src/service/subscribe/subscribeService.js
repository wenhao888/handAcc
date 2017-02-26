var models= require("../../models");
var Subscribe = models.Subscribe;

var subscribeService = {
    subscribeEmail:subscribeEmail,
    unSubscribe:unSubscribe,
}
function subscribeEmail(email) {
    return new Promise(function(resolve, reject){
        Subscribe.find({where:{email:email}}).then(function (data) {
            if(data){
                Subscribe.update({active:true},{where:{email:email}}).then(function (subscibe) {
                    resolve(subscibe);
                },function (err) {
                    reject(err);
                });
            }else {
                Subscribe.create({email:email,active:true}).then(function (subscibe) {
                    resolve(subscibe);
                },function (err) {
                    reject(err);
                });
            }
        },function (err) {
            reject(err);
        })
    })
}
function unSubscribe(email) {
    return new Promise(function (resolve,reject) {
        Subscribe.update({active:false},{where:{email:email}}).then(function (data) {
            resolve(data);
        },function (err) {
            reject(err);
        })
    })
}
module.exports=subscribeService;