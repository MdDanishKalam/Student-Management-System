
import StudentModel from "../models/student.js";



export const getStudents = async (req, res) => {
    try {
        const allStudents = await StudentModel.find();
        res.status(200).json(allStudents);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};
export const createStudents = async (req, res) => {
    const Student = req.body;
    const newStudent = new StudentModel(Student);
    try {
        await newStudent.save();
        res.status(201).json(Student);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
};
export const updateStudents= async (req, res) => {
    const id = req.params.id;
    const Student = req.body;
    try {
        const updatedStudent = await StudentModel.findByIdAndUpdate(id, Student, { new: true });
        res.json(updatedStudent);

    } catch (error) {
        console.log(error);
    }

}
export const deleteStudent = async (req, res) => {
    const id = req.params.id;
    try {
        await StudentModel.findByIdAndDelete(id).exec();
        res.send('Student deleted successfully');
    } catch (error) {
        console.log(error);
    }
    
    
}