const express = require('express');
// const bodyParser = require('body-parser');
// const logger = require('morgan');
const path = require('path');
const env = require('dotenv');
const app = express();

const morgan = require('morgan');
const winston = require('winston');

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
};

const level = () => {
    const env = process.env.NODE_ENV || 'development';
    const isDevelopment = env === 'development';
    return isDevelopment ? 'debug' : 'warn';
};

const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white',
};

// winston.addColors(colors);

const format = winston.format.combine(
    winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss:ms'
    }),
    winston.format.colorize({colors}),
    winston.format.printf(
        (info) => `${info.timestamp} ${info.level}: ${info.message}`,
    ),
);

const transports = [
    new winston.transports.Console(),
    new winston.transports.File({
        filename: 'logs/error.log',
        level: 'error',
    }),
    new winston.transports.File({
        filename: 'logs/all.log'
    }),
];

const Logger = winston.createLogger({
    level: level(),
    levels,
    format,
    transports,
});

const stream = {
    write: (message) => Logger.http(message),
};

const skip = () => {
    const env = process.env.NODE_ENV || 'development';
    return env !== 'development';
};
const morganLogger = morgan(
    ':method :url :status :res[content-length] - :response-time ms',
    {
        stream,
        skip
    }
);

env.config();
const PORT = process.env.PORT || 3010;
const NODE_ENV = process.env.NODE_ENV || 'development';
const router = express.Router();

module.exports = router;
app.set('port', PORT);
app.set('env', NODE_ENV);

// app.use(morgan('tiny'));
// app.use();
app.use(express.urlencoded({ extended: false, limit: '1mb' }));
app.use(express.json({ limit: '1mb' }));
app.use('/', require(path.join(__dirname, 'routes')));

//

app.use((req, res, next) => {
  const err = new Error(`${req.method} ${req.url} Not Found`);
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  Logger.error(err);
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

app.listen(PORT, () => {

  Logger.info(
    `🚀 Browser API Server started on Port ${app.get(
      'port'
    )} | Environment : ${app.get('env')}`
  );
});