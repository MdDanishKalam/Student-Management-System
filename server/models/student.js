import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    regno: Number,
    name: String,
    grade: String,
    section: {
        type: String,
        default: "B"
    },
    subjects: [String]
});
const StudentModel = mongoose.model("student", studentSchema);
export default StudentModel;