import React, { useEffect, useState } from 'react';
import { getJobs } from '../../../../Api/Job';
import AllJobsCard from '../Alljobs Cards/AllJobsCard';
import { useSelector } from 'react-redux';
import './alljobs.css';
import Loading from '../../../Loading/Loading';

function Alljobs() {
    const userId = useSelector(state => state.user.userDetails.userId);
    const [AllJobs, setAllJobs] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState(null);


    useEffect(() => {
        const fetchJobs = async () => {
            try {
                debugger
                const jobData = await getJobs(userId);
                setAllJobs(jobData)
                setloading(false)
            } catch (error) {
                seterror(error)
                setloading(false)
            }
        }
        if (userId) {
            fetchJobs();
        }

    }, [userId]);

    if (loading) {
        return (
            <Loading/>
        );
    };

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>

            {AllJobs.length > 0 ? (
                AllJobs.map((job) => <AllJobsCard key={job._id} job={job} />)
            ) : (
                <h4 style={{ alignItems: 'center' }}>No Job Posted </h4>
            )
            }

        </div>
    )
}

export default Alljobs


