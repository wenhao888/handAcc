var _=require("underscore");

render=function(req,res,next) {
    var _render= res.render;
    req.session.token = req.session.token || {};   //for protection
    var token= req.session.token;
    var url= (req.url||"").trim();
    var referer=req.header('Referer') ||"";

    res.render = function( view, options, fn ) {
        _.extend( options, {token: token, isRoot: url==='/' || url==='\\', referer:referer}  );
        _render.call( this, view, options, fn );
    };

    next();
};

module.exports=render;