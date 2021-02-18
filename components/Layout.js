import Header from '../components/Header'
import FooterPage from '../components/FooterPage'
import React from 'react';
import ReactDOM from 'react-dom';
const Layout = ({ children }) => {
	return (
              <React.Fragment>
              <Header/>
             {children}
              <FooterPage/>
              </React.Fragment>
		)
}

export default Layout;
