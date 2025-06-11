import { Outlet, Link } from 'react-router'

function RouteLayout() {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/about">ABOUT</Link>
            <br />
            <Outlet />
        </>
    )
}

export default RouteLayout
