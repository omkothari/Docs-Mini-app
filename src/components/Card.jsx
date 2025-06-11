import React from 'react'
import { FaFileLines } from "react-icons/fa6";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from 'motion/react';




const Card = ({value, reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={1} className="h-60 w-50 bg-blue-700 rounded-[30px] px-5 py-5 relative overflow-hidden text-white shrink-0">
        <FaFileLines/> 
        <p className='leading-tight tracking-tight mt-5 text-sm font-semibold'>{value.description}</p>

        <div className="footer absolute w-full bottom-0 left-0">
            <div className="px-5 py-1 w-full flex items-center justify-between mb-4">

            <h5 className='leading-tight tracking-tight text-sm font-semibold '>{value.size}</h5>
            <span className='bg-white rounded-full px-2 py-2 flex justify-center items-center text-black'>
                {value.close ? <MdOutlineDownloadForOffline size={"1.2em"} /> : <IoIosCloseCircleOutline size={"1.2em"} />  }
            </span>
            </div>

            {value.tag.con && <div className={`flex justify-center items-center py-3 w-full ${value.tag.color} font-semibold text-sm`}>{value.tag.title}</div>}
        
        
        
        </div>


    </motion.div>
  )
}

export default Card