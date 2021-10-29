import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../../images/404.png';

const NotFound = () => {
    return (
        <div>
            <img className="w-100" src={notFound} alt="" />
            <div >
                <Link to='/'><button className='btn btn-success ps-5 pe-5'>Go Back</button></Link>
            </div>
        </div>

    );
};

export default NotFound;