import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './Components/Landing/Landing/Landing';
import Home from './Components/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import StuHome from './Components/Student/StuHome/StuHome/StuHome';



function App() {
  return (
    <div className="App">
      {/* <UserProvider> */}
        <BrowserRouter>
          <Routes>
            <Route >
              <Route path="/" element={<Landing />} />
              <Route path="*" element={<Home />} />

              <Route path="/StuHome/*" element={<StuHome />} />



            </Route>
          </Routes>
        </BrowserRouter>
      {/* </UserProvider> */}
    </div>
  );
}

export default App;
