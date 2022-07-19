import React from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import {FaSignInAlt} from 'react-icons/fa'
import axios from 'axios'

function Address()
{
  const {register,handleSubmit,formState:{errors}}=useForm()
  //form submission
  const onFormSubmit = (userObj) => {
    //http post req
    axios
      .post("http://localhost:5000/user-api/create-user",userObj)
      .then((response) => {
          console.log(response)
        alert("new address added");
        console.log(userObj);
        
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong in creating user");
      });
  };
  return (
    
    <div className='row mt-3 bg-light' >
            <h2 className="text-center mt-3 text-success">Enter your address</h2>
            <div className="col-11 col-sm-8 col-md-6 mx-auto mt-3">
            <form onSubmit={handleSubmit(onFormSubmit)} className='w-75 mx-auto'>
                {/*FullName*/}
                <div className="mb-3">
                    <label htmlFor='un'>Full Name</label>
                    <input type="text" id="un" className="form-control" {...register("FullName", { required: true, minLength: 4 ,maxLength:12})} />
                        {/* validation error msg for FullName */}
                        {errors.FullName?.type === 'required' && <p className='text-danger'>* Name is required</p>}
                        {errors.FullName?.type === 'minLength' && <p className='text-danger'>* Min length should be 4</p>}
                        {errors.FullName?.type === 'maxLength' && <p className='text-danger'>* Max length should be 12</p>}

                </div>
                {/*Mobile Number*/}
                <div className="mb-3">
                    <label htmlFor='un'>  Mobile Number</label>
                    <input type="tel" id="un" className="form-control" {...register("username", { required: true, minLength:10 ,maxLength:10})} />
                        {/* validation error msg for Mobile Number*/}
                        {errors.username?.type === 'required' && <h6 className='text-danger'>*Please enter a phone number so we can call if there are any issues with delivery.</h6>}
                        {errors.username?.type === 'minLength' && <p className='text-danger'>* Min length should be 10</p>}
                        {errors.username?.type === 'maxLength' && <p className='text-danger'>* Max length should be 10</p>}

                </div>
                {/*Pincode*/}
                <div className="mb-3">
                    <label htmlFor='un'>Pincode</label>
                    <input type="tel" id="Pincode" className="form-control" {...register("Pincode", { required: true, minLength:6 ,maxLength:6})} />
                        {/* validation error msg for Pincode */}
                        {errors.Pincode?.type === 'required' && <p className='text-danger'>*Please enter a ZIP or postal code.</p>}
                       

                </div>
                {/*email*/}
                <div className="mb-3">
                    <label htmlFor='email'>Email</label>
                    <input type="email"  id="email" className="form-control" {...register("email",{required: true})} />
                    {/* validation error msg for email */}
                    {errors.email?.type === 'required' && <p className='text-danger'>* Email required</p>}
                    
                </div>
                {/*Area*/}
                <div className="mb-3">
                    <label htmlFor='un'>Area, House no., Building, Company, Apartment</label>
                    <input type="text" id="un" className="form-control" {...register("Flat", { required: true, minLength: 4 ,maxLength:12})} />
                        {/* validation error msg for Flat */}
                        {errors.Flat?.type === 'required' && <p className='text-danger'>*Please enter an address.</p>}
                        {errors.Flat?.type === 'minLength' && <p className='text-danger'>* Min length should be 4</p>}
                        {errors.Flat?.type === 'maxLength' && <p className='text-danger'>* Max length should be 100</p>}

                </div>
                {/*Area*/}
                <div className="mb-3">
                    <label htmlFor='un'>Flat, House no., Building, Company, Apartment</label>
                    <input type="text" id="un" className="form-control" {...register("Area", { required: true, minLength: 4 ,maxLength:100})} />
                        {/* validation error msg for Area */}
                        {errors.Area?.type === 'minLength' && <p className='text-danger'>* Min length should be 4</p>}
                        {errors.Area?.type === 'maxLength' && <p className='text-danger'>* Max length should be 100</p>}

                </div>
                {/*Landmark*/}
                <div className="mb-3">
                    <label htmlFor='Landmark'>Landmark</label>
                    <input type="text"  id="Landmark" className="form-control" {...register("Landmark",{required: true})} />
                    {/* validation error msg for Landmark */}
                    {errors.Landmark?.type === 'required' && <p className='text-danger'>*Landmark is required</p>}
                    
                </div>
                <div class="row">
                <label for="city" class="form-label col-sm-6">City</label>
                <label for="state" class="form-label col-sm-6">State</label>


            </div>
            <div class="row mb-3">
                <div class="col-sm-6">     
                    <input type="text"  id="city" class="form-control"/>
                </div>
                <div class="col-sm-6">
                    <select name="state" id="state" class="form-control">
                    <option value="" disabled selected hidden >Choose a state</option>
                    <option value="Telangana"  >Telangana</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Punjab">Punjab</option>
                </select>
                </div>
                </div>
                <div class="col-sm-9 mb-3 mt-3">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="Sample check box"/>
                            <label class="form-check-label" for="Sample check box">Mark this as my default address</label>
                        </div>
                    </div>
                
                <button type="submit" className="btn btn-success w-60 mb-4">Add Address</button>


            </form>
            </div>
        
        </div>
       
  )
}
export default Address

