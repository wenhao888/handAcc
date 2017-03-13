var mailer = require('express-mailer');
var emailConfigure= require("../../config/configureService").email;
var logger=require("../logging/logService").getLogger("emailService");
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
        if (err) {
            logger.error(err);
        } else {
            logger.info("send contact us email successfully.")
        }
    });
}

function sendProductIssueEmail(request) {
    singleton.app.mailer.send({
        template: 'email/productIssue'
    }, {
        to: emailConfigure.systemEmailAccount,
        subject: 'product issue',
        layout: false,
        request:request
    }, function (err) {
        if(err) {
            logger.error(err);
        } else {
            logger.info("send product issue email successfully.")
        }
    });
}

function sendSubscribeEmail(email) {
    singleton.app.mailer.send(
        {
            template: 'email/subscribeEmailTemplate', // REQUIRED
        },
        {
            to: email,
            subject: 'Test Email',
        },
        function (err) {
            if (err) {
                console.log(err);
                return;
            };
            console.log("email send success");
        }
    );
}

module.exports= {
    initialize: initialize,
    sendContactUsEmail: sendContactUsEmail,
    sendProductIssueEmail: sendProductIssueEmail,
    sendSubscribeEmail:sendSubscribeEmail
};