
// import React, { useState, useEffect } from 'react';
// import { getAllJob } from '../../../../Api/Job';
// import './stujobs.css';
// import StuJobCard from './Stujobcard/StuJobCard';
// import Loading from '../../../Loading/Loading';
// import { useSelector } from 'react-redux';
// import './stujobs.css'
// import { BASE_URL } from '../../../../Constants/BaseUrl';

// function Alljobs() {
//     const userId = useSelector(state => state.user.userDetails.userId);
//     const [allJobs, setAllJobs] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [selectedJob, setSelectedJob] = useState(null);

//     useEffect(() => {
//         const fetchJobs = async () => {
//             try {
//                 const jobData = await getAllJob(userId);
//                 setAllJobs(jobData);
//                 setLoading(false);
//             } catch (error) {
//                 setError(error);
//                 setLoading(false);
//             }
//         };
//         if (userId) {
//             fetchJobs();
//         }
//     }, [userId]);

//     if (loading) {
//         return <Loading />;
//     }

//     if (error) {
//         return <div>Error: {error.message}</div>;
//     }

//     return (
//         <div className="jobs-container">
//             <div className="jobs-list">
//                 {allJobs.length > 0 ? (
//                     allJobs.map((job) => (
//                         <div
//                             key={job._id}
//                             className="job-item"
//                             onClick={() => setSelectedJob(job)}
//                         >
//                             <div className='job-Details'>
//                                 <div>
//                                     <div className='job-files' >
//                                         {job.CreatedBy?.Logo ? (
//                                             <img className="logo" src={`${BASE_URL}/UserFiles/${job.CreatedBy?.Logo}`} />
//                                         ) : (
//                                             <p>No logo available</p>
//                                         )}
//                                     </div>

//                                 </div>
//                                 <div>
//                                     <h5><strong>{job.JobTitle}</strong></h5>
//                                     <p>Location : <strong>{job.Location}</strong></p>
//                                     <p>Salary : <strong>{job.Salary} </strong>Lacs P.A</p>

//                                 </div>

//                             </div>


//                         </div>
//                     ))
//                 ) : (<div className="no-jobs">No jobs available</div>)

//                 }
//             </div>
//             <div className="job-details">
//                 <StuJobCard job={selectedJob} />
//             </div>
//         </div>
//     );
// }

// export default Alljobs;


import React, { useState, useEffect } from 'react';
import { getAllJob } from '../../../../Api/Job';
import './stujobs.css';
import StuJobCard from './Stujobcard/StuJobCard';
import Loading from '../../../Loading/Loading';
import { useSelector } from 'react-redux';
import { BASE_URL } from '../../../../Constants/BaseUrl';

function Alljobs() {
    const userId = useSelector(state => state.user.userDetails.userId);
    const [allJobs, setAllJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedJob, setSelectedJob] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const jobData = await getAllJob(userId);
                setAllJobs(jobData);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        if (userId) {
            fetchJobs();
        }
    }, [userId]);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="jobs-container">
            <div className="jobs-list">
                {allJobs.length > 0 ? (
                    allJobs.map((job) => (
                        <div
                            key={job._id}
                            className="job-item"
                            onClick={() => setSelectedJob(job)}
                        >
                            <div className='job-details'>
                                <div className='job-logo'>
                                    {job.CreatedBy?.Logo ? (
                                        <img className="logo" src={`${BASE_URL}/UserFiles/${job.CreatedBy?.Logo}`} alt="Company Logo" />
                                    ) : (
                                        <p>No logo available</p>
                                    )}
                                </div>
                                <div className='job-info'>
                                    <h5><strong>{job.JobTitle}</strong></h5>
                                    <p>Location: <strong>{job.Location}</strong></p>
                                    <p>Salary: <strong>{job.Salary}</strong> Lacs P.A</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-jobs">No jobs available</div>
                )}
            </div>
            <div className="job-details-container">
                <StuJobCard job={selectedJob} />
            </div>
        </div>
    );
}

export default Alljobs;
