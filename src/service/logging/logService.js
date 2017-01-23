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
                        "pattern": "-MM-dd-yyyy",
                        "category": "http"
                    },
                    {
                        "type": "dateFile",
                        "filename": "logs/app.log",
                        "pattern": "-MM-dd-yyyy",
                    },
                    {
                        "type": "logLevelFilter",
                        "level": "ERROR",
                        "pattern": "-MM-dd-yyyy",
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