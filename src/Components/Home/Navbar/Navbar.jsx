import React, { useContext } from 'react'
import './navbar.css'
import logo from '../../Assets/net.america.png'
import notification from '..//../Assets/icons8-notification-24.png'
import user from '../../Assets/icons8-user-24.png'
import { useNavigate } from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate()


    const handlelogout = () => {
        localStorage.clear()
        navigate('/')
    }

    const handleHome =() =>{
        navigate('/Home')
    }

    const handleaddjOb =() =>{
        navigate('/AddJobs')
    }

    const handleAlljobs = () =>{
        navigate('./Alljobs')
    }

    const handleprofile = ()=>{
        navigate('/UserView')
    }
   


    return (

        <div >
            <div className="navbarHome">

                <div className='nav-leftside'>
                    <img src={logo} alt="" onClick={handleHome} />

                    <div className="dropdown-jobs">
                        <button className="btn btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className='jobs'>JOB</span>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><span className="dropdown-item" onClick={handleaddjOb} >Add a New Job</span></li>
                            <li><span className="dropdown-item" onClick={handleAlljobs} >List All Job</span></li>
                        </ul>
                    </div>
                </div>

                <div className="nav-rightside">

                    <div className="dropdown-noti">
                        <button className="btn btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={notification} alt="" />
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                        </ul>
                    </div>

                    <div className="dropdown-user">
                        <button className="btn btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={user} alt="" />
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" onClick={handleprofile}>Profile</a></li>
                        <li><a className="dropdown-item" onClick={handlelogout}>logout</a></li>



                        </ul>
                    </div>

                </div>
            </div>





        </div>
    )
}

export default Navbar