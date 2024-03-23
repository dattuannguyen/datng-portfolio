import React from "react";

const Hero = ()=>{
    return(
        <>
            <div className=' relative flex justify-center flex-col items-center h-screen  bg-white1'>
                <h1 className='font-satoshi text-9xl z-50'> Helloo , I'm Dat Nguyen </h1>
                <p className='font-satoshi z-50 text-xl py-9'>Front-end Dev</p>
                <div className='rounded-full w-circle h-circle bg-green absolute z-0 inset-x-2/5 inset-y-1/4'></div>
            </div>
        </>

    )
}

export default Hero;