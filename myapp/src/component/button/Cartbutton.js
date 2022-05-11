import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Cartbutton = () => {
//write the name of file not a function
    const state=useSelector((state)=>state.additems);
    return (
        <>
            
<NavLink to="/cart" className='btn btn-outline-primary ms-2'>

<span className="fa fa-shopping-cart me-1 "></span>
CART ({state.length})
</NavLink>

        </>
    );
};

export default Cartbutton;