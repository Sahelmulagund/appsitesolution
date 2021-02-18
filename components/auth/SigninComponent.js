import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch';
import {signin, authenticate, isAuth} from '../../actions/auth';
import {useState, useEffect} from 'react';
import Router from 'next/router';
import Link from 'next/link';
import LoginGoogle from './LoginGoogle';


const SigninComponent = () => {

	const [values, setValues] = useState({
		
		email: '',
		password: '',
		error: '',
		loading: false,
		message: '',

		showForm: true
	});

    const { name, email, password, error, loading, message, showForm } = values;

	useEffect(() => {
		isAuth() && Router.push(`/`)

	}, [])

	const handleSubmit = e => {
		e.preventDefault();
		//console.table({ name, email, password, error, loading, message, showForm }
		setValues({...values, loading: true, error: false})
		const user = { email, password}

		signin(user)
		  .then(data => {
			  if (data.error) {
			     	setValues({...values, error: data.error, loading: false})
			     	console.log(data.error)
			  }else{
			  //save user token to cookie
			         authenticate(data, () => {
			         	if (isAuth && isAuth().role === 1) {
			         		Router.push(`/admin`);
			         	}else{
			         		Router.push(`/user`);
			         	}
			         });
			    	
		    	}
		});
		
	};
	const handleChange = name => e => {
	  setValues({...values, error: false, [name]: e.target.value})	
	};

	const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div> : '');
    const showError = () => (error ? <div className="alert alert-danger">{error}</div> : '');
    const showMessage = () => (message ? <div className="alert alert-info">{message}</div> : '');

	const signinForm = () => {
		return(
			 <form onSubmit={handleSubmit}>
			 <div className="form-group">
			 <input value={email} onChange= {handleChange('email')} type="email" className="form-control" placeholder="Enter your e-mail"/>
			  <style jsx>{`
			
                     .form-control{
                     	width: 100%;
                     	border-radius: 10px;
                     }
                     `}</style>
			 </div>
			 <div className="form-group">
			 <input value={password} onChange= {handleChange('password')} type="password" className="form-control" placeholder="Enter your password"/>
			  <style jsx>{`
			
                     .form-control{
                     	width: 100%;
                     	border-radius: 10px;
                     }
                     `}</style>
			 </div>

			 <div className="butn">
			 <button className="btn">Signin</button>
			 <style jsx>{`
			
                    

			 	     .btn{
			 	     	display: block;
			 	     	margin: 20px auto;
			 	     	border: none;
			 	     	outline: none;
			 	     	background-color: #00bcd4;
			 	     	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
			 	     	border-radius: 10px;
			 	     	font-size: 16px;
			 	     	color: white;
			 	     	width: 100%;
			 	     }
			 	     .btn:hover{
			 	     	box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
                  
			 	     }
			 	`}</style>
			 </div>
			 </form>
			)
	}

	return(
		   <React.Fragment>
		   {showError()}
		   {showLoading()}
		   {showMessage()}
		   <LoginGoogle />
		   {showForm && signinForm()}
		    <br />
            <Link href="/auth/forgot">
                <a className="btn btn-outline-danger btn-sm">Forgot password</a>
            </Link>
		   </React.Fragment>
		);
}

export default SigninComponent;