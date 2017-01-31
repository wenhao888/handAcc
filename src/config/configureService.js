var email = {
    "systemEmailAccount": process.env['systemEmailAccount'],
    "systemEmailAccountPwd": process.env["systemEmailAccountPwd"],
    "host": "smtp.gmail.com",
    "port":  "465",
    "useTls": true,
    "protocol":"SMTP"

};

var elastic = {
   "url": process.env["elasticUrl"]
};

module.exports = {
    'email': email,
    'elastic': elastic
};
