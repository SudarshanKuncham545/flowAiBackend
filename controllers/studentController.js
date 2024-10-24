const Student = require('../models/Student')

const createStudent = async(req, res)=>{
    try{
        const {name, category, amount, description, date} = req.body

        const student = new Student({
            name,
            category,
            amount,
            description
        })
        await student.save()
        res.status(201).json(student)
    }catch(error){
        console.log("there is an error:", error)
        res.status(500).json({ message: 'Server error'})
    }
}

const getStudents = async(req,res)=>{
    try{
        const students = await Student.find()
        res.status(200).json(students)
    }catch(error){
        console.log("There is an error:", error)
        res.status(500).json({message: "Server error"})
    }
}

const singlestudent  = async(req, res)=>{
    try{
        const student = await Student.findById(req.params.id)
        if(!student){
            return res.status(404).json({message: "Student not Found"})
        }
        res.status(200).json(student)
    }
    catch(error){
        console.log("There is an error:", error)
        res.status(500).json({message:"server error"})
    }
}

const updateStudent = async(req, res)=>{
    try{
        const {name, category, amount, description, date} = req.body 

        const myStudent = await Student.findByIdAndUpdate(
            req.params.id,
            {name, category, amount, description, date}
        )
        if(!myStudent){
            return res.status(404).json({message: "studentnot found"})
        }
        res.status(200).json(myStudent)
    }
    catch(error){
        console.log("There is an error:", error)
        res.status(500).json({message: "server error"})
    }

}

const deleteStudent = async(req, res)=>{
    try{
        const deleteStudent = await Student.findByIdAndDelete(req.params.id)
        res.status(204).send()
    }catch(error){
        console.log("There is an error:", error)
        res.status(500).json({message: "server error"})
    }
}

module.exports = {createStudent, getStudents, singlestudent, updateStudent, deleteStudent} 