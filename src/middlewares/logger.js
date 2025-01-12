const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, '../logging/requests.log');

const logger = (req, res, next) => {
  const logEntry = `${new Date().toISOString()} - ${req.method} ${req.url} - ${req.ip}\n`;
  fs.appendFileSync(logFile, logEntry);
  next();
};

module.exports = logger;
