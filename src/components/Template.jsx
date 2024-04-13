import LocationIcon from './EditorComponent/icons/location.svg'
import JobIcon from './EditorComponent/icons/briefcase.svg'
import EmailIcon from './EditorComponent/icons/email.svg'
import PhoneIcon from './EditorComponent/icons/phone.svg'
export default function Template({ info }) {
    const { fullName, job, email, phone, location } = info; 
    return(
        <div className="w-1/2 h-full px-32 py-6 bg-gray-200 ">
            <div className="bg-white h-full p-8 flex flex-col">
                <div className="flex flex-row justify-between">
                    <div>
                        <h1 className="font-bold text-2xl">{fullName}</h1>
                        <div className='flex gap-1 items-center'>
                            {job && <img src={JobIcon} alt="Location Icon" className="w-4 h-4" />}
                            <p>{job}</p>
                        </div>
                        
                        <div className='flex gap-1 items-center'>
                            {location && <img src={LocationIcon} alt="Location Icon" className="w-4 h-4" />}
                            <p>{location}</p>
                        </div>
                        
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className='flex gap-1 items-center'>
                            {email && <img src={EmailIcon} alt="Location Icon" className="w-4 h-4" />}
                            <p>{email}</p>
                        </div>
                        <div className='flex gap-1 items-center justify-end'>
                            {phone && <img src={PhoneIcon} alt="Location Icon" className="w-4 h-4" />}
                            <p>{phone}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}