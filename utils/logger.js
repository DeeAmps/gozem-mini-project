const winston = require('winston');
const { resolve } = require('path');

const logConfiguration = {
  transports: [
    new winston.transports.File({
      filename: resolve(__dirname, '..', 'logs', 'error.log'), level: 'error',
    }),
  ],
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf((info) => `${info.timestamp} - [${info.level}]: ${info.message}`),
  ),
};

// Export Created logger
module.exports = winston.createLogger(logConfiguration);
