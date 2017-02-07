var models=require("../../models");
var assert=require("chai").assert;

var userService=require("./userService");

describe("test userService", function(done) {
    console.log("hello");

    beforeEach(function(done) {
        console.log("before each");

        models.sequelize.sync({force:true}).then(function() {

            seedUser().then(function(results) {
                console.log(results);
                done();
            }, function(error) {
                console.log(error);
                done(error);
            })

        }, function(error) {
            done(error);
        })
    });


    describe("test searUserByEmail --- found", function(done) {
        userService.searUserByEmail("wenhao.lin@gmail.com").then(function(user) {
            console.log(user);

            done(null);
        }, function(error) {
            done(error);
        })
    });





    function seedUser() {
        var User=models.User;
        return User.bulkCreate([{
            email:"wenhao.lin@gmail.com",
            password:"P@ssword1",
            firstName:"wenhao",
            lastName: "lin",
            phone:"12345678"
        }])
    }

});