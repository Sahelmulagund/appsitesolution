import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import Category from '../../../components/crud/Category';
import Tag from '../../../components/crud/Tag';

import Link from 'next/Link'

const CategoryTag = () => {
	return(
		<Layout>
		<Admin>
		
		<div className="container-fluid">
		<div className="row d-flex justify-content-center pb-5">
		<div className="col-md-12 d-flex justify-content-center pt-5 pb-5">
		<h2>Manage Categories and Tags</h2>
		</div>
		<div div className="col-md-6">
		<Category/>


		</div>
		<div className="col-md-6"><Tag/></div>
		
		</div>
		</div>

		</Admin>
		</Layout>

		);

};


export default CategoryTag;