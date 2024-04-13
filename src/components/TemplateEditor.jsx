import UserIcon from './icons/user.svg'
import PointerArrow from './icons/pointdown.svg'
import { useState } from 'react'
export default function TemplateEditor() {
    const [isRotated, setIsRotated] = useState(true);

    const handleButtonClick = () => {
      setIsRotated(!isRotated);
    };

    return(
        <div className="w-1/2 h-full px-8">
            <div className="shadow-2xl bg-white h-full rounded-2xl p-8 flex flex-col gap-4">
                <h1 className="font-bold text-2xl">Content</h1>
                <div className="bg-white shadow-xl h-auto rounded-2xl p-4">
                    <button className='flex items-center w-full justify-between' onClick={handleButtonClick}>
                        <div className='flex gap-4'>
                            <img src={UserIcon} alt="User Icon" className='w-6 h-6'/>
                            <h1 className="font-bold text-xl text-gray-800">Personal Info</h1>
                        </div>
                        <div className='w-6 h-6'>
                            <img src={PointerArrow} className={`transform ${isRotated ? 'rotate-90' : ''} transition-all duration-200 ease-linear`}/>
                        </div>
                    </button>

                </div>
            </div>
        </div>
    )
}