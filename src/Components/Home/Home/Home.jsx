import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import AddJobs from '../../Jobs/Add Jobs/AddJobs';
import Alljobs from '../../Jobs/All Jobs/AllJobs/Alljobs';
import Jobview from '../../Jobs/Job view/Jobview';
import EditJob from '../../Jobs/Job Edit/EditJob';
import { AdminAuth } from '../../../Authorization/Authorization';
import UserEdit from '../../User/UserEdit/UserEdit';
import Updatepassword from '../../User/UserEdit/UpdateUserpassword/Updatepassword';
import UserView from '../../User/UserView/UserView';


function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
        <Route element={<AdminAuth />}>

          < Route path='/Home' element={< Alljobs />} />
          < Route path='/AddJobs' element={< AddJobs />} />
          < Route path='/Alljobs' element={< Alljobs />} />
          < Route path='/Jobview/:jobId' element={< Jobview />} />
          < Route path='/EditJob/:jobId' element={< EditJob />} />
          < Route path='/UserView' element={<UserView />}  />
          < Route path='/UserEdit/:userId' element={<UserEdit />} />
          < Route path='/UserEdit/:userId/Updatepassword' element={< Updatepassword/>}     />

          </Route  >

        </Routes>
      </div>




    </div>
  )
}

export default Home