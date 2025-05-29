import * as FaIcons from "react-icons/fa";

export default function CardCount({icon, count, text, color}){
    const Icon = FaIcons[icon]; 

    return(
        <div id="dashboard-orders" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
            <div id="orders-icon" className={`rounded-full p-4 ${color}`}>
                {Icon && <Icon className="text-2xl text-white" />}
            </div>
            <div id="orders-info" className="flex flex-col">
                <span id="orders-count" className="font-barlow-bold text-2xl font-bold">
                    {count}
                </span>
                <span id="orders-text" className="text-gray-400">
                    {text}
                </span>
            </div>
        </div>
    )
}