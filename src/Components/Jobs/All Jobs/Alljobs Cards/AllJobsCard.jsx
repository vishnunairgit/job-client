import React from 'react';
import './alljobcard.css';
import bag from '../../../Assets/icons8-bag-24.png';
import cash from '../../../Assets/icons8-rupee-24.png';
import location from '../../../Assets/icons8-location-24 (1).png'
import { calculateTimeAgo } from '../../../../Helpers/Helpers';
import { useNavigate } from 'react-router-dom';

function AllJobsCard({ job }) {

  const navigate = useNavigate()


  const handleJobView = ()=>{
    navigate(`/Jobview/${job._id}`);
  }

  return (

    <div className='container' onClick={handleJobView}>
      <div className='alljobscard'>

        <div className='first-layer'>
          <div className='left-side'>
            <h5><strong>{job.JobTitle}</strong></h5>
            <h6><strong>{job.CreatedBy?.UserName}</strong></h6>
          </div>

          <div className='right-side'>
            <img src={location} alt="" />
          </div>
        </div>

        <div className='second-layer'>
          <div className='Experience'>
            <div><img src={bag} alt="" />: {job?.Experience} Years</div>
            <div><img src={cash} alt="" />: {job?.Salary ? `${job?.Salary} Lacs P.A. ` : "Not Disclosed"}  </div>
            <div><img src={location} alt="" />: {job?.Location} </div>
          </div>

          <div className='keyskills'>
            <div className='keyskills'>
              {job?.Keyskills ? job.Keyskills.split(' ').join('   /  ') : "No key skills provided"}
            </div>
          </div>
        </div>

        <div className='third-layer'>
          <div className='date'>{calculateTimeAgo(job?.Date)}</div>
        </div>
      </div>

    </div>

  )
}

export default AllJobsCard











