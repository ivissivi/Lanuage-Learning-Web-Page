import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import NavbarLoggedIn from '../components/NavbarLoggedIn';
import Sidebar from '../components/Sidebar';
import SidebarLoggedIn from '../components/SidebarLoggedIn';
import Banner from '../components/Banner';
import Languages from '../components/Languages';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import Axios from 'axios';

const Homepage = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [loginStatus, setLoginStatus] = useState('');

  const toggle = () => {
    setIsOpen(!isOpen)
  };

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get('http://localhost:3001/login').then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].username);
      }
    });
  }, []);

  return (
    <>
        {loginStatus == '' ? (
        <React.Fragment>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} style={{overflowY:"scroll", height: "800px"}}/>
        <Banner />
        <AboutUs />
        </React.Fragment>
      ) : (
        <React.Fragment>
        <SidebarLoggedIn isOpen={isOpen} toggle={toggle} />
        <NavbarLoggedIn toggle={toggle} style={{overflowY:"scroll", height: "800px"}} />
        <Languages />
        </React.Fragment>
        )
        }
      <Footer />
    </>
  );
};

export default Homepage;
