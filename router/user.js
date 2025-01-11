const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { validateUser, validateId } = require('../middlewares/userInput');
const logger = require('../middlewares/logger');

router.use(logger);

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', validateId, async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'User tidak ditemukan' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', validateUser, async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const newUser = await User.create({ name, email, age });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', [validateId, validateUser], async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'User tidak ditemukan' });
    await user.update({ name, email, age });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', validateId, async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'User tidak ditemukan' });
    await user.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
