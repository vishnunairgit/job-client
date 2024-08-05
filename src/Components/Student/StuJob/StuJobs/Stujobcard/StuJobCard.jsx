import React from 'react';
import './stujobcard.css'
import { calculateTimeAgo, formatDate } from '../../../../../Helpers/Helpers';

function StuJobCard({ job }) {
  if (!job) {
    return <div>Select a job to see details</div>;
  }
  return (

    <div>
      <div className='stujobView'>
        <div className="job-card" >
          <div className='title'>
            <div className='job-title'>
              <div><strong>{job.JobTitle}</strong></div>
            </div>
          </div>
          <div className='Job-First-box'>
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

            <div className="jobRow Applicants "  >
              <div className="jobLabel">
                <strong>No of Applicants</strong>
              </div>
              {/* <div className="">: {job?.AppliedStudents?.length}</div> */}
            </div>

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