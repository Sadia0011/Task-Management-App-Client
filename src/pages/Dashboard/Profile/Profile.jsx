import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const useremail = user?.email;
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch("https://task-management-server-nine-woad.vercel.app/user");
                const users = await response.json();
                
                // Find user with matching email
                const userInUse = users.find((user) => user.email === useremail);

                // Do something with the user data (store it in state, etc.)
                setUserData(userInUse);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        if (useremail) {
            fetchUserData();
        }
    },
    [useremail]);
    return (
        <div className='flex flex-col justify-start items-center space-y-6'>
            <div className="avatar">
  <div className="w-24 rounded-full">
    <img src={userData?.photoURL} />
  </div>
</div>
<div>
    <h2 className='text-lg'><span className='font-semibold'>Name:</span> {userData?.displayName}</h2>
    <h2 className='text-lg'><span className='font-semibold'>Email:</span> {userData?.email}</h2>
</div>
        </div>
    );
};

export default Profile;