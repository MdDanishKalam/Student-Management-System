import { useState } from 'react'
import Createstudent from './components/createStudent/Createstudent'
import Showstudent from './components/showstudent/Showstudent'

function App() {


  return (
    <div className="App max-w-[1200px] mx-auto">
      <div class="p-8  grid grid-cols-3 gap-4">
        
        <div class="col-span-3 bg-gray-200 border-2 rounded-lg p-4 items-center"><h1 className='text-3xl text-center'>
        Student Management System</h1></div>
        <div class="col-span-2 ..."><Showstudent /></div>
        <div class="..."><Createstudent /></div>
       
      </div>
      {/* <Createstudent />
      <Showstudent /> */}
    </div>
  );
}


export default App
