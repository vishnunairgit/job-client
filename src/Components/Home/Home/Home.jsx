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
import Mycompany from '../../User/MyCompany/Mycompany';
import Notifications from '../../Notifications/Notifications';


function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route element={<AdminAuth />}>
            < Route path='/Home' element={< Mycompany />} />
            < Route path='/AddJobs' element={< AddJobs />} />
            < Route path='/Alljobs' element={< Alljobs />} />
            < Route path='/Jobview/:jobId' element={< Jobview />} />
            < Route path='/EditJob/:jobId' element={< EditJob />} />
            < Route path='/UserView' element={<UserView />} />
            < Route path='/Mycompany' element={<Mycompany />} />
            < Route path='/UserEdit/:userId' element={<UserEdit />} />
            < Route path='/UserEdit/:userId/Updatepassword' element={< Updatepassword />} />
            < Route path='/Notifications' element={< Notifications />} />


          </Route  >
        </Routes>
      </div>
    </div>
  )
}

export default Home