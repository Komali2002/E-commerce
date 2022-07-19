import React from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import {AiFillGift} from "react-icons/ai";
import {GrDeliver} from "react-icons/Gr";
import axios from 'axios';
import {useState} from "react";

function Orders()
{
  
    return(
        <div className='row mt-3'>
        {/*first*/}
        <div className="row">
         <h3 className="ms-5 mt-5">Your Orders</h3>
        </div>
        <div className="row">
        <div className="col-sm-8">
        <div className="card ms-5 mt-4" style={{width:"100%", height:"100%"}}>
        <div className="card-body">
        <div className="row">
        <div className="col-sm-2">
        <h6>Order placed</h6>
        <h6>18/05/22</h6>
        </div>
        <div className="col-sm-2">
        <h5>Total</h5>
        <h6>75$</h6>
        </div>
        <div className="col-sm-2">
        <h5>Ship to</h5>
        <h6 className="text-success">Komali</h6>
        </div>
        </div>
        <hr/>
          <div class="row">
      <div class="col-sm-4">
        <h6>Arriving Thursday</h6>
        <h6 className="text-success">On the way</h6>
      <img className="h-30 w-100 mt-2" src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTCUx47g0NsokucJJKUnEftZ7fyqu0ATL3BpJo0Xtxf0Ww1pbSU1yrS1RWqrG5V_XBYVBfCUD2kyawYDWqFwmVgLBRFdj731z5b6NJPTpVTv1PMZlIfEI44Vg&usqp=CAE"/>
      </div>
      <div className="col-sm-5 mt-5">
        <h6> Nos bureaux sont ouverts du lundi au vendredi de 9h00 à 17h00</h6>
    </div>
      <div class="col-sm-3">
      <button type="button" className="btn btn-warning mt-5">Track package</button>
      <button type="button" className="mt-2">Request Cancelaation</button>
      <button type="button" className="mt-2">Feedback</button>

      </div>
      </div>
   {/*end*/}
    </div>
    </div>
    </div>
    </div>
    </div>
    )
}
export default Orders