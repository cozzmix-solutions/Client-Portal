import React from 'react';
import {Avatar} from "@heroui/react";



export function Badge() {
  return (
    <div className="inline-flex items-center bg-blue-950/30 border border-zinc-100/30 rounded-full px-2.5 md:px-4 py-2 md:py-2.5 mb-4 md:mb-8">
       <div className="flex items-center">
      <Avatar  className="w-4 h-4 md:w-6 md:h-6" src="https://ik.imagekit.io/jag4jmnvb/client-01.png?updatedAt=1742489029430" />
      <Avatar  className="relative right-1 w-4 h-4 md:w-6 md:h-6" src="https://ik.imagekit.io/jag4jmnvb/download%20(20).jpeg?updatedAt=1742489028404" />
      <Avatar  className="relative right-2 w-4 h-4 md:w-6 md:h-6" src="https://ik.imagekit.io/jag4jmnvb/client-02.png?updatedAt=1742489029226" /> 
    </div>
     <div className='hidden md:flex flex-col items-start pl-1'>
      <span className="text-xs font-bold text-white">LOVED BY</span>
      <span style={{fontSize:"9px"}} className="font-light text-white">20+ FOUNDERS </span>
      </div>

      <div className='flex md:hidden flex-col items-start pl-1'>
      <span style={{fontSize:"7px"}} className=" font-bold text-white">LOVED BY</span>
      <span style={{fontSize:"5px"}} className="font-light text-white">20+ FOUNDERS </span>
      </div>
    </div>
  );
}
