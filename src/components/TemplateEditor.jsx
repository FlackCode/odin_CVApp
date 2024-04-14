import { useState } from "react"
import About from "./EditorComponent/About"
import Education from "./EditorComponent/Education"
import Info from "./EditorComponent/Info"
export default function TemplateEditor({ info, setInfo, educationList, setEducationList, about, setAbout }) {
    const [openComponent, setOpenComponent] = useState(null);

    const toggleComponent = (component) => {
        setOpenComponent(openComponent === component ? null : component);
    };

    return (
        <div className="w-1/2 h-full px-8">
            <div className="max-h-full p-8 flex flex-col gap-4 ">
                <h1 className="font-bold text-2xl">Content</h1>
                <Info info={info} setInfo={setInfo} isOpen={openComponent === "info"} toggle={() => toggleComponent("info")}/>
                <Education educationList={educationList} setEducationList={setEducationList} isOpen={openComponent === "education"} toggle={() => toggleComponent("education")}/>
                <About about={about} setAbout={setAbout} isOpen={openComponent === "about"} toggle={() => toggleComponent("about")}/>
            </div>
        </div>
    )
}