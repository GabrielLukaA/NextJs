export default function Card(props) {
    return (
        <div className="flex flex-col h-48 bg-slate-700 w-[20%] rounded-md m-4 p-4 justify-center items-center">
            <h1 className="flex justify-center text-xl font-bold text-white p-4">{props.title}</h1>
            <p className=" flex font-bold text-white indent-4 text-justify p-4">{props.description}</p>
        </div>
    )

}