const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/NodeJs_mongoDB_F8');
        console.log('connet successfully!!!');
    } catch (error) {
        console.log('connet failure!!!');
    }
}

module.exports = { connect };