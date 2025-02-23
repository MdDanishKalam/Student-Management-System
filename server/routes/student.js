import express from "express"
import student from "../models/student.js";

import {createStudents, getStudents, updateStudents, deleteStudent} from "../controllers/student.js"

// const getStudents=(req, res) => {
//     res.send("hello")
// }
// const createStudents=(req, res) => {
//     res.send("hello create")
// }





const router = express.Router();


router.get("/show",getStudents )
router.post("/create", createStudents)
router.put("/update/:id", updateStudents)
router.delete("/delete/:id", deleteStudent)

export default router