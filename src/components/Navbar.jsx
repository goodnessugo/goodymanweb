import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between px-10 bg-white top-0 sticky w-full z-[10]'>
            <div className='pt-2'>
                <Link to='/'>
                <div className="logo  w-36 h-12 bg-contain bg-no-repeat bg-[url('./components/assets/goodymanlogo.png')] "></div>
                </Link>
                
            </div>

            <div className='link'>
                <ul className='flex  '>
                    <Link to="/education"><li> <a href="#">Education</a> </li></Link>

                    <li> <a href="#">Research</a> </li>
                    <li> <a href="#">Innovation</a> </li>
                    <li> <a href="#">Admission</a> </li>
                    <li> <a href="#">About Us</a> </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar