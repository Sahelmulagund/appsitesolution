import Layout from '../components/Layout'
import Link from 'next/link'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import SignupComponent from '../components/auth/SignupComponent'
import React from 'react';
import ReactDOM from 'react-dom';
const Signup = ({ children }) => {
	return (
             <Layout>
             <div className="container">
             <h2 className="text-center pt-4 pb-4">Signup</h2>
             <h6 className="text-center">Hello!</h6>
             <h6 className="text-center text-muted">Please signup to register with us!</h6>
             <div className="row">
             <div className="col-md-6 offset-md-3">
               <SignupComponent/>
               </div>
               </div>
                <style jsx>{`


                   .container{
                     box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                     transition: 0.3s;
                     border-radius: 20px;
                
                    
                     margin-top: 50px;
                     
                      width: 35em;
                      position: relative;

                     padding: 20px;
                     margin-bottom: 30px;
                     
                    
                   }
                   .container:hover{
                    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
                   }

                `}</style>
               </div>
               
             </Layout>
		);
};

export default Signup;
