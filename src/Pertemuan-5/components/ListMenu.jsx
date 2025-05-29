import { AiOutlineHome } from "react-icons/ai"; 
import { AiOutlineShoppingCart } from "react-icons/ai"; 
import { AiOutlineUserAdd } from "react-icons/ai"; 

export default function ListMenu(){
    return(
        <div>
            <div id="sidebar-menu" className="mt-10">
                <ul id="menu-list" className="space-y-3">
                    <li>
                        <div id="menu-1" 
                            className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium 
                            text-gray-600 hover:bg-green-200 hover:font-extrabold">
                            <AiOutlineHome className="mr-4 text-xl"/>
                            Dashboard
                        </div>
                    </li>
                    <li>
                        <div id="menu-2"
                            className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium 
                            text-gray-600 hover:bg-green-200 hover:font-extrabold">
                            <AiOutlineShoppingCart className="mr-4 text-xl"/>
                            Orders
                        </div>
                    </li>
                    <li>
                        <div id="menu-3"
                            className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium 
                            text-gray-600 hover:bg-green-200 hover:font-extrabold">
                            <AiOutlineUserAdd className="mr-4 text-xl"/>
                            Customers
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}