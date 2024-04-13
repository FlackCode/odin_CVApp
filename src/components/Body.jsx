import Template from "./Template";
import TemplateEditor from "./TemplateEditor";

export default function Body() {
    return (
        <div className="flex flex-row flex-grow p-4">
        <TemplateEditor/>
        <Template/>
        </div>
    )
}