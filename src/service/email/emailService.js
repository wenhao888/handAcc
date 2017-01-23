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

function sendContactUsEmail(request) {
    singleton.app.mailer.send({
        template: 'email/contactUs'
    }, {
        to: emailConfigure.systemEmailAccount,
        subject: 'contactUs',
        layout: false,
        request:request
    }, function (err) {

    });
}

module.exports= {
    initialize: initialize,
    sendContactUsEmail: sendContactUsEmail
};