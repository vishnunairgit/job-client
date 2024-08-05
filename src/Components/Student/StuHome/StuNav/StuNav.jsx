import React from 'react';
import logo from '../../../Assets/net.america.png';
import notification from '../../../Assets/icons8-notification-24.png';
import user from '../../../Assets/icons8-user-24.png';
import { useNavigate } from 'react-router-dom';


function StuNav() {
    const navigate = useNavigate()

    const handleHome = () => {
        navigate('/StuHome')
    }
    return (
            <div >
                <div className="navbarHome">

                    <div className='nav-leftside'>
                        <img src={logo} alt="" onClick={handleHome} />
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
                                <li><a className="dropdown-item" >Profile</a></li>
                                <li><a className="dropdown-item" >Applied Job</a></li>
                                <li><a className="dropdown-item" >logout</a></li>

                            </ul>
                        </div>

                    </div>


                </div>

            </div>
    )
}

export default StuNav


// import React, { useState } from 'react';
// import logo from '../../../Assets/net.america.png';
// import notification from '../../../Assets/icons8-notification-24.png';
// import user from '../../../Assets/icons8-user-24.png';
// // import searchIcon from '../../../Assets/icons8-search-24.png'; // Add your search icon here
// import { useNavigate } from 'react-router-dom';
// import '../../StuJob/StuJobs/stujobs.css'

// function StuNav() {
//     const navigate = useNavigate();
//     const [isSearchOpen, setIsSearchOpen] = useState(false);
//     const [searchData, setSearchData] = useState({
//         keyword: '',
//         experience: '',
//         location: ''
//     });

//     const handleHome = () => {
//         navigate('/StuHome');
//     };

//     const handleSearchClick = () => {
//         setIsSearchOpen(!isSearchOpen);
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setSearchData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSearchSubmit = (e) => {
//         e.preventDefault();
//         // Perform search logic here
//         console.log('Search Data:', searchData);
//     };

//     return (
//             <div className="navbarHome">

//                 <div className='nav-leftside'>
//                     <img src={logo} alt="" onClick={handleHome} />
//                 </div>



//                 <div className='nav-center'>
//                     <div className={`search-container ${isSearchOpen ? 'open' : ''}`}>
//                         <button onClick={handleSearchClick} className="search-icon">
//                             {/* <img src={user} alt="Search" /> */}
//                             <input class="form-control me-2" type="search" placeholder="Search Job"/>
//                         </button>
                      
//                         {isSearchOpen && (
//                             <form className="search-form" onSubmit={handleSearchSubmit}>
//                                 <input
//                                     type="text"
//                                     name="keyword"
//                                     placeholder="Keyword"
//                                     value={searchData.keyword}
//                                     onChange={handleInputChange}
//                                 />
//                                 <input
//                                     type="text"
//                                     name="experience"
//                                     placeholder="Experience"
//                                     value={searchData.experience}
//                                     onChange={handleInputChange}
//                                 />
//                                 <input
//                                     type="text"
//                                     name="location"
//                                     placeholder="Location"
//                                     value={searchData.location}
//                                     onChange={handleInputChange}
//                                 />
//                                 <button type="submit">Search</button>
//                             </form>
//                         )}
//                     </div>
//                 </div>
                

//                 <div className="nav-rightside">
//                     <div className="dropdown-noti">
//                         <button className="btn btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
//                             <img src={notification} alt="" />
//                         </button>
//                         <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//                             <li><a className="dropdown-item" href="#">Action</a></li>
//                             <li><a className="dropdown-item" href="#">Another action</a></li>
//                         </ul>
//                     </div>

//                     <div className="dropdown-user">
//                         <button className="btn btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
//                             <img src={user} alt="" />
//                         </button>
//                         <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//                             <li><a className="dropdown-item" >Profile</a></li>
//                             <li><a className="dropdown-item" >Applied Job</a></li>
//                             <li><a className="dropdown-item" >Logout</a></li>
//                         </ul>
//                     </div>
//                 </div>

//             </div>
//     );
// }

// export default StuNav;
