var db = require("../model");
var Role = db.Role;

function create(role) {
   return Role.create(role);
}


module.exports = {
   create: create
};