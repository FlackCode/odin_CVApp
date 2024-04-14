import SkillsIcon from './icons/tools.svg'
import PointerArrow from './icons/pointdown.svg'
import { useState, useEffect } from 'react'
export default function Skills({ skillList, setSkillList, isOpen, toggle }) {
    const [isRotated, setIsRotated] = useState(true)
    useEffect(() => {
        setIsRotated(isOpen);
    }, [isOpen]);
    const handleButtonClick = () => {
      setIsRotated(!isRotated)
      toggle()
    };
    const handleAddSkill = () => {
        const newSkill = {
            skills: document.getElementsByName('skill')[0].value,
        }
        setSkillList([...skillList, newSkill])
    }

    return(
        <div className="bg-white rounded-2xl p-4 shadow-inner drop-shadow-xl">
            <button className='flex items-center w-full justify-between' onClick={handleButtonClick}>
                <div className='flex gap-4'>
                    <img src={SkillsIcon} alt="User Icon" className='w-6 h-6'/>
                    <h1 className="font-bold text-xl text-gray-800">Skills</h1>
                </div>
                <div className='w-6 h-6'>
                    <img src={PointerArrow} className={`transform ${isRotated ? 'rotate-90' : ''} transition-all duration-100 ease-linear`}/>
                </div>
            </button>
            <div className={`py-2 flex flex-col gap-4 transition-all duration-200 ease-out ${isOpen ? '' : 'h-0 overflow-hidden py-0 hidden '}`}>
                <div className='w-full flex flex-col py-2 px-4 rounded-xl bg-gray-200'>
                    <label htmlFor="skill" className='font-bold'>Skills:</label>
                    <input type="text" name="skill" placeholder='Write one of your skills' className='bg-gray-200 outline-none'/>
                </div>
                <button className='bg-gray-200 py-2 rounded-xl font-bold border-black border-2 shadow-md
                                    hover:cursor-pointer hover:bg-white transition-all duration-200' onClick={handleAddSkill}>Add Skill</button>
            </div>
        </div>
    )
}