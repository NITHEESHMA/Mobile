import React from 'react';
import { NavLink } from 'react-router-dom';
import Data from '../Data/Data';
const Product = () => {
const carditem=(item)=>{
    return(

        <div className="card mb-4 my-5 py-4" key={item.id} style={{width: "18rem"}}>
        <img src={item.img} className="card-img-top" alt={item.title}/>
        <div className="card-body">
          <h5 className="card-title text-center">{item.title}</h5>
          <p className="lead">${item.price}</p>
          <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary">BUY NOW</NavLink>
        </div>
      </div>

    );
}



    return (
        <div>
            <div className='container'>
            <div className='row '>
            
            <div className='col-12 text-center'>
            
            <h1>product</h1>
            <hr/>
            </div>
             </div>
            </div>

<div className='container'>

<div className="row justify-content-around">

{Data.map(carditem)}

</div>

</div>

        </div>
    );
};

export default Product;