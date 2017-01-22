var email = {
    "systemEmailAccount": process.env['systemEmailAccount'],
    "systemEmailAccountPwd": process.env["systemEmailAccountPwd"],
    "host": "smtp.gmail.com",
    "port":  "465",
    "useTls": true,
    "protocol":"SMTP"

};

module.exports = {
    'email': email
};
