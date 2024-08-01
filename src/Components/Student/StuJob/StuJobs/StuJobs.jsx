import React, { useState } from 'react'
import { useEffect } from 'react'
import { getAllJob } from '../../../../Api/Job'

function StuJobs() {

  const [Alljob, setAlljob] = useState([])
  const [loading, setloading] = useState(true)
  const [error, seterror] = useState(null)

  useEffect(()=>{
    const FetchAllJobs = async () =>{
      try {
        const AllJobs = await getAllJob();
        setAlljob(AllJobs)
        setloading(false)
      } catch (error) {
        seterror(error);
        setloading(false)
      }
    }
    FetchAllJobs();
  },[])


  return (

    <div>

      StuJobs
      kkkkk\
      kkkk


    </div>
  )
}

export default StuJobs