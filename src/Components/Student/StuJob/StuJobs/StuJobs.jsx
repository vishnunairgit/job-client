
import React, { useState, useEffect } from 'react';
import { getAllJob } from '../../../../Api/Job';
import './stujobs.css';
import StuJobCard from './Stujobcard/StuJobCard';
import Loading from '../../../Loading/Loading';
import { useSelector } from 'react-redux';
import './stujobs.css'

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
                            <h4>{job.JobTitle}</h4>
                            <p>Location:<strong>{job.Location}</strong></p>
                            <p>Salary:<strong>{job.Salary} </strong>Lacs P.A</p>
                        </div>
                    ))
                ) : (<div className="no-jobs">No jobs available</div>)

                }
            </div>
            <div className="job-details">
                <StuJobCard job={selectedJob} />
            </div>
        </div>
    );
}

export default Alljobs;
