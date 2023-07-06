import React, {useState} from "react";
import { AiOutlineMenu } from 'react-icons/ai';
import { BsFillCloudRainFill, BsFillSunFill, BsSunFill } from 'react-icons/bs';

const Sidenav = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
        console.log('state change')

    }
    return (
        <div>
            <AiOutlineMenu size={30} onClick={handleNav} className="absolute top-4 right-4 z-[99] cursor-pointer text-white ease-in hover:text-gray-400"/>
            {
                nav ? (
                    <div className="fixed w-screen h-screen bg-white/20 flex flex-col justify-center items-center z-20 ">
                        <a href="#main" className="w-[15rem] h-[15rem] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-8 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <BsFillCloudRainFill size={100} />
                        </a>

                        <a href="#main" className="w-[15rem] h-[15rem] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-8 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <BsFillSunFill size={100} />
                        </a>
                        
                        
                        
                        
                    </div>
                )
                : (
                <div></div>
                )
            }
            </div>
    )
}

export default Sidenav