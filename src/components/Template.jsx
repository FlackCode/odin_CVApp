//import LocationIcon from './EditorComponent/icons/location.svg'
//import JobIcon from './EditorComponent/icons/briefcase.svg'
//import EmailIcon from './EditorComponent/icons/email.svg'
//import PhoneIcon from './EditorComponent/icons/phone.svg'
import html2canvas from "html2canvas"
import jsPDF from 'jspdf'

export function downloadAsPdf() {
    const content = document.getElementById("templateContent");
    html2canvas(content).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      pdf.save("template.pdf");
    });
  }
export default function Template({ info: { fullName, job, email, phone, location }, educationList, about:{ about }, skillList, experienceList }) {
    return(
        <div className="w-1/2 h-full px-32 py-6 bg-gray-200 ">
            <div id='templateContent' className="bg-white h-full p-8 flex flex-col">
                <div className="flex flex-row justify-between mb-8">
                    <div>
                        <h1 className="font-bold text-2xl">{fullName}</h1>
                        <div className='flex gap-1 items-center'>
                            <p>{job}</p>
                        </div>
                        
                        <div className='flex gap-1 items-center'>
                            <p>{location}</p>
                        </div>
                        
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className='flex gap-1 items-center justify-end'>
                            <p>{email}</p>
                        </div>
                        <div className='flex gap-1 items-center justify-end'>
                            <p>{phone}</p>
                            
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between py-8 mb-8">
                    <div className='w-2/4 px-2 border-r-2 flex flex-col'>
                        {educationList.map((education, index) => (
                            <div key={index} className='text-sm'>
                                <h1 className='font-bold text-xl'>{education.educationType}</h1>
                                <p>Name: {education.schoolName}</p>
                                <p>Description: {education.schoolDesc}</p>
                                <p>{education.yearStart} - {education.yearEnd}</p>
                            </div>
                        ))}
                    </div>
                    <div className='w-2/4 px-2'>
                        <div>
                            {about && <h1 className='font-bold text-xl'>About</h1>}
                            <p className='break-words'>{about}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between py-8 ">
                    <div className='w-2/4 px-2 border-r-2 flex flex-col justify-between'>
                        {skillList.map((skill, index) => (
                            <div key={index} className='text-base flex flex-row items-center gap-4'>
                                {skill && <h1 className='font-bold text-base'>Skill:</h1>}
                                <p>{skill.skills}</p>
                            </div>
                        ))}
                    </div>
                    <div className='w-2/4 px-2 '>
                        {experienceList.map((experience, index) => (
                            <div key={index} className='text-sm mb-2'>
                                <div className='flex flex-row justify-between items-center'>
                                    <h1 className='font-bold text-lg'>{experience.name}</h1>
                                    <p className='text-gray-500'>{experience.yearStart} - {experience.yearEnd}</p>
                                </div>
                                <p>Location: {experience.location}</p>
                                <p className='break-words'>Description: {experience.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}