
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="bg-red-200 py-4 sticky top-0">
        <ul className="flex gap-3 items-center justify-center text-bold">
          <li>
            <NavLink
              className={({ isActive }) => isActive ? "underline underline-offset-8 text-red-700 font-bold" : "text-black font-bold" }
              to="/home">
              Home
            </NavLink>
          </li>


        <li>
            <NavLink to='/about'   className={({isActive})=> isActive? 'underline underline-offset-8 text-red-700 font-bold': 'text-black font-bold'} >About Us</NavLink>
        </li>

        <li>
            <NavLink   to='/countries' className={({isActive})=> isActive? 'underline underline-offset-8 text-red-700 font-bold': "text-black font-bold"} >Countries</NavLink>
        </li>

        <li>
            <NavLink   to='/contact' className={({isActive})=> isActive? 'text-red-700 font-bold underline underline-offset-8': "text-black font-bold"} >Contact</NavLink>
        </li>



        </ul>
      </nav>
    </>
  );
};

export default Header;
