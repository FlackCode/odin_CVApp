import SchoolIcon from './icons/school.svg'
import PointerArrow from './icons/pointdown.svg'
import { useState } from 'react'
export default function Education({ educationList, setEducationList }) {

    const [isRotated, setIsRotated] = useState(true)
    const [isCollapsed, setIsColapsed] = useState(true)

    const handleButtonClick = () => {
      setIsRotated(!isRotated)
      setIsColapsed(!isCollapsed)
    };

    const handleAddSchool = () => {
        const newEducation = {
            educationType: document.getElementsByName('educationType')[0].value,
            schoolName: document.getElementsByName('schoolName')[0].value,
            schoolDesc: document.getElementsByName('schoolDesc')[0].value,
            yearStart: document.getElementsByName('yearStart')[0].value,
            yearEnd: document.getElementsByName('yearEnd')[0].value,
        };
        setEducationList([...educationList, newEducation]);
    };

    return(
        <div className="bg-white rounded-2xl p-4 shadow-inner drop-shadow-xl">
            <button className='flex items-center w-full justify-between' onClick={handleButtonClick}>
                <div className='flex gap-4'>
                    <img src={SchoolIcon} alt="User Icon" className='w-6 h-6'/>
                    <h1 className="font-bold text-xl text-gray-800">Education</h1>
                </div>
                <div className='w-6 h-6'>
                    <img src={PointerArrow} className={`transform ${isRotated ? 'rotate-90' : ''} transition-all duration-100 ease-linear`}/>
                </div>
            </button>
            <div className={`py-2 flex flex-col gap-4 transition-all duration-200 ease-out ${isCollapsed ? 'h-0 overflow-hidden py-0 hidden ' : ''}`}>
                <div className='w-full flex flex-col py-2 px-4 rounded-xl bg-gray-200'>
                    <label htmlFor="educationType" className='font-bold'>Educational Establishment:</label>
                    <input type="text" name="educationType" placeholder='Enter educational establishment type' className='bg-gray-200 outline-none'/>
                </div>
                <div className='w-full flex flex-col py-2 px-4 rounded-xl bg-gray-200'>
                    <label htmlFor="schoolName" className='font-bold'>Name:</label>
                    <input type="text" name="schoolName" placeholder='Enter name here' className='bg-gray-200 outline-none'/>
                </div>
                <div className='w-full flex flex-col py-2 px-4 rounded-xl bg-gray-200'>
                    <label htmlFor="schoolDesc" className='font-bold'>Description:</label>
                    <input type="text" name="schoolDesc" placeholder='Write a short description' className='bg-gray-200 outline-none'/>
                </div>
                <div className='w-full flex flex-row justify-between'>
                    <div className='w-5/12 bg-gray-200 py-2 px-4 rounded-xl'>
                        <label htmlFor="yearStart" className='font-bold'>Year Started:</label>
                        <input type="number" name="yearStart" placeholder='Enter start year' className='bg-gray-200 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'/>
                    </div>
                    <div className='w-5/12 bg-gray-200 py-2 px-4 rounded-xl'>
                        <label htmlFor="yearEnd" className='font-bold'>Year Ended:</label>
                        <input type="text" name="yearEnd" placeholder='Enter end year' className='bg-gray-200 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'/>
                    </div>
                </div>
                <button className='bg-gray-200 py-2 rounded-xl font-bold border-black border-2 shadow-md
                                    hover:cursor-pointer hover:bg-white transition-all duration-200' onClick={handleAddSchool}>Add School</button>
            </div>
        </div>
    )
}