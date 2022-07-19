import React from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import {FaSignInAlt} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import axios from 'axios'
function Signup()
{
    const {register,handleSubmit,formState:{errors}}=useForm()

    //form submission
    const onFormSubmit = (userObj) => {
        //http post req
        console.log(userObj)
        axios
          .post('http://localhost:5000/user-api/create-user', userObj)
          .then((response) => {
              console.log(response)
            alert("user created");
            console.log(userObj);
            
          })
          .catch((error) => {
            console.log(error);
            alert("Something went wrong in creating user");
          });
      };
    return(
        <div className='row mt-3' >
            <p className="display-1  text-center">Sign up</p>
            <div className="col-11 col-sm-8 col-md-6 mx-auto mt-3">
            <form onSubmit={handleSubmit(onFormSubmit)} className='w-75 mx-auto'>
                {/*username*/}
                <div className="mb-3">
                    <label htmlFor='un'>Username</label>
                    <input type="text" id="un" className="form-control" {...register("username", { required: true, minLength: 4 ,maxLength:6})} />
                        {/* validation error msg for username */}
                        {errors.username?.type === 'required' && <p className='text-danger'>* Username required</p>}
                        {errors.username?.type === 'minLength' && <p className='text-danger'>* Min length should be 4</p>}
                        {errors.username?.type === 'maxLength' && <p className='text-danger'>* Max length should be 6</p>}

                </div>
                {/*password*/}
                <div className="mb-3">
                    <label htmlFor='un'>password</label>
                    <input type="password" id="password" className="form-control" {...register("password", { required: true, minLength: 4 ,maxLength:6})} />
                        {/* validation error msg for password */}
                        {errors.password?.type === 'required' && <p className='text-danger'>* password is  required</p>}
                       

                </div>
                {/*email*/}
                <div className="mb-3">
                    <label htmlFor='email'>Email</label>
                    <input type="email"  id="email" className="form-control" {...register("email",{required: true})} />
                    {/* validation error msg for email */}
                    {errors.email?.type === 'required' && <p className='text-danger'>* Email required</p>}
                    
                </div>
                {/*city*/}
                <div className="mb-3">
                    <label htmlFor='city'>City</label>
                    <input type="text"  id="city" className="form-control" {...register("city",{required: true})} />
                    {/* validation error msg for city */}
                    {errors.city?.type === 'required' && <p className='text-danger'>*City is required</p>}
                    
                </div>
                
                <button type="submit" className="btn btn-success w-100 mb-4">Signup<FaSignInAlt/></button>
                <h1 className="h1-e"><Link to={{pathname : '/Login'}}>Already have an account?</Link></h1>

            </form>
            </div>
        
        </div>
    )
}
export default Signup