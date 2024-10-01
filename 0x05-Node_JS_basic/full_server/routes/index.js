const express = require('express');
const AppController = require('../controllers/AppController'); // Wishing the AppController file path is correct
const StudentsController = require('../controllers/StudentsController'); // Wishing the StudentsController file path is correct

const router = express.Router();

// Linking the route ('/')
router.get('/', AppController.getHomepage);

// Linking the routes `/students` & `/students/:major` to the StudentsController
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;
