import React from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useContext } from 'react'
 
const Header = () => {
    const {removeBG}= useContext(AppContext)
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 px-4 mt-10 lg:px-44 sm:mt-20">
        {/*----Left Side------*/}
        <div className="flex-1">
            <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>
                Remove the <br className='max-md:hidden'/> 
                <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'> background</span> from <br className='max-md:hidden' /> 
                images for free.
            </h1>
            <p className='my-6 text-[15px] text-gray-500'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br className='max-sm:hidden' />
                Lorem Ipsum has been the industry's standard dummy text ever.
            </p>
            <div>
                <input onChange={e=> removeBG(e.target.files[0])} type="file" accept='image/*' id="upload1" hidden />
                <label 
                    htmlFor="upload1" 
                    className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:scale-105 transition-all duration-700'>
                    <img width={20} src={assets.upload_btn_icon} alt="" />
                    <p className='text-white text-sm'>Upload your image</p>
                </label>
            </div>
        </div>

        {/*----Right Side------*/}
        <div className='flex-1 max-w-sm'>
            <img src={assets.header_img} alt="" />
        </div>
    </div>

  )
}

export default Header