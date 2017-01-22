var mailer = require('express-mailer');
var emailConfigure= require("../../config/configureService").email;
var singleton ={
    app: null
};

function initialize(app) {
    mailer.extend(app, {
        from: emailConfigure.systemEmailAccount,
        host: emailConfigure.host,
        secureConnection: emailConfigure.useTls,
        port: emailConfigure.port,
        transportMethod: emailConfigure.protocol,
        auth: {
            user: emailConfigure.systemEmailAccount,
            pass: emailConfigure.systemEmailAccountPwd
        }
    });

    singleton.app = app;
}

function sendContactUsEmail(keyValues) {
    singleton.app.mailer.send({
        template: 'layout/contactUsEmail'
    }, {
        to: emailConfigure.systemEmailAccount,
        subject: 'Test Email',
        layout: false
    }, function (err) {

    });
}

module.exports= {
    initialize: initialize,
    sendContactUsEmail: sendContactUsEmail
};