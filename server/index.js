const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const argon2 = require('argon2');

// Imports de los modelos de la base de datos para validación y creación de las tablas con Sequelize
const User = require('./models/User.js');
const Category = require('./models/Category.js');
const Game = require('./models/Game.js');
const Session = require('./models/Session.js');
const Activity = require('./models/Activity.js');
const Round = require('./models/Round.js');

// Require para poder usar archivos .ENV, se usan para guardar variables de entorno
require('dotenv').config();

const app = express();

app.use(express.json());

// ENDPOINT /register para insertar usuarios
app.post('/register', async (req, res) => {
  const { name, lastName, email, password, birthYear, studies, sex, role } = req.body;

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: 'Invalid email' });
  }

  if (!validator.isLength(password, { min: 8 })) {
    return res.status(400).json({ message: 'Password must be at least 8 characters long' });
  }

  const hashedPassword = await argon2.hash(password);

  try {
    const newUser = await User.create({
      name,
      lastName,
      email,
      encryptedPassword: hashedPassword,
      birthYear,
      studies,
      sex,
      role
    });
    res.status(201).json({ message: 'User created' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ENDPOINT /login para iniciar sesión (devuelve un JSON Web Token)
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  if (!user) {
    return res.status(401).json({ message: 'Email or password is incorrect' });
  }

  const isPasswordValid = await argon2.verify(user.encryptedPassword, password);

  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Email or password is incorrect' });
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });

  res.json({ token });
});

// ENPOINT para hacer log out (completar si hace falta)
app.post('/logout', (req, res) => {
  res.json({ message: 'You have been logged out' });
});

// ENDPOINT para añadir una categoría
app.post('/add_category', async (req, res) => {
  const { categoryName, categoryDescription } = req.body;

  try {
    const newCategory = await Category.create({
      categoryName,
      categoryDescription
    });
    res.status(201).json({ message: 'Category created' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ENDPOINT para añadir un juego
app.post('/add_game', async (req, res) => {
  const { gameName, gameDescription, categoryId } = req.body;

  try {
    const newGame = await Game.create({
      gameName,
      gameDescription,
      categoryId
    });
    res.status(201).json({ message: 'Game created' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ENDPOINT para añadir una sesión
app.post('/add_session', async (req, res) => {
  const { userId, sessionName } = req.body;

  try {
    const newSession = await Session.create({
      userId,
      sessionName
    });
    res.status(201).json({ message: 'Session created' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ENDPOINT para añadir una actividad
app.post('/add_activity', async (req, res) => {
  const { sessionId, gameId, completionTime, maxRound } = req.body;

  try {
    const newActivity = await Activity.create({
      sessionId,
      gameId,
      completionTime,
      maxRound
    });
    res.status(201).json({ message: 'Activity created', activityId: newActivity.id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ENDPOINT para modificar una actividad
app.put('/modify_activity/:activityId', async (req, res) => {
  const { completionTime, maxRound } = req.body;
  const { activityId } = req.params;

  try {
    const activityToUpdate = await Activity.findByPk(activityId);
    if (!activityToUpdate) {
      return res.status(404).json({ message: 'Activity not found' });
    }

    await activityToUpdate.update({
      completionTime,
      maxRound
    });

    res.json({ message: 'Activity updated' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ENDPOINT para añadir una ronda
app.post('/add_round', async (req, res) => {
  const { activityId, round, roundTime, warning } = req.body;

  try {
    const newRound = await Round.create({
      activityId,
      round,
      roundTime,
      warning
    });
    res.status(201).json({ message: 'Round created' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
});