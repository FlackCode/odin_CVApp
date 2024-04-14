import UserIcon from './icons/user.svg'
import PointerArrow from './icons/pointdown.svg'
import { useState, useEffect } from 'react'
export default function Info({ info, setInfo, isOpen, toggle }) {
    const [isRotated, setIsRotated] = useState(true)
    useEffect(() => {
        setIsRotated(isOpen);
    }, [isOpen]);

    const handleButtonClick = () => {
        toggle()
        setIsRotated(!isRotated)
      
    };

    const handleChange = (e, field) => {
        const value = e.target.value
        setInfo({ ...info, [field]: value })
    };
    return (
        <div className="bg-white rounded-2xl p-4 shadow-inner drop-shadow-xl">
            <button className='flex items-center w-full justify-between' onClick={handleButtonClick}>
                <div className='flex gap-4'>
                    <img src={UserIcon} alt="User Icon" className='w-6 h-6'/>
                    <h1 className="font-bold text-xl text-gray-800">Personal Info</h1>
                </div>
                <div className='w-6 h-6'>
                    <img src={PointerArrow} className={`transform ${isRotated ? 'rotate-90' : ''} transition-all duration-100 ease-linear`}/>
                </div>
            </button>
            <div className={`py-2 flex flex-col gap-4 transition-all duration-200 ease-out ${isOpen ? '' : 'h-0 overflow-hidden py-0 hidden '}`}>
                <div className='w-full flex flex-row justify-between px-4'>
                    <div className='w-5/12 bg-gray-200 py-2 px-4 rounded-xl'>
                        <label htmlFor="fullName" className='font-bold'>Full Name</label>
                        <input type="text" name='fullName' autoComplete="off" value={info.fullName} onChange={(e) => handleChange(e, 'fullName')} placeholder='John Smith' className='w-full outline-none rounded-md bg-gray-200' />
                    </div>
                    <div className='w-5/12 bg-gray-200 py-2 px-4 rounded-xl'>
                        <label htmlFor="jobName" className='font-bold'>Job Title</label>
                        <input type="text" name='jobName' autoComplete="off" value={info.job} onChange={(e) => handleChange(e, 'job')} placeholder='Web Developer' className='w-full bg-gray-200 outline-none rounded-md'/>
                    </div>
                </div>
                <div className='w-full flex flex-row justify-between px-4'>
                    <div className='w-5/12 bg-gray-200 py-2 px-4 rounded-xl'>
                        <label htmlFor="email" className='font-bold'>Email</label>
                        <input type="email" name='email' autoComplete="off" value={info.email} onChange={(e) => handleChange(e, 'email')} placeholder='example@gmail.com' className='w-full outline-none rounded-md bg-gray-200'/>
                    </div>
                    <div className='w-5/12 bg-gray-200 py-2 px-4 rounded-xl'>
                        <label htmlFor="phone" className='font-bold'>Phone Number</label>
                        <input type="number" name='phone' autoComplete="off" value={info.phone} onChange={(e) => handleChange(e, 'phone')} placeholder='000 0000 0000' className='w-full bg-gray-200 outline-none rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'/>
                    </div>
                </div>
                <div className='w-full flex flex-row justify-between px-4'>
                    <div className='w-full bg-gray-200 py-2 px-4 rounded-xl'>
                        <label htmlFor="location" className='font-bold'>Location</label>
                        <input type="text" name='location' autoComplete="off" value={info.location} onChange={(e) => handleChange(e, 'location')} placeholder='California, USA' className='w-full outline-none rounded-md bg-gray-200'/>
                    </div>
                </div>
            </div>
        </div>
    )
}