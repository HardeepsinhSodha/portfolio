import React from 'react';
import pageNotFound from '../../../asset/images/page-not-found.png'
import { Link } from 'react-router-dom';

export default function PageNotFound() {
    return (
        <div className='pt-5 text-center h-screen'>
            <img className='mx-auto mt-20' src={pageNotFound} alt="ball" />
            <div className='prose mx-auto'>
                <h2 className='my-0'>Page Not Found</h2>
                <p>Sorry, the page you’re looking for can’t be found</p>
                <Link to='/' className='btn btn-primary px-3 shadow-2'>Go Home</Link>
            </div>
        </div>
    )
}
