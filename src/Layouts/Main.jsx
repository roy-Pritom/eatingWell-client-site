import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Main = () => {
    return (
        <div>
            <ToastContainer></ToastContainer>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;