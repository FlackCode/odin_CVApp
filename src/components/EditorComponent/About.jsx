import InfoIcon from './icons/information.svg'
import PointerArrow from './icons/pointdown.svg'
import { useState, useEffect } from 'react'
export default function About({ about = {}, setAbout, isOpen, toggle }) {
    const [isRotated, setIsRotated] = useState(true)
    useEffect(() => {
        setIsRotated(isOpen);
    }, [isOpen]);
    const handleButtonClick = () => {
      setIsRotated(!isRotated)
      toggle()
    };
    const handleChange = (e, field) => {
        const value = e.target.value;
        setAbout(prevAbout => ({ ...prevAbout, [field]: value }));
    };
    return (
        <div className="bg-white rounded-2xl p-4 shadow-inner drop-shadow-xl">
            <button className='flex items-center w-full justify-between' onClick={handleButtonClick}>
                <div className='flex gap-4'>
                    <img src={InfoIcon} alt="User Icon" className='w-6 h-6'/>
                    <h1 className="font-bold text-xl text-gray-800">About</h1>
                </div>
                <div className='w-6 h-6'>
                    <img src={PointerArrow} className={`transform ${isRotated ? 'rotate-90' : ''} transition-all duration-100 ease-linear`}/>
                </div>
            </button>
            <div className={`py-2 flex flex-col gap-4 transition-all duration-200 ease-out ${isOpen ? '' : 'h-0 overflow-hidden py-0 hidden '}`}>
                <div className='flex flex-col bg-gray-200 px-4 py-2 rounded-xl'>
                    <label htmlFor="about" className='font-bold'>Tell us about yourself</label>
                    <textarea 
                        name='about' 
                        value={about.about} 
                        onChange={(e) => handleChange(e, 'about')} 
                        placeholder='Write something about yourself' 
                        className='bg-gray-200 outline-none resize-y'
                    />
                </div>
            </div>
        </div>
    )
}