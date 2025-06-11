import { BrowserRouter, Link, Route, Routes } from 'react-router'
import RouteAbout   from './RouteAbout'
import RouteHome    from './RouteHome'
import RouteLayout  from './RouteLayout'

function App() {
    return (
        <>
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<RouteLayout />}>
                        <Route index        element={<RouteHome />}  />
                        <Route path="about" element={<RouteAbout />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App