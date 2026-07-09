export default function Badge ({ text }: { text: string }){
    return (
        <div className="bg-gray-400 rounded-xl px-2 py-0.5 text-center text-white w-fit">{text}</div>
    )
}