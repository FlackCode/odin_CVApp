import { useState } from "react"
import About from "./EditorComponent/About"
import Education from "./EditorComponent/Education"
import Info from "./EditorComponent/Info"
import Skills from "./EditorComponent/Skills"
import Experience from "./EditorComponent/Experience"
import { downloadAsPdf } from "./Template";
export default function TemplateEditor({ info, setInfo, educationList, setEducationList, about, setAbout, skillList, setSkillList, experienceList, setExperienceList }) {
    const [openComponent, setOpenComponent] = useState(null);

    const toggleComponent = (component) => {
        setOpenComponent(openComponent === component ? null : component);
    };

    return (
        <div className="w-1/2 h-full px-8">
            <div className="max-h-full p-8 flex flex-col gap-4 ">
                <div className="flex flex-row justify-between items-center">
                    <h1 className="font-bold text-2xl">Content</h1> 
                    <button className="bg-white font-bold rounded-xl border-2 p-2 hover:bg-gray-200 hover:cursor-pointer transition-all duration-300" 
                    onClick={downloadAsPdf}>Download Template as PDF</button>
                </div>
                <Info info={info} setInfo={setInfo} isOpen={openComponent === "info"} toggle={() => toggleComponent("info")}/>
                <Education educationList={educationList} setEducationList={setEducationList} isOpen={openComponent === "education"} toggle={() => toggleComponent("education")}/>
                <About about={about} setAbout={setAbout} isOpen={openComponent === "about"} toggle={() => toggleComponent("about")}/>
                <Skills skillList={skillList} setSkillList={setSkillList} isOpen={openComponent === "skills"} toggle={() => toggleComponent("skills")}/>
                <Experience experienceList={experienceList} setExperienceList={setExperienceList} isOpen={openComponent === "experience"} toggle={() => toggleComponent("experience")}/>
                
            </div>
        </div>
    )
}