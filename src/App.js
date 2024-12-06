// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import SignupPage from './pages/SignupPage';
// import LoginPage from './pages/LoginPage';
// import CarsListPage from './pages/CarsListPage';
// import CarDetailPage from './pages/CarDetailPage';
// import CreateCarPage from './pages/CreateCarPage';
import Layout from "./components/Layout/Layout";
//import Navbar from './components/Navbar';
const App = () => {
    //const [token, setToken] = useState(localStorage.getItem('token'));

    return (
        <Layout />
        /*<Router>
            <Routes>
                <Route path="/" element={<LoginPage setToken={setToken} />} />
                <Route path="/Signup" element={<SignupPage />} />
                <Route path="/cars" element={<CarsListPage />} />
                <Route path="/cars/:carId" element={<CarDetailPage />} />
                <Route path="/create-car" element={<CreateCarPage editMode={false} />} />
                <Route path="/edit-car/:carId" element={<CreateCarPage editMode={true} />} />
            </Routes>
        </Router>*/
        
    );
};

export default App;
