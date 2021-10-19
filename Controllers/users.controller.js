const User = require("../Models/user");

const getUsers = (req, res) => {
    const user = [
    {
        name: "Susanna Sjöberg"
    },
    {
        name: "Lou cavalli"
    },
    {
        name: "Elsa Bojrup"
    }]
    res.send(user);
};


module.exports = {
    getUsers
}