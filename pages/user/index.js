import Layout from '../../components/Layout';
import Private from '../../components/auth/Private';
import Link from 'next/link'

const UserIndex = () => {
	return(
		<Layout>
		<Private>
		<div className="container-fluid pt-5 pb-5">
		<div className="row">
		<div className="col-md-12 pt-5 pb-5">
		<h2 className="ml-5">User Dashboard</h2>
		</div>
		<div className="col-md-8">
		<ul className="list-group">
        
        <li className="list-group-item">
       
        <a href="/user/crud/blog">Create Blog Post</a>
        
        </li>

         <li className="list-group-item">
        
        <a href="/user/crud/blogs">Update/Delete Projects</a>
        
        </li>
         <li className="list-group-item">
        <Link href="/user/update">
        <a>Update Your Profile</a>
        </Link>
        </li>
         </ul>

		</div>
	
		</div>
		</div>
		</Private>
		
		</Layout>

		);

};


export default UserIndex;