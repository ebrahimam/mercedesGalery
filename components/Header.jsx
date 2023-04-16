import React from 'react'
import Image from 'next/image' 
export default function Header() {
  return (
    <div className='Header flex flex-row z-10 fixed '>
        <div className="icon">
            <a href="#">
                <img src='/Home_photo/Mercedes-Benz_black_Logo_1933.png' alt="" width={46} height={46}  />
            </a>
        </div>
        <div className="menu flex-row">
            <ul className='  sans '>
                <li> 
                    <a href="#">محصولات</a>
                </li>
                <li> 
                    <a href="/">اخبار</a>
                </li>
                <li> 
                    <a href="/Aboutus">درباره ما</a>
                </li>
                <li> 
                    <a href="/Contactus">تماس با ما</a>
                </li>
            </ul>
        </div>
            <div className="name sans flex  flex-col ">
                <span className='text-white font-light'>شرکت ستاره بنز</span>
            </div>
    </div>
  )
}
