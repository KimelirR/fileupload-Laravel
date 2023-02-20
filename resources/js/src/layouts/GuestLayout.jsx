import React from 'react';
import { Link, Outlet} from 'react-router-dom';

import Header from '../pages/Header';
import Footer from '../pages/Footer';


const GuestLayout = () => {

  return (
<>
    <Header/>

    <Outlet />

    <Footer/>
</>

  )
}

export default GuestLayout
