const User = require('../models/User');

exports.helloWorld = (req, res) => {
    try {
        let mensaje = 'Hello world!';
        res.status(200).json({ mensaje });
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
}

exports.addUser = async(req, res) => {
    try {
        console.log(req.body);
        let usuario = new User(req.body);
        console.log(usuario);
        await usuario.save();
        res.status(200).send('User added');
    } catch (error) {
        res.status(500).send('error');
    }
}