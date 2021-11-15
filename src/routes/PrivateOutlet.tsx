import useAuth from "hooks/useAuth";
import { Outlet, Navigate } from "react-router-dom";

interface PrivateOutletProps {
	roles?: string[];
}

export default function PrivateOutlet({ roles = [] }: PrivateOutletProps) {
	const auth = useAuth();

	if (!auth || (roles.length > 0 && !roles.includes(auth?.user?.role)))
		return <Navigate to="/" />;

	return <Outlet />;
}
