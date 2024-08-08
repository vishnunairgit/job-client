import React from 'react';
import './stujobcard.css'
import { calculateTimeAgo, formatDate } from '../../../../../Helpers/Helpers';
import { useNavigate } from 'react-router-dom';

function StuJobCard({ job }) {
  const navigate = useNavigate()

  if (!job) {
    return <div>Select a job to see details</div>;
  }

  // const handleBack =()=>{
  //   navigate('/StuHome')
  // }

  const handleApplyJob = ()=>{
    navigate('/student/AppliedJob')
  }
  return (
    <div>

      <div className='stujobView'>

        <div className="job-card" >

          <div className='job-title'>
              <h3><strong>{job.JobTitle}</strong></h3>
              <button className='button_01' onClick={handleApplyJob}>Apply Now</button>
          </div>

          <div className='Job-First-box'>
            <div>

            </div>

            <div>

            <div className="jobRow">
                <div className="jobLabel">
                  <strong>Company</strong>
                </div>
                <div className="">: {job.CreatedBy.UserName} </div>
              </div>
              <div className="jobRow">
                <div className="jobLabel">
                  <strong>Location</strong>
                </div>
                <div className="">: {job.Location} </div>
              </div>

              <div className="jobRow">
                <div className="jobLabel">
                  <strong>Qualifications</strong>
                </div>
                <div className="">: {job.Qualifications} </div>
              </div>

              <div className="jobRow">
                <div className="jobLabel">
                  <strong>Experience</strong>
                </div>
                <div className="">: {job.Experience} years</div>
              </div>

              <div className="jobRow Applicants">
                <div className="jobLabel">
                  <strong>No of Applicants</strong>
                </div>
                <div className="">:</div>
              </div>

            </div>

            <div>
              <div className="jobRow">
                <div className="jobLabel">
                  <strong>Role</strong>
                </div>
                <div className="">: {job?.JobTitle} </div>
              </div>

              <div className="jobRow">
                <div className="jobLabel">
                  <strong>Salary</strong>
                </div>
                <div className="">: {job?.Salary ? `${job?.Salary} Lacs P.A. ` : "Not Disclosed"}</div>
              </div>

              <div className="jobRow">
                <div className="jobLabel">
                  <strong>Openings</strong>
                </div>
                <div className="">: {job.Openings} </div>
              </div>

              <div className="jobRow">
                <div className="jobLabel">
                  <strong>Employment Type:</strong>
                </div>
                <div className="">: {job?.EmploymentType} </div>
              </div>

            </div>

            <div className="jobRow">
              <div className="jobLabel">
                <strong>Keyskills</strong>
              </div>
              <div className="">: {job?.Keyskills ? job.Keyskills.split(' ').join(' / ') : "No key skills provided"} </div>
            </div>

            <div className='jobRow'>
              {job?.
                Description
                && (
                  <div >
                    <strong>Requirements:</strong>
                    <ul>
                      {job?.
                        Description?.split('\n').map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                    </ul>
                  </div>
                )}
            </div>

            <div className='Job-Date-box'>
              <div><strong>Job Post Date : </strong>{formatDate(job?.Date)}</div>
              <div><strong>Posted : </strong>{calculateTimeAgo(job?.Date)}</div>
            </div>

            <div className='bottum-button'>
              {/* <button className='button_02' type="button" onClick={handleBack}>Back</button> */}
              {/* <button className='button_01' type="button" onClick={handleEdit} >Edit</button> */}
              {/* <button className='button_03' type="button" onClick={handleDelete}>delete</button> */}
            </div>

          </div>
        </div>
      </div>

    </div>


  )
}

export default StuJobCard