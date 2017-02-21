var _=require("underscore");

render=function(req,res,next) {
    var _render= res.render;
    req.session.token = req.session.token || {};   //for protection

    var token= req.session.token;
    res.cookie("token" , JSON.stringify(token));   //add token into cookie
    var url= (req.url||"").trim();

    res.render = function( view, options, fn ) {
        _.extend( options, {token: token, isRoot: url==='/' || url==='\\'}  );
        _render.call( this, view, options, fn );
    };

    next();
};

module.exports=render;