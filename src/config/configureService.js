var fs= require("fs");

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


var db = {
    CLEARDB_DATABASE_URL: "mysql://bfd98cdebbccfd:99beb6b8@us-cdbr-iron-east-04.cleardb.net/heroku_91b18de65917a22?reconnect=true",
    POSTGRES_URL: "postgres://dnokizqluhdogs:bc2480a1f46493214b4a5c28e9789b5fade3fecfe73030c101747326d8ef1c62@ec2-23-21-46-94.compute-1.amazonaws.com:5432/d5j7gp7juk7dpi"
};


var ssl = {
    key: fs.readFileSync('./src/ssl/key.pem'),
    cert: fs.readFileSync('./src/ssl/cert.pem'),
    passphrase:'lwh396505'
};

module.exports = {
    'email': email,
    'elastic': elastic,
    'db': db,
    'ssl':ssl
};
