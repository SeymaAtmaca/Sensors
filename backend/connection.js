const mongoose = require("mongoose");
const uri = "mongodb+srv://sensor_cluster:34mongodb@cluster0.6r8dx.mongodb.net/?retryWrites=true&w=majority";
const connectDataBase = () => {
    mongoose.connect(uri)
        .then(() => {
            console.log("MongoDB bağlandı");
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = connectDataBase;