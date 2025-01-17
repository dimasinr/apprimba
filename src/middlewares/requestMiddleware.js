const morgan = require("morgan");
const logger = require("./logger");

const requestMiddleware = (req, res, next) => {
  res.on('finish', () => {
    const level = res.statusCode >= 500 ? 'error' 
                  : res.statusCode >= 400 ? 'warn' 
                  : 'info';
    const message = `${req.method} ${req.originalUrl} - ${res.statusCode} - ${req.ip}`;

    logger.log({ level, message });
  });

  next();
};

const logMiddleware = morgan('combined', {
    stream: {
      write: (message) => {
        logger.info(message.trim());
      },
    },
  });
  

module.exports = {logMiddleware, requestMiddleware};
