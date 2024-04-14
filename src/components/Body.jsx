import { useState } from "react";
import Template from "./Template";
import TemplateEditor from "./TemplateEditor";

export default function Body() {
    const [info, setInfo] = useState({
        fullName: '',
        job: '',
        email: '',
        phone: '',
        location: '',
    });
    const [educationList, setEducationList] = useState([]);

    return (
        <div className="flex flex-row flex-grow p-4">
            <TemplateEditor info={info} setInfo={setInfo} educationList={educationList} setEducationList={setEducationList}/>
            <Template info={info} educationList={educationList}/>
        </div>
    );
}