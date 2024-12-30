const mongoose = require('mongoose');
const uri = "mongodb+srv://Vishesh:RGPl4lBepMuC83ye@vishesh.johui.mongodb.net/DEVO";

const connectDB=async() => {
    await mongoose.connect(uri)
};

module.exports = connectDB;
