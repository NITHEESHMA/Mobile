import React from 'react';
const Login = () => {
    return (
        <>
        
<button type="button" className="btn btn-outline-primary ms-2" 
data-bs-toggle="modal" data-bs-target="#exampleModal"><span className='fa fa-sign-in me-1'></span>
Login
</button>



<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog">
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLabel">LOGIN</h5>
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div className="modal-body">


<button className='btn btn-primary w-100 mb-4'>
<span className='fab fa-google me-2'></span>
Sign In With Google
</button>


<button className='btn btn-primary w-100 mb-4'>
<span className='fab fa-facebook me-2'></span>
Sign In With Facebook
</button>


    <form>
    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label for="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1"/>
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
      <label className="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" className="btn btn-outline-primary w-100  mb-4">Submit</button>
  </form>
    </div>
   
  </div>
</div>
</div>
        </>
    );
};

export default Login;