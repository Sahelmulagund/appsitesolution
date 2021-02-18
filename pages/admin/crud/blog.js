import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import BlogCreate from '../../../components/crud/BlogCreate';


import Link from 'next/Link';

const Blog = () => {
	return(
		<Layout>
		<Admin>
		
		<div className="container-fluid">
		<div className="row d-flex justify-content-center pb-5">
		<div className="col-md-12 d-flex justify-content-center pt-5 pb-5">
		<h2 className="display-4">Create a new blog</h2>
		</div>
		<div className="col-md-12 d-flex justify-content-center pb-5">
		<BlogCreate/>


		</div>
		
		
		</div>
		</div>

		</Admin>
		</Layout>

		);

};


export default Blog;