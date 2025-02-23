
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FiTrash2, FiEdit2 } from 'react-icons/fi';
function Showstudent() {
  const [students, setStudents] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/student/show').then((response) => {
      setStudents(response.data)
    })

  },[])
  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/student/delete/${id}`)
      window.location.reload(false)
    } catch (error) {
      console.log(error)
    }
  }
  const updateStudents = async (id) => {
    
    prompt(`Are you sure you want to update student ${id}? But Sorry Service is not available right now`)

    
  }

  return (
    <div className="p-4 max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-x-auto">
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Registration Number
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Name
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Grade
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Section
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Subjects
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {student.regno}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {student.name}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {student.grade}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {student.section}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {student.subjects.join(", ")}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex justify-start items-center">
                <button onClick={() => updateStudents(student._id)} className="text-blue-500 inline-block mr-2">
                  <FiEdit2 size={20} />
                </button>
                <button onClick={() => deleteStudent(student._id)} className="text-red-500 inline-block">
                  <FiTrash2 size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Showstudent;
