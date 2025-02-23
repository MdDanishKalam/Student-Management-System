import React, { useState } from 'react';
import axios from 'axios';

function CreateStudent() {
  const [student, setStudent] = useState({
    regno: 0,
    name: '',
    grade: '',
    section: ''
  });

  const addStudent = async () => {
    try {
      const response = await axios.post('http://localhost:5000/student/create', student);
      console.log('Student added:', response.data);
      // Reset the form after successful submission
      setStudent({
        regno: 0,
        name: '',
        grade: '',
        section: '',
        subjects: []
      });
      alert('Student added successfully!');
    } catch (error) {
      console.error('Failed to add student:', error);
      // Handle error if needed
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Registration Number</label>
          <input
            type="number"
            name="regno"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={student.regno}
            onChange={(e) => setStudent({ ...student, regno: e.target.value })}
            placeholder="12345"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={student.name}
            onChange={(e) => setStudent({ ...student, name: e.target.value })}
            placeholder="Name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Grade</label>
          <input
            type="text"
            name="grade"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={student.grade}
            onChange={(e) => setStudent({ ...student, grade: e.target.value })}
            placeholder="10"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Section</label>
          <input
            type="text"
            name="section"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={student.section}
            onChange={(e) => setStudent({ ...student, section: e.target.value })}
            placeholder="A"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Subjects (comma-separated)</label>
          <input
            type="text"
            name="subjects"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={student.subjects}
            onChange={(e) => setStudent({ ...student, subjects: e.target.value.split(',') })}
            placeholder="Math, Science"
          />
        </div>
        <button type="button" onClick={addStudent}  className="w-full p-2 bg-blue-500 text-white rounded-md">
          Add Student
        </button>
      </form>
    </div>
  );
}

export default CreateStudent;
