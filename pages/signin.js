import Layout from '../components/Layout'
import React from 'react';
import Link from 'next/Link'
import ReactDOM from 'react-dom';
import { withRouter } from 'next/router';
import SigninComponent from '../components/auth/SigninComponent';
const Signin = ({ router }) => {

   const showRedirectMessage = () => {
        if (router.query.message) {
            return <div className="alert alert-danger">{router.query.message}</div>;
        } else {
            return;
        }
    };
	return (
             <Layout>
             <div className="container">

             <h2 className="text-center pt-4 pb-4">Signin</h2>
               <div className="row">
                    <div className="col-md-6 offset-md-3">{showRedirectMessage()}</div>
                </div>
              <h6 className="text-center">Welcome back!</h6>
              <h6 className="text-center text-muted">Please signin to continue!</h6>
            
             <div className="row">
             <div className="col-md-6 offset-md-3">
               <SigninComponent/>
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

export default withRouter(Signin);
