const winston = require('winston');
const { combine, timestamp, printf, colorize, align } = winston.format;

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'debug',
  format: combine(
    colorize({ all: true }),
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss.SSS',
    }),
    printf((info: { timestamp: string; level: string; message: string; }) => `[${info.timestamp}] ${info.level}: ${info.message}`)
  ),
  transports: [
    new winston.transports.Console({ level: 'debug'}),
    new winston.transports.File({
      filename: './logs/logs.log',
      level: 'info',
    })
  ],
});

export default logger;
