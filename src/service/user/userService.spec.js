var models=require("../../models");
var assert=require("chai").assert;

var userService=require("./userService");

describe("test userService", function() {
    this.timeout(15000);

    before(function(done) {
        models.sequelize.sync({force:true}).then(function() {
            seedUser().then(function() {
                done();
            }, function(error) {
                done(error);
            });

        }, function(error) {
            done(error);
        })

    });


    it("test searUserByEmail --- found", function(done) {
        userService.searUserByEmail("wenhao.lin@gmail.com").then(function(user) {
            assert.equal("wenhao.lin@gmail.com", user.email);
            done();
        }, function(error) {
            done(error);
        })

    });


    it("test searUserByEmail --- not exist", function(done) {
        userService.searUserByEmail("notexist@gmail.com").then(function(user) {
            assert.equal(null, user);
            done();
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