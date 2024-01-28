const mongoose = require('mongoose');
const { Schema, model } = mongoose;
require("dotenv").config();

const uri = "mongodb+srv://"+process.env.DB_USERNAME+":"+process.env.DB_PASSWORD+"@cluster0.pzrh4hr.mongodb.net/"

const stateSchema = new Schema({
    value: String,
    _persist: String,
})

const State = model('State', stateSchema);

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
}

async function saveItemToDB(savedState) {
    await State.deleteMany({});
    await State.create((savedState));
}

async function getItemFromDB() {
    return await State.findOne({}).lean();
}

module.exports = { connect, saveItemToDB, getItemFromDB };
