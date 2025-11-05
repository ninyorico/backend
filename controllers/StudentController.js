import * as StudentModel from  "../models/StudentModel.js";

export const fetchStudents = async (req, res) =>{
    try{
        const books = await StudentModel.getStudent();
        res.status(200).json({success: true, message: books});
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Interval Server Error"
        })
    }
}


export const createStudent = async (req, res) => {
    const {srcode, name, course} = req.body
    try{
        const studentId = await StudentModel.insertStudent(title, genre, status);
        res.status(200).json({success:true, message : StudentId})

    }catch(e){
        console.log(e)
        res.status(500).json({success : false, message : "Internal Server Error"})
    }
}

export const editStudent = async (req, res) => {
    const {srcode, name, course} = req.body
    const {studentId} = req.params;
    try{
        const updatedStudentId = await StudentModel.updateStudent(srcode, name, course, studentId);
        res.status(200).json({success:true, message : updatedStudentId})

    }catch(e){
        console.log(e)
        res.status(500).json({success : false, message : "Internal Server Error"})
    }
}

export const deleteStudent = async (req, res) => {
    const {bookId} = req.params;
    try{
        const deleteId = await BookModel.deleteStudent(bookId);
        res.status(200).json({success:true, message : deleteId})

    }catch(e){
        console.log(e)
        res.status(500).json({success : false, message : "Internal Server Error"})
    }
}