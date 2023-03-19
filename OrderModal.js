import React, { useState } from 'react'
import ReactDOM  from 'react-dom';
import './OrderModal.css'
import {useStateContext} from '../store/StateContext'

const Modaloverlay=(props)=>{
  // const [countx,setCountx]=useState(0)
  const[updatecount,setUpdatecount]=useState(0);

  function closemodal(){
    props.closebox();
  }
  function deleteitem(item){
    item.count=item.count-1;
    setUpdatecount(()=>updatecount+1);

  }

  function additem(item){
    item.count=item.count+1;
    setUpdatecount(()=>updatecount+1);

}
return (

  <div className='out-div'>
    {props.cxt.itemaddedtocart.map((item)=>{
      return (
        <>
 <h3>{item.dish}</h3>
 <span>{item.price}</span>
 <div>{item.count}</div>
 <span>
 <button className='plusbtn' onClick={()=>additem(item)}>+</button>
  <button onClick={()=>deleteitem(item)} className='minusbtn'>-</button>
</span>
 </>
 )
    }) }
       
        <span className='totalprice'>
                <h2>Total Amount</h2>
        <h4>{props.cxt.totalprice}</h4>
        </span>
<button className='closebtn' onClick={closemodal}>close</button>
<button>order</button>
    </div>
)
}
const OrderModal = (props) => {
      const cxt=useStateContext();

     return (
    <>
      {ReactDOM.createPortal(<Modaloverlay closebox={props.opencloseModal} cxt={cxt}/>,document.getElementById('overlay-root'))} 
      
    </>
      
  )
  
}

export default OrderModal