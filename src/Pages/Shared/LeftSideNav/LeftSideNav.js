import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const LeftSideNav = () => {
    const [courseCategories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courseCatagories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div className='mt-5'>
            <h4>All Category: {courseCategories.length}</h4>
            <div>
                {
                    courseCategories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;