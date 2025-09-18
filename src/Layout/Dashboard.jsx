import { FaBook, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();
    const isAdmin = true;

    return (
        <div className="flex">
            <div className="w-64 bg-orange-700 text-black min-h-screen p-4">
                <ul className="space-y-3">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to='/dashboard/adminHome' className='flex items-center gap-2'>
                                    <button className="btn btn-primary w-full"><FaHome className="mr-2"></FaHome>Admin Home</button>
                                </NavLink>
                            </li>
                            <li>    
                                <NavLink to='/dashboard/addItem' className='flex items-center gap-2'>
                                    <button className="btn btn-primary w-full"><FaUtensils className="mr-2"></FaUtensils>Add Items</button>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manageItem' className='flex items-center'>
                                    <button className="btn btn-primary w-full"><FaList className="mr-2"></FaList>Manage Item</button>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/booking' className='flex items-center'>
                                    <button className="btn btn-primary w-full"><FaBook className="mr-2"></FaBook>Manage Booking</button>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/allUser' className='flex items-center'>
                                    <button className="btn btn-primary w-full"><FaUser className="mr-2"></FaUser>All Users</button>
                                </NavLink>
                            </li>
                        </> :
                            <>
                                <li>
                                    <NavLink to='/dashboard/userHome' className='flex items-center gap-2'>
                                        <button className="btn btn-primary w-full"><FaHome className="mr-2"></FaHome> User Home</button>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/reservation' className='flex items-center gap-2'>
                                        <button className="btn btn-primary w-full"><FaCalendar className="mr-2"></FaCalendar>    Reservation</button>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/cart' className='flex items-center'>
                                        <button className="btn btn-primary w-full"><FaShoppingCart className="mr-2"></FaShoppingCart> Cart ({cart.length})</button>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/booking' className='flex items-center'>
                                        <button className="btn btn-primary w-full"><FaList className="mr-2"></FaList>My Booking</button>
                                    </NavLink>
                                </li>
                            </>
                    }
                    <div className="divider "></div>
                    <li>
                        <NavLink to='/' className='flex items-center gap-2'>
                            <button className="btn btn-primary w-full"><FaHome className="mr-2"></FaHome>Home</button>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/soup' className='flex items-center gap-2'>
                            <button className="btn btn-primary w-full"><FaSearch className="mr-2"></FaSearch>Menu</button>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 ml-8 mt-5">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;