import useAuth from "hooks/useAuth";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
	roles?: string[];
	children: React.ReactNode;
}

export default function PrivateRoute({
	children,
	roles = [],
}: PrivateRouteProps) {
	const auth = useAuth();

	if (!auth || (roles.length > 0 && !roles.includes(auth?.user?.role)))
		return <Navigate to="/" />;

	return <>{children}</>;
}
