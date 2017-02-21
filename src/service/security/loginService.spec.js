var models=require("../../models");
var assert=require("chai").assert;
var ResourceNotFoundException = require("../../exception").ResourceNotFoundException;
var InvalidTokenException = require("../../exception").InvalidTokenException;

var loginService= require("./loginService");
var req= {session:{}}, res= {cookie:function(){}};

describe("test loginService", function() {
    this.timeout(15000);

    before(function(done) {
        models.sequelize.sync({force:true}).then(function() {
            seedUser().then(function() {
                done();
            }, function(error) {
                done();
            });

        }, function(error) {
            done();
        })
    });

    it("test login --- none exist email", function(done) {
       loginService.login(req, res,{email:"notExist@gmail.com", password:"P@ssword1"})
           .then(function() {
           }, function(error) {
               assert.isTrue(error instanceof ResourceNotFoundException);

               done();
           })
    });

    it("test login --- password did not match", function(done) {
        loginService.login(req, res, {email:"wenhao.lin@gmail.com", password:"wrong"})
            .then(function() {
            }, function(error) {
                assert.isTrue(error instanceof InvalidTokenException);
                done();
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