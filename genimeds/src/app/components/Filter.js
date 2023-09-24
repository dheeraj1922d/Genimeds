import React from 'react'

const Filter = () => {
  return (
    <div className="wrapper flex justify-center items-center mt-[53px]">
        <div className="inline-flex items-center justify-center gap-[10px] relative rounded-[8px] border border-solid border-green-500 ">
            <button className="w-[125px] h-[40px] rounded-[8px] shadow-[0px_0px_10px_2px_#84cc1680] [background:linear-gradient(180deg,rgb(101,163,13)_0%,rgb(163,230,53)_100%)]">Generic</button>
            <button className="w-[139px] h-[40px] rounded-[8px]">Ayurvedic</button>
        </div> 
    </div>
   
  )
}

export default Filter