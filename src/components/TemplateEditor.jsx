import Info from "./EditorComponent/Info"

export default function TemplateEditor({ info, setInfo }) {
    return (
        <div className="w-1/2 h-full px-8">
            <div className="h-full p-8 flex flex-col gap-4">
                <h1 className="font-bold text-2xl">Content</h1>
                <Info info={info} setInfo={setInfo} />
            </div>
        </div>
    )
}