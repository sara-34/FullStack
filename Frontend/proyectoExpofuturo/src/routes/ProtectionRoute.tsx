import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvaider";

export default function ProtectionRoute(){
    const auth = useAuth();

    return auth.isAuthenticated ? < Outlet /> : <Navigate to="/" />;
}

