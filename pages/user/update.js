import Layout from '../../components/Layout';
import Private from '../../components/auth/Private';
import ProfileUpdate from '../../components/auth/ProfileUpdate';
import Link from 'next/link';

const UserProfileUpdate = () => {
    return (
        <Layout>
            <Private>
            <div className="container-fluid">
            <h2 className="text-center pb-5 pt-5">Update Your Profile</h2>
                 
            </div>
                <div className="container-fluid">

                    <div className="row">
                        <ProfileUpdate />
                    </div>
                </div>
            </Private>
        </Layout>
    );
};

export default UserProfileUpdate;