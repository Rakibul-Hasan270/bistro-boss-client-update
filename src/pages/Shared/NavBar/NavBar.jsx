import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaOpencart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    const handelLogOut = () => {
        logOut()
            .then(() => {
                localStorage.removeItem('token');
            })
    }

    const navOptions = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/menu'>Our Menu</NavLink></li>
        <li><NavLink to='/order/soup'>Order Food</NavLink></li>
        <li><NavLink to='/secret'>Secret</NavLink></li>
        <li>
            <Link to='/dashboard'>
                <button className="btn">
                    <FaOpencart></FaOpencart> <div className="badge badge-sm badge-secondary ml-3">+{cart.length}</div>
                </button>
            </Link>
        </li>
        {user ?
            <div className="flex items-center justify-center gap-6">
                <span>{user?.displayName}</span>
                <button onClick={handelLogOut} className="but btn-outline btn-success">Log Out</button>
            </div> :
            <div className="flex justify-center items-center">< li > <NavLink to='/login'>Login</NavLink></li>
                <li><NavLink to='/register'>Register</NavLink></li>
            </div>
        }
    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <img src={user?.photoUrl} alt="" />
                </div>
            </div>
        </>
    );
};

export default NavBar;