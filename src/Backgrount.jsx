import React, { useState } from 'react'


function Backgrount() {
    const [color,setColor]=useState('white')
  return (
    <div style={{height:"100vh" ,width:"217vh",background:color}}>
        <h1 style={{color:"white" ,fontSize:"80px",fontWeight:"bold" ,textAlign:"center",fontFamily:"Dancing Script" ,paddingTop:'100px'}}>Background color Changer</h1>
       <div style={{marginLeft:"50vh" ,paddingTop:"50vh"}}>
            <button style={{marginLeft:"30px"}}  onClick={()=>setColor("rgb(203, 118, 242)")} ><img style={{width:"80px"}} src='/images/Lavender Purple.png'/></button>
            <button style={{marginLeft:"30px"}}   onClick={()=>setColor("rgb(245, 129, 195)")}><img style={{width:"80px"}} src='/images/Hot pink.png'/> </button>
            <button style={{marginLeft:"30px"}}   onClick={()=>setColor("pink")}><img style={{width:"80px"}} src='/images/pink.png'/></button>
            <button style={{marginLeft:"30px"}}  onClick={()=>setColor("aqua")}><img style={{width:"80px"}} src='/images/Aqua.png'/></button>
            <button style={{marginLeft:"30px"}}  onClick={()=>setColor("rgb(10, 217, 214)")}><img style={{width:"80px"}} src='/images/mint Green.png'/></button>
            <button style={{marginLeft:"30px"}}  onClick={()=>setColor("rgb(69, 194, 247)")}><img style={{width:"80px"}} src='/images/Light Cyan.png'/></button>
       </div>
    </div>
  )
}

export default Backgrount