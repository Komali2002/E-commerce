import React from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import {FaSignInAlt} from 'react-icons/fa'
import axios from 'axios'
import { Form, Button } from "react-bootstrap";
import { MdLogin } from "react-icons/md";
import './Login.css';
import {Link} from 'react-router-dom'
function Login()
{
    const {register,handleSubmit,formState:{errors}}=useForm()

    //form submission
    const onFormSubmit = (userObj) => {
        //http post req
        console.log(userObj)
        axios
          .post('http://localhost:5000/user-api/login', userObj)
          .then((response) => {
              console.log(response)
            alert("login succesful");
            console.log(userObj);
            
          })
          .catch((error) => {
            console.log(error);
            alert("Something went wrong in creating user");
          });
      };
    return(
        <div className='container mb-4'>
            <p className='display-2 text-center header  '>Login</p>
            <div className="wraper mt-5">

                <div className='row mt-5'>
                    <div className='col-12 col-sm-8 col-md-6 mx-auto'>
                        <Form onSubmit={handleSubmit(onFormSubmit)}>
                            <Form.Group className='mt-5 mb-3'>
                                <Form.Label >Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Username"
                                    {...register("username", { required: true })}
                                />
                                {errors.username && (
                                    <p className='text-danger' >*Username is required</p>
                                )}
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Enter Password'
                                    {...register("password", { required: true })}
                                />
                                {errors.password && (
                                    <p className='text-danger'>*Password is required</p>
                                )}
                            </Form.Group>
                            <Button variant='secondary' id="a" type="submit" className="buton2 ms-1 mt-2 " href="/Home">
                                Login <MdLogin />
                            </Button>
                        </Form>
                    </div>
                </div>
                <h1 className="h1-e mt-3">Not registered yet <Link to={{pathname:'/Signup'}}>sign up?</Link></h1>
            </div>
        
        </div>
       
    )
}
export default Login