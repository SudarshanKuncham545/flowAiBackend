const express = require('express')
const router = express.Router()

const studentController = require("../controllers/studentController")
const student = require("../models/Student")

router.post('/addTransaction', studentController.createStudent)
router.get('/allstudents', studentController.getStudents)
router.get('/student/:id', studentController.singlestudent)
router.put('/update/:id', studentController.updateStudent)
router.delete('/delete/:id', studentController.deleteStudent)

module.exports = router