var http=require("http");

/**
 *  this class is used to forward http traffic to the https
 *
 */

class httpForwarder {
    start(port) {
        this.forwarder = http.createServer(function(req,res) {
            var host= req.headers.host.split(":")[0];
            var url =  'https://' + host + ":443" + req.url;

            res.writeHead(302, {
                'Location': url
            });
            res.end();
        });

        console.log("listening on port " + port);
        this.forwarder.listen(port);
    }
}

module.exports = httpForwarder;