const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Task } = require('../models/Task');

//const User = require('../models/User')

exports.login = async (req, res) => {
    const { email, password } = req.body;
    console.log("email: ", email, "password: ", password);



    res.status(200).json({
        mensaje: "Correcto"
    });
}

exports.createTask = async (req, res) => {
    try {
      const { name } = req.body;
      const newTask = await Task.create({
        name,
      });
      res.json(newTask);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
