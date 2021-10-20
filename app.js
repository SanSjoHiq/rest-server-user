const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./Routers/user.router.js')

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/hiqUserDb', {useNewUrlParser: true})
.then(() => console.log("Database connected"))
.catch((err) => console.log(err));


app.use("/api", userRouter)



app.listen(3000, () => {
    console.log("Server is running on port 3000");
})


module.exports = app;