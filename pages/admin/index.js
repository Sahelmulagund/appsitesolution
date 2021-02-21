import Layout from '../../components/Layout';
import Admin from '../../components/auth/Admin';
import Link from 'next/link'

const AdminIndex = () => {
	return(
		<Layout>
		<Admin>
		<div className="container-fluid pb-5 pt-5">
		<div className="row">
		<div className="col-md-12 pt-5 pb-5">
		<h2 className="ml-5">Admin Dashboard</h2>
		</div>
		<div className="col-md-4">
		<ul className="list-group">
        <li className="list-group-item">
        <Link href="/admin/crud/category-tag">
        <a>Create Category/Tag</a>
        </Link>
        </li>
        <li className="list-group-item">
       
        <a href="/admin/crud/blog">Create Blog Post</a>
        
        </li>

        <li className="list-group-item">
        
        <a href="/admin/crud/blogs">Update/Delete Projects</a>
        
        </li>
        <li className="list-group-item">
        <Link href="/user/update">
        <a>Update Profile</a>
        </Link>
        </li>
         </ul>

		</div>
		
		</div>
		</div>
		</Admin>
		</Layout>

		);

};


export default AdminIndex;