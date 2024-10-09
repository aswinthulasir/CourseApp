const mongoose = require('mongoose');

// Define Course schema
const courseSchema = new mongoose.Schema({
    courseId: {
        type: String,
        required: true,
        unique: true
    },
    courseName: {
        type: String,
        required: true
    },
    courseCategory: {
        type: String,
        required: true
    },
    courseDescription: {
        type: String,
        required: true
    },
    courseDuration: {
        type: Number, 
        required: true
    },
    courseImage: {
        type: String, 
        required: true
    }
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
