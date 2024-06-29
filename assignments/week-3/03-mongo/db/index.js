const mongoose = require('mongoose');

// Connect to MongoDB

mongoose.connect('mongodb+srv://Shadman123:Shadman123@testcluster.07lhob2.mongodb.net/Test');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    userName : {
        type: String,
        require: true
    },
    passWord : {
        type: String,
        required: true,
    }
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    userName : {
        type: String,
        require: true
    },
    passWord : {
        type: String,
        required: true,
    }
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title:{
        type: String,
        required:true,
    },
    description:{
        type: String,
        required:true,
    },
    price:{
        type: Number,
        required:true,
    }
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}
