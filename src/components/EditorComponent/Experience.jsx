import WorkIcon from './icons/work.svg'
import PointerArrow from './icons/pointdown.svg'
import { useState, useEffect } from 'react'
export default function Experience({ experienceList, setExperienceList, isOpen, toggle }) {
    const [isRotated, setIsRotated] = useState(true)
    useEffect(() => {
        setIsRotated(isOpen);
    }, [isOpen]);
    const handleButtonClick = () => {
      setIsRotated(!isRotated)
      toggle()
    };
    const handleAddExperience = () => {
        const newExperience = {
            name: document.getElementsByName('experienceName')[0].value,
            location: document.getElementsByName('experienceLocation')[0].value,
            description: document.getElementsByName('experienceDesc')[0].value,
            yearStart: document.getElementsByName('experienceYearStart')[0].value,
            yearEnd: document.getElementsByName('experienceYearEnd')[0].value,
        }
        setExperienceList([...experienceList, newExperience])
    }
    return(
        <div className="bg-white rounded-2xl p-4 shadow-inner drop-shadow-xl">
            <button className='flex items-center w-full justify-between' onClick={handleButtonClick}>
                <div className='flex gap-4'>
                    <img src={WorkIcon} alt="User Icon" className='w-6 h-6'/>
                    <h1 className="font-bold text-xl text-gray-800">Experience</h1>
                </div>
                <div className='w-6 h-6'>
                    <img src={PointerArrow} className={`transform ${isRotated ? 'rotate-90' : ''} transition-all duration-100 ease-linear`}/>
                </div>
            </button>
            <div className={`py-2 flex flex-col gap-4 transition-all duration-200 ease-out ${isOpen ? '' : 'h-0 overflow-hidden py-0 hidden '}`}>
            <div className='w-full flex flex-col py-2 px-4 rounded-xl bg-gray-200'>
                    <label htmlFor="experienceName" className='font-bold'>Workplace Name:</label>
                    <input type="text" name="experienceName" autoComplete="off" placeholder='Enter establishment name' className='bg-gray-200 outline-none'/>
                </div>
                <div className='w-full flex flex-col py-2 px-4 rounded-xl bg-gray-200'>
                    <label htmlFor="experienceLocation" className='font-bold'>Location:</label>
                    <input type="text" name="experienceLocation" autoComplete="off" placeholder='Enter location here' className='bg-gray-200 outline-none'/>
                </div>
                <div className='w-full flex flex-col py-2 px-4 rounded-xl bg-gray-200'>
                    <label htmlFor="experienceDesc" className='font-bold'>Description:</label>
                    <input type="text" name="experienceDesc" autoComplete="off" placeholder='Write a short description' className='bg-gray-200 outline-none'/>
                </div>
                <div className='w-full flex flex-row justify-between'>
                    <div className='w-5/12 bg-gray-200 py-2 px-4 rounded-xl'>
                        <label htmlFor="yearStart" className='font-bold'>Year Started:</label>
                        <input type="number" name="experienceYearStart" autoComplete="off" placeholder='Enter start year' className='bg-gray-200 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'/>
                    </div>
                    <div className='w-5/12 bg-gray-200 py-2 px-4 rounded-xl'>
                        <label htmlFor="yearEnd" className='font-bold'>Year Ended:</label>
                        <input type="number" name="experienceYearEnd" autoComplete="off" placeholder='Enter end year' className='bg-gray-200 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'/>
                    </div>
                </div>
                <button className='bg-gray-200 py-2 rounded-xl font-bold border-black border-2 shadow-md
                                    hover:cursor-pointer hover:bg-white transition-all duration-200' onClick={handleAddExperience}>Add Experience</button>
            </div>
        </div>
    )
}