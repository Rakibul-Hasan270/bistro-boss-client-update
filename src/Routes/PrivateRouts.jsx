import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouts = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);

    if (loading) return <p className="text-center mt-36 text-pink-700">loading...</p>
    if (user) return children;
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRouts;