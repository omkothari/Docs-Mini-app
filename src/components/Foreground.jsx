import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
    const data=[
        {
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            size:"2mb",
            close:true,
            tag:{con:true, title: 'Download Now', color:"bg-green-500"}
        },
        {
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            size:"2mb",
            close:false,
            tag:{con:false, title: 'Download Now' , color:"bg-green-500"}
        },
        {
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            size:"2mb",
            close:false,
            tag:{con:true, title: 'progress', color:"bg-yellow-500"}
        },

    ];
    const ref = useRef(null);
  return (
    <div ref ={ref} className="absolute top-0 left-0 h-full w-full flex gap-10 flex-wrap px-4 py-3 ">
        {data.map((value,index)=>(
            <Card key={index} value = {value} reference ={ref}/>

        ))}
    </div>
  )
}

export default Foreground