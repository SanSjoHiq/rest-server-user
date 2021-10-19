const mongoose = require('mongoose');

const userSchema = {
    name: String
}

module.exports = mongoose.model('Users', userSchema);

