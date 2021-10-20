const User = require("../Models/user");

const getUsers = (req, res) => {
    // const user = [
    // {
    //     name: "Susanna Sjöberg"
    // },
    // {
    //     name: "Lou cavalli"
    // },
    // {
    //     name: "Elsa Bojrup"
    // }]
    // res.send(user);
    User.find((err, foundUser) => {
        if(!err) {
            res.status(200).send(foundUser)
        } else {
            res.status(400).send(err)
        }
    })
    
};

const getUser = (req, res) => {
    User.findById({_id: req.params._id}, (err, foundUser) => {
        if(!err) {
            res.status(200).json(foundUser)
        } else {
            res.status(404).res.send(err)
        }
    })
}


const postUser = (req, res) => {
    const newUser = new User({name: req.body.name})
    newUser.save((err) => {
        if(err) {
            res.status(400).send(err);
        } else {
            res.status(201).send("User created");
        }
    });
}



module.exports = {
    getUsers,
    getUser,
    postUser
}