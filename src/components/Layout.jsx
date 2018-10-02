import React from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import 'semantic-ui-css/semantic.min.css';


const layout = ({ children }) => (
  <>
    <NavBar />
    {children}
    <Footer />
  </>
)



export default layout;
