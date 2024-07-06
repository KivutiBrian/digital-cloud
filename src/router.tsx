import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Home, Dashboard } from "./pages"
import { LandingLayout, DashboardLayout } from "./layouts"

const router = createBrowserRouter(
    createRoutesFromElements(

        <Route>
            <Route path="/" element={<LandingLayout />}>
                <Route path="" element={<Home />} />
            </Route>
            <Route path="/admin" element={<DashboardLayout />}>
                <Route path="" element={<Dashboard />} />
            </Route>
        </Route>


    )
)

export default router