import React from 'react'
import Logo from '../Image/Logo.png'

function Header() {
    return (
        <div>
            <div className=' w-[100%] h-[72px] shadow-box flex pl-[146.73px]'>
                <img src={Logo} className=" pb-[11.55px] pt-[11px] " />
                <div className='pt-[17px] pb-[17px] flex gap-2 pl-[8px] font-bold text-[24.69px] '>
                <p className=' text-[#9D1C7F]'>Gyan</p>
                <p className=' text-[#2B2A85]'>Academy</p>
                </div>
                <div className='pl-[53.7%] pt-[23px] pb-[22px] pr-[134px] text-[16.46px] text-[#2B2A85]'>
                    <ul className='flex gap-[30px]'>
                        <li><a href="">Bootcamps</a></li>
                        <li><a href="">Learning Path</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">About</a></li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export default Header