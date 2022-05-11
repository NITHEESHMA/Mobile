import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Data from '../Data/Data';
import { additem,delitem } from '../redux/action';
import { useDispatch } from 'react-redux';

const Productdetail = () => {


const [cart,setcart]=useState("add to cart")


    const proid=useParams();
    const prodetails=Data.filter(x=>x.id==proid.id)

    const product=prodetails[0]
    //console.log(product)
const dispatch=useDispatch();

const handlecart=(product)=>{
if(cart==="add to cart"){

    dispatch(additem(product))
    setcart("remove from cart");
}
else{
    dispatch(delitem(product))
    setcart("add to cart");
}
}


    return (
        <div>
            <div className='container my-3 py-3'>
            
            <div className='row'>
            
            <div className='col-md-6 d-flex justify-content-center mx-auto product'>
            
            <img src={product.img} alt={product.title} height="400px"/>
            </div>
           
<div className='col-md-6 d-flex flex-column justify-content-center'>
<h1 className="display-5 fw-bold">{product.title}</h1></div><hr/>
<h2 className="my-4">${product.price}</h2>
<p className="lead">{product.desc}</p>
<button  onClick={()=>handlecart(product)} className='btn btn-outline-primary my-5'>{cart}</button>
</div>
            
            </div>
        </div>
    );
};

export default Productdetail;