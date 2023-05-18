
import React from 'react'
import { Link } from 'react-router-dom';
import PageNotFound from '../img/error404.png'
const NoPage = () => {
    return (
        <div>
            <img src={PageNotFound} style={{ width:"90%" }} alt='404 page Not found' />
            <p style={{ textAlign: "center" }}>
                <Link to="/home">Go to Home </Link>
            </p>
        </div>
    )
}

export default NoPage;