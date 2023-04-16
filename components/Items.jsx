import React from 'react'

export default function Items() {
  return (
    <div className='items w-full '>
      <dvi className="itemha text-white sans">
          <div className="item1">
            <div className="ico">
              <img src="/Home_photo/support.png" alt="support" width={100} height={100} />
              <div className="tx text-center mt-4 text-black font-bold">پشتیبانی</div>
            </div>
          </div>
          <div className="item1">
            <div className="ico">
              <img src="/Home_photo/technical-support.png" alt="support" width={100} height={100} />
              <div className="tx text-center mt-4 text-black font-bold">مشکلات فنی</div>
            </div>
          </div>
          <div className="item1">
            <div className="ico">
              <img src="/Home_photo/appointment.png" alt="support" width={100} height={100} />
              <div className="tx text-center mt-4 text-black font-bold">رزرو تعمیرات</div>
            </div>
          </div>
      </dvi>
    </div>
  )
}
