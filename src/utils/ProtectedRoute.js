import { Navigate } from "react-router"

const ProtectedRoute = ({ element: Component, ...props }) => {

    return (
        props.isLoggedIn ? <Component {...props} /> : <Navigate to='/' replace />
    )
}

export default ProtectedRoute;
