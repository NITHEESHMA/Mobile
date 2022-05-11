import React from 'react';

const Contact = () => {
    return (
        <div>
           <div className='container mb-5'>
           <div className='row'>
           <div className='col-12 text-center py-3 my-3'>
           <h1>Have Some Questions</h1>
           <hr/>
           
           </div>
           
           </div>
           




           <div className='row'>
           <div className='col-md-5 d-flex justify-content-center'>
          
           <img src='https://tse2.mm.bing.net/th?id=OIP.9tL61Ttq0z1nUB6MbTFAQwHaHa&pid=Api&P=0&w=176&h=176' alt="" height="300px" width="300px"/>
           
           </div>
           
<div className='col-md-6'>
<form>

<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Full Name</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""/>
</div>

<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
</div>

<button type='submit'
 className='btn btn-outline-primary'>Send message</button>
</form>


</div>

           </div>
           
           </div>
        
        </div>
    );
};

export default Contact;