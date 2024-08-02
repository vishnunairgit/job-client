// import React, { useState } from 'react';
// import { useEffect } from 'react';
// import { getAllJob } from '../../../../Api/Job';
// import loadingGif from '../../../Assets/loading...gif';


// function StuJobs() {

//   const [Alljob, setAlljob] = useState([])
//   const [loading, setloading] = useState(true)
//   const [error, seterror] = useState(null)

//   useEffect(() => {
//     const FetchAllJobs = async () => {
//       try {
//         const AllJobs = await getAllJob();
//         setAlljob(AllJobs)
//         setloading(false)
//       } catch (error) {
//         seterror(error);
//         setloading(false)
//       }
//     }
//     FetchAllJobs();
//   }, [])

//   if (loading) {
//     return (
//       <div className="spinner-container">
//         <img src={loadingGif} alt="Loading..." className="spinner" />
//       </div>
//     );
//   };

//   return (

//     <div>

//       StuJobs
//       kkkkk\
//       kkkk


//     </div>
//   )
// }

// export default StuJobs



import React, { useState, useEffect } from 'react';
import { getAllJob } from '../../../../Api/Job';
import loadingGif from '../../../Assets/loading...gif';
import './stujobs.css'; // Import your CSS file
import StuJobCard from './Stujobcard/StuJobCard';

function StuJobs() {
  const [AllJobs, setAllJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const AllJobs = await getAllJob();
        setAllJobs(AllJobs);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchAllJobs();
  }, []);

  if (loading) {
    return (
      <div className="spinner-container">
        <img src={loadingGif} alt="Loading..." className="spinner" />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      {AllJobs.length > 0 ? (
        AllJobs.map((job) => < StuJobCard key={job.__id} job={job} />)
      ) : (<h4 style={{ alignItems: 'center' }}>No Job Posted </h4>
      )}

    </div>
  );
}

export default StuJobs;
