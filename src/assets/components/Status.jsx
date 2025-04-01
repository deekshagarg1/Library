import React, { useState } from 'react'
import { Footer } from './Footer'

export const Status = ({rs}) => {


  // const[co, setco]=useState("")
  const[showPopup , setShowPopup]= useState(false);
  const[text , settext]=useState([])

  // if(s1.length>0){
  //   const msg=[...text , rs]
  //   settext(msg)
  // }

  // else{
  //   alert("data not found")
  // }


  // const[popupDataa , setPopupData]= useState(null);
const s1=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60]
  return (
    <div>



    <div className='md'>
      
      <div className="r1">
      {s1.map((item )=><button onClick={()=>setShowPopup(true)}   style={{backgroundColor: rs.some((ite)=> ite.seat==item)? "#f13165" : "lightgreen"}}  >{item}</button>)}
      </div>
      </div>



      {showPopup && (
         <div className="main-pop">

<div className="pop">
<button onClick={()=>setShowPopup(false)}> X</button>
{rs.map((item )=><>{item.name}{item.email}{item.seat}</>)}
{/* {text} */}
</div>

      </div>)}

     

{/* {rs && <div> {}</div>} */}
{/* 
{showPopup && popupDataa && (rs.map((item)=><>
  <div>

<>{item.name}</>
<>{item.email}</>
<>{item.seat}</>
<>{item.sdate}</>
<>{item.ldate}</>
{/* <>{item.mob}</> */}
{/* <button onClick={closePopup}>close</button>

</div> */}
{/* </>))}  */}

<Footer/>


    </div>
  )
}
