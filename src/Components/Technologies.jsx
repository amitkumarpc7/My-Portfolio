import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {RiReactjsLine} from 'react-icons/ri'
import { DiMongodb } from "react-icons/di";
import { FaNode } from "react-icons/fa";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-3xl">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">     
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className='text-7xl text-orange-500'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaCss3Alt className='text-7xl text-blue-400'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoJavascript className='text-7xl text-yellow-400'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNode className='text-7xl text-green-500'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiMongodb className='text-7xl text-green-500'/>
            </div>    
        </div>
    </div>
  )
}

export default Technologies