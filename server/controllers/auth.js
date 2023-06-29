const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//const User = require('../models/User')

exports.login = async (req, res) => {
    const { email, password } = req.body;
    console.log("email: ", email, "password: ", password);

    res.status(200).json({
        mensaje: "Correcto"
    });
}
