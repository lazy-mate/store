import React, { useState } from "react";
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
    Navigate
} from "react-router-dom";
import SplashScreen from "../Screens/SplashScreen";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
import Home from "../Screens/Home";


export default function Router() {
    const [user, setUser] = useState(false)
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path='/' element={<SplashScreen />} />
                <Route path='/signUp' element={<SignUp />} />
                <Route path='/login' element={
                    <ProtectedRoute
                        user={!user}
                        route={<Login />}
                        navigateto='/Home' />}
                />
                <Route path='/Home' element={
                    <ProtectedRoute
                        user={user}
                        route={<Home />}
                        navigateto='/login' />}
                />
            </>
        )
    )
    return <RouterProvider router={router} />
}

function ProtectedRoute({ user, route, navigateto }) {
    return user ? route : <Navigate to={navigateto} replace={true} />
}
