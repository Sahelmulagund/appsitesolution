import React, { useState } from 'react';
import { APP_NAME } from '../config';
import Link from 'next/Link';
import NProgress from 'nprogress'
import {signout, isAuth} from '../actions/auth'
import Router from 'next/router';
import Search from './blog/Search'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import '.././node_modules/nprogress/nprogress.css';
Router.onRouteChangeStart = url => NProgress.start()
Router.onRouteChangeComplete = url => NProgress.done()
Router.onRouteChangeError = url => NProgress.done()


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.Fragment>
    
   
      <Navbar color="danger" dark expand="md">

        
      <Link href="/"><NavLink style={{cursor: 'pointer', color: 'white'}} className="font-weight-bold">{ APP_NAME }</NavLink></Link>
       <div className="tog">
       <NavbarToggler onClick={toggle}/>
       <style jsx>{`
                   .tog{
                    
                    padding:10px;
                   }

                `}</style>
       </div>
        <Collapse isOpen={isOpen} navbar>
      
          <Nav className="mr-auto" navbar>
            <React.Fragment>

            <NavItem>
            <Link href="/blogs">
            <div className="div-nav">
            <NavbarText style={{color: 'white', cursor:'pointer'}}>Projects</NavbarText>
            <style jsx>{`
                   .div-nav:hover{
                    background-color: #30D5C8;
                    border-radius: 10px; 
                   }
                   .div-nav{
                    margin-left: 15px;
                   }

                `}</style>
            </div>
            </Link>
            </NavItem>
            </React.Fragment>
          </Nav>

          {!isAuth() && <React.Fragment>
             
            
              
               <Link href="/signin">
               <div className="div-nav">
               <NavLink style={{cursor: 'pointer', color: 'white'}}>Signin
                </NavLink>
                  <style jsx>{`
                   .div-nav:hover{
                    background-color: #30D5C8;
                    border-radius: 10px;
                   }

                `}</style>
                </div>
               </Link>

             
            
               <Link href="/signup">
               <div className="div-nav">
               <NavLink style={{cursor: 'pointer', color: 'white'}}>Signup
                </NavLink>
                  <style jsx>{`
                   .div-nav:hover{
                    background-color: #30D5C8;
                    border-radius: 10px;
                   }

                `}</style>
                </div>
               </Link>

               
             
            
          
              </React.Fragment>}
               <Link href="/contact">
               <div className="div-nav">
               <NavLink style={{cursor: 'pointer', color: 'white'}}>Contact
                </NavLink>
                  <style jsx>{`
                   .div-nav:hover{
                    background-color: #30D5C8;
                    border-radius: 10px;
                   }

                `}</style>
                </div>
               </Link>
         
              {isAuth() && isAuth().role === 0 && (
             <div className="div-nav">
             <Link href="/user">
               <NavLink style={{cursor: 'pointer', color: 'white'}}>
               {`${isAuth().username}'s Dashboard`}
               </NavLink>
               </Link>
               <style jsx>{`
                   .div-nav:hover{
                    background-color: #30D5C8;
                    border-radius: 10px;
                   }

                `}</style>
                </div>
               
               
                
               
             
          
              )}
              {isAuth() && isAuth().role === 1 && (
             <div className="div-nav">
             <Link href="/admin">
               <NavLink style={{cursor: 'pointer', color: 'white'}}>
               {`${isAuth().username}'s Dashboard`}
               </NavLink>
               </Link>
            <style jsx>{`
                   .div-nav:hover{
                    background-color: #30D5C8;
                    border-radius: 10px;
                   }

                `}</style>
                </div>
          
               
             
          
              )}

               {isAuth() && (
             <div className="div-nav">
               <NavLink style={{cursor: 'pointer', color: 'white'}} onClick = {() => signout(() => Router.replace(`/signin`))}>Signout
               </NavLink>
                <style jsx>{`
                   .div-nav:hover{
                    background-color: #30D5C8;
                    border-radius: 10px;
                   }

                `}</style>
                </div>
                
               
             
          
              )}


              <a href="/user/crud/blog">
               <div className="div-nav">
               <NavLink style={{cursor: 'pointer', color: 'white'}}>Add Project
                </NavLink>
                  <style jsx>{`
                   .div-nav:hover{
                    background-color: #30D5C8;
                    border-radius: 10px;
                   }

                `}</style>
                </div>
               </a>



        </Collapse>
       
        

      </Navbar>
      <Search/>
     
      
    
     

    </React.Fragment>


  );
}

export default Header;