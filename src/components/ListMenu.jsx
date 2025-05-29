import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export default function ListMenu() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-2
        ${isActive ? "text-green-600 bg-green-200 font-extrabold" : "text-gray-600 hover:text-green-600 hover:bg-green-200 hover:font-extrabold"}`;

  return (
    <div>
      <div id="sidebar-menu" className="mt-10">
        <ul id="menu-list" className="space-y-3">
          <li>
            <NavLink
              id="menu-1"
              to="/dashboard" // Make sure the correct route is used here
              className={menuClass}
            >
              <AiOutlineHome className="mr-4 text-xl" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-2" to="/orders" className={menuClass}>
              <AiOutlineShoppingCart className="mr-4 text-xl" />
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-3" to="/customers" className={menuClass}>
              <AiOutlineUserAdd className="mr-4 text-xl" />
              Customers
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-4" to="/notfound" className={menuClass}>
              <AiOutlineUserAdd className="mr-4 text-xl" />
              NotFound
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-5" to="/errorpages/400" className={menuClass}>
              Error 400
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-6" to="/errorpages/401" className={menuClass}>
              Error 401
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-7" to="/errorpages/403" className={menuClass}>
              Error 403
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-8" to="/user" className={menuClass}>
              <AiOutlineUserAdd className="mr-4 text-xl" />
              User
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
