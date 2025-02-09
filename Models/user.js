const  mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/data-association");

    const userSchema = mongoose.Schema({
    username: String,
    email: String,
    age: Number,
    posts : Array,

})
module.export = mongoose.model("user", userSchema);