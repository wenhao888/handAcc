var log4js = require('log4js');
log4js.configure(
    {
        "appenders": [
            {
                "type": "clustered",
                "appenders": [
                    {
                        "type": "dateFile",
                        "filename": "logs/access.log",
                        "pattern": "-yyyy-MM-dd",
                        "category": "http"
                    },
                    {
                        "type": "file",
                        "filename": "logs/app.log",
                        "maxLogSize": 10485760,
                        "numBackups": 3
                    },
                    {
                        "type": "logLevelFilter",
                        "level": "ERROR",
                        "appender": {
                            "type": "file",
                            "filename": "logs/errors.log"
                        }
                    }
                ]
            }
        ]
    }
);

function initialize(app) {
    app.use(log4js.connectLogger(log4js.getLogger("http"), { level: 'auto' }));
}
function getLogger(name) {
    return log4js.getLogger(name);
}

module.exports= {
    initialize: initialize,
    getLogger:getLogger
};