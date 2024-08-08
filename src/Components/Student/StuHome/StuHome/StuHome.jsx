import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StuJobs from '../../StuJob/StuJobs/StuJobs'
import StuNav from '../../../Student/StuHome/StuNav/StuNav'
import AppliedJob from '../../StuJob/StuAppliedJob/AppliedJob'

function StuHome() {
  return (
    <div>
      <StuNav />
      <div>
        <Routes>
            < Route path='/' element={<  StuJobs />} />
            {/* < Route path='/StuJobs' element={< StuJobs />} /> */}
            < Route path='/AppliedJob' element={< AppliedJob />}  />
        </Routes>
      </div>
    </div>
  )
}

export default StuHome

