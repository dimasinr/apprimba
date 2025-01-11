require('dotenv').config();

const express = require('express');
const sequelize = require('./config/sequelize');
const user_routes = require('./router/user');

const app = express();
app.use(express.json());

sequelize.authenticate()
  .then(() => console.log('Database connected.'))
  .catch(err => console.error('Unable to connect to database:', err));

sequelize.sync({ force: false })
  .then(() => console.log('Database synchronized.'))
  .catch(err => console.error('Error syncing database:', err));

app.use('/users', user_routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
