var _=require("underscore");

render=function(req,res,next) {
    var _render= res.render;
    var token=req.session.token || {};

    res.render = function( view, options, fn ) {
        _.extend( options, {token: token} );
        _render.call( this, view, options, fn );
    };

    next();
};

module.exports=render;