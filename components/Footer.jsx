import React from 'react'
import { FiInstagram, FiLinkedin, FiTwitter, FiYoutube } from "react-icons/fi";
export default function Footer() {
  return (
    <>
    <div className='footer pt-20 flex justify-center flex-row'>
        <hr className='hrs'/>
        <div className="menus flex w-full sans">
            <div className="socials flex  flex-col w-1/4 ">
                <div className="start w-full sans "><span>شبکه های اجتماعی</span><br />    
                        <b className='text-white pt-8'>شما میتوانید با ما همراه باشید</b>
</div>
                <hr className='hrss mt-5'/>
                <ul className='mt-5'>
                            <li><a href="#">
                            <FiInstagram color='white' size={26}/>
                                </a></li>
                            <li><a href="#">
                            <FiYoutube color='white' size={26}/>
                                </a></li>
                            <li><a href="#">
                            <FiTwitter color='white' size={26}/>
                                </a></li>
                            <li><a href="#">
                            <FiLinkedin color='white' size={26}/>
                                </a></li>
                </ul>
            </div>
            <div className="socials flex  flex-col w-1/4 ">
                <div className="start"><span>شروع کنید</span></div>
                <ul className='flex flex-col gap-1 '>
                    <li><a href="#">باشگاه مشتریان</a></li>
                    <li><a href="#">محصولات </a></li>
                    <li><a href="#">نمایندگی ها</a></li>
                    <li><a href="#">مجله مرسدس</a></li>
                </ul>
            </div>
            <div className="socials flex  flex-col w-1/4 ">
                <div className="start"><span>اخبار</span></div>
                <ul className='flex flex-col gap-1 '>
                    <li><a href="#">اخبار مرسدس بنز</a></li>
                    <li><a href="#">اخبارایران </a></li>
                    <li><a href="#">مقالات</a></li>
                    <li><a href="#">نمایشگاه</a></li>
                </ul>
            </div>
            <div className="socials flex  flex-col w-1/4 ">
                <div className="start"><span>درباره ما</span></div>
                <ul className='flex flex-col gap-1 '>
                    <li><a href="#">تاریحچه مرسدس</a></li>
                    <li><a href="#">خط مشی</a></li>
                    <li><a href="#">سوت زنی</a></li>
                    <li><a href="#">تماس با ما</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="end sans  ">
            تمامی حقوق مطعلق به ابراهیم میباشد.
        </div>
    </>
  )
}
