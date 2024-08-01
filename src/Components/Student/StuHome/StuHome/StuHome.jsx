import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StuJobs from '../../StuJob/StuJobs/StuJobs'
import StuNav from '../../../Student/StuHome/StuNav/StuNav'

function StuHome() {
  return (
    <div>
      <StuNav />
      <div>
        <Routes>
            < Route path='/' element={<  StuJobs />} />
            < Route path='/StuJobs' element={< StuJobs />} />
        </Routes>
      </div>
    </div>
  )
}

export default StuHome