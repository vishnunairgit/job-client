// import React, { useEffect, useState } from 'react';
// import io from 'socket.io-client';
// import { BASE_URL } from '../../Constants/BaseUrl';

// const Notifications = () => {
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     const socket = io(BASE_URL);

//     socket.on('connect', () => {
//       console.log('Connected to WebSocket server.');
//     });

//     socket.on('NEW_JOB', (job) => {
//       debugger
//       console.log('Received new job notification:', job);
//       setNotifications((prevNotifications) => [job, ...prevNotifications]);
//     });

//     socket.on('disconnect', () => {
//       console.log('Disconnected from WebSocket server.');
//     });

//     socket.on('error', (error) => {
//       console.error('WebSocket error:', error);
//     });

//     // Clean up on component unmount
//     return () => {
//       console.log('Cleaning up WebSocket...');
//       socket.off('NEW_JOB'); // Remove specific event listener
//       socket.disconnect();  // Disconnect the socket
//     };
//   }, []); // Empty dependency array ensures this runs once on mount

//   return (
//     <div>
//       <h2>Job Notifications</h2>
      
//       <ul>
//         {notifications.length > 0 ? (
//           notifications.map((job) => (
//             <li key={job._id}>
//               <strong>{job.JobTitle}</strong> at {job.Location}
//             </li>
//           ))
//         ) : (
//           <p>No notifications yet.</p>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default Notifications;




import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { BASE_URL } from '../../Constants/BaseUrl';

const Notifications = () => {
const [Socket, setSocket] = useState('')
  useEffect(() => {
    const socketIo = io('http://localhost:8002', {
      transports: ['websocket'],
      cors: {
        origin: "http://localhost:3000",
      },
    });
  
    setSocket(socketIo);
  
    socketIo.on('connect', () => {
      console.log(`Connected to WebSocket server with ID: ${socketIo.id}`);
    });
  
    socketIo.on('NEW_JOB', (jobData) => {
      console.log('New job received:', jobData);
      // Handle the notification here, e.g., display it in the UI
    });
  
    return () => {
      if (socketIo) {
        socketIo.disconnect();
        console.log('WebSocket connection closed');
      }
    };
  }, []);
  

  return (
    <div>
      <h2>Job Notifications</h2>
      <p>Waiting for job notifications...</p>
    </div>
  );
};

export default Notifications;
