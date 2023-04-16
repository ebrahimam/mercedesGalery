import React from "react";
export default function Sells() {
  return (
    <>
      <div className="Sells">
        <div className="sel">
          <div className="left">
            <div className="image">
              <img
                src="/Home_photo/lorenzo-hamers-h151DHY2K0w-unsplash.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <div className="goto sans">
              <h3 className="font-bold mb-2">فروش آسان، خرید مطمئن</h3>
              <h4 className="font-light  mb-4">خدمات خرید و فروش خودرو های کارکرده مرسدس بنز</h4>
              <p className="flex flex-wrap p-2 ">
                شرکت ستاره ایران ،به منظور رفاه حال مشتریان مرسدس بنز طرح خرید و
                فروش خودرو های کارکرده مرسدس بنز را آغاز نموده است. مشتریان عزیز
                می توانند با مراجعه به نمایشگاه مرکزی شرکت از جزئیات طرح مطلع
                گردند.
              </p>
              <button className="bg-blue-600 text-white sans mt-3 p-4 rounded-md tracking-tighter">
                مشاهده محصولات
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
