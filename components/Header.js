import React from 'react'
import Image from "next/legacy/image"

function Header() {
  return (
    <>
        
        {/* Left */}
        <div>
            <Image
                src="https://links.papareact.com/qd3"
                layout='fill'
                objectFit='contain'
            ></Image>
        </div>

        {/* Middle */}
        <div></div>

        {/* Right */}
        <div></div>
    
    </>
  );
}

export default Header