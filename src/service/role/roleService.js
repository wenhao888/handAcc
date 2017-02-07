var models = require("../../model/index");
var Role = models.Role;

function create(role) {
   return Role.create(role);
}

function bulkCreate(roles) {
   return Role.bulkCreate(roles);
}

module.exports = {
   create: create,
   bulkCreate:bulkCreate
};