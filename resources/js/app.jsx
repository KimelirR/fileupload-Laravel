import './bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/boxicons/css/boxicons.min.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';

import '../assets/vendor/purecounter/purecounter_vanilla';
import '../assets/vendor/glightbox/js/glightbox.min';
import '../assets/vendor/isotope-layout/isotope.pkgd.min';
import '../assets/vendor/swiper/swiper-bundle.min';
import '../assets/vendor/waypoints/noframework.waypoints';
import '../assets/vendor/php-email-form/validate';
import '../assets/js/main';
import '../assets/js/demo-4.3';

import React from 'react';
import ReactDom from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import GuestLayout from './src/layouts/GuestLayout';
import About from './src/pages/About';
import Contact from './src/pages/Contact';
import Portfolio from './src/pages/Portfolio';
import Services from './src/pages/Services';
import Resume from './src/pages/Resume';
import Index from './src/pages/Index';


const router = createBrowserRouter([
    {
        path: "/",
        element: <GuestLayout/>,
        errorElement: <div>Oops! Not Found</div>,
        children: [
            {
                path: "",
                element: <Index />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "resume",
                element: <Resume />,
            },
            {
                path: "services",
                element: <Services />,
            },
            {
                path: "portfolio",
                element: <Portfolio />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
        ],
    }
]);

ReactDom.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
