import React from 'react'

export default function Main() {
  return (
    <div className='contact'>
        <div className="conta w-full relative ">
            <img src="/Home_photo/pexels-mike-b-132539.jpg" alt="" />
            <div className="tx text-black  absolute w-full sans ">
                تماس با ما
            </div>
            <div className="box w-full absolute">
                    <div className="whites sans">
                        <ul className='flex flex-col text-center '>
                            <li><span>شماره تماس:</span> <span>04140000000</span></li>
                            <li><span>ایمیل:</span> <span className='uppercase text-600 lora'>myemail@mypass.com</span></li>
                            <li><span>آدرس:</span> <span> تهران ،میدان انقلاب،ساختمان 17 شهریور،طبقه6،پلاک108 </span></li>
                            <li><span> وب سایت:</span> <span>setarehiran.com</span></li>

                        </ul>
                    </div>
            </div>
        </div>
    </div>
  )
}
