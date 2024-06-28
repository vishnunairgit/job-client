import React, { useEffect, useState } from 'react'
import { getAllJobs } from '../../../../Api/Job'
import AllJobsCard from '../Alljobs Cards/AllJobsCard'
import { useSelector } from 'react-redux';

function Alljobs() {

    // const [userId, setUserId] = useState(localStorage.getItem('userId') || ''); 

    const userId = useSelector(state => state.user.userDetails.userId);
    
    console.log(userId,'ppppppppppppppppppp');

    const [AllJobs, setAllJobs] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState(null);


    useEffect(() => {

        const fetchJobs = async () => {
            try {
                debugger
                const jobData = await getAllJobs(userId);
                setAllJobs(jobData)
                setloading(false)
            } catch (error) {
                seterror(error)
                setloading(false)
            }
        }
        // fetchJobs()

        if (userId) {
            fetchJobs();
        }

    }, [userId]);

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>

            {AllJobs.length > 0 ? (
                AllJobs.map((job) => <AllJobsCard key={job._id} job={job} />)
            ) : (
                <h4 style={{ alignItems: 'center' }}>No Job Posted</h4>
            )

            }

        </div>
    )
}

export default Alljobs