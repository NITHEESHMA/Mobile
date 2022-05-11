import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { delitem } from '../redux/action';

const Cartpage = () => {
const state=useSelector((state)=>state.additems)
const dispatch=useDispatch();


const handleclose=(item)=>{
dispatch(delitem(item))
}

const cartItems=(cartitem)=>{
    return(

        <div className='px-4 my-5 bg-light rounded-3' key={cartitem.id}>
        <div className='container py-4'>
        
        <button  onClick={()=>handleclose(cartitem)} className='btn-close float-end' aria-label='Close'></button>
        <div className='row justify-content-center'>
        <div className='col-md-4'>
        <img src={cartitem.img} alt="" height='200px' width="100px"/>
        </div>
        <div className='col-md-4'>
        
        <h3>{cartitem.title}</h3>
        <p className="lead fw-bold">${cartitem.price}</p>
        
        </div>
        
        </div>
        
        </div>
        
        </div>
    )
}

const emptycart=()=>{
    return(

        <div className='px-4 my-5 bg-light rounded py-5'>
        <div className='container py-4'>
        <div className='row'>
        
        <h3>your cart is empty</h3>
        
        </div>
        
        </div>
        
        
        </div>
    )
}


const button=()=>{
    return(
<div className='container'>

<div className='row'>
<NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">proceed to checkout</NavLink>

</div>


</div>


    )
}
    return (
        <>
            
        {state.length===0 && emptycart()}
        {state.length !==0 && state.map(cartItems)}
        {state.length !==0 && button()}
        </>
    );
    }

export default Cartpage;