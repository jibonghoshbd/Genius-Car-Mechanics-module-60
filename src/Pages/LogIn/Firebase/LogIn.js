import React from 'react';
import useAuth from '../../Hooks/useAuth';

const LogIn = () => {
    const { googleSignIn } = useAuth()
    return (
        <div className="text-center">
            <h3>This is login</h3>
            <button onClick={googleSignIn} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default LogIn;