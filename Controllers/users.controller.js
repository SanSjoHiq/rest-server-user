const User = require("../Models/user");

const getUsers = (req, res) => {
    const user = {
        name: "Susanna Sjöberg"
    }
    res.send(user);
};


module.exports = {
    getUsers
}