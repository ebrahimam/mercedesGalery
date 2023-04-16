import React from 'react'

export default function Countainer() {
  return (
    <div>
        <div className="cont ">
            <div className="slide  relative ">
                <video src='/Home_photo/Mercedes-Maybach S-Class Haute Voiture Limited Edition 2022_2.mp4'/>
                <div className="txt sans absolute top-16 right-20  ">
                  <div className="titr text-white font-bold xll">مرسدس بنز</div>
                  <div className='explain'> 
                  <span className=' py-1 text-green-400 font-bold text-xl rtl'>!مهر 1402</span><hr className='hrs my-2'/>
                  <span className=''>مجله مرسدس</span>
                  <p className='text-sm font-bold '>مجله ستاره ایران (مرسدس بنز می) منتشر شد. شما عزیزان می توانید با کلیک بر روی لینک زیر مجله را مشاهده و دریافت نمائید.</p>
                  <button className='mt-3 py-1 px-2 sans bg-blue-700 hover:bg-blue-600  text-white font-medium rounded-sm'> مشاهده مجله</button>
                  </div>
                </div>
            </div>
        </div>
        <h3 className=' mer absolute '>MERCEDES BENZ<br/>CLASS S</h3>

    </div>
  )
}
