const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    parentTaskID: { type: String },
    taskName: { type: String },
    createdDate: { type: Date ,default:Date.now },
    updatedDate: { type: Date ,default:Date.now },
});

module.exports = mongoose.model('Course',Course);