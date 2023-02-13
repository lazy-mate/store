import React, { useState, useEffect } from "react";
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
    Navigate
} from "react-router-dom";
import { auth } from '../config/firebase'
import { onAuthStateChanged } from "firebase/auth";
import SplashScreen from "../Screens/SplashScreen";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
import Home from "../Screens/Home";
import AdminPortal from "../Screens/AdminPortal";


export default function Router() {
    const [isUserLogin, setIsUserLogin] = useState(false)
    const [isAdminLogin, setIsAdminLogin] = useState(false)


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log(user)
                if (uid === 'KVLmy4eBHiVqI2gSKl9h7v5g9cL2') {
                    setIsAdminLogin(true)
                }
                else {
                    setIsUserLogin(true)
                }
            } else {
                setIsAdminLogin(false)
                setIsUserLogin(false)
            }
        });
        return () => {
            unSubscribe();
            console.log('Connection Diconnected')
        }
    }, [])
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path='/' element={<SplashScreen />} />
                <Route path='/adminportal' element={
                    <ProtectedRoute
                        user={isAdminLogin}
                        route={<AdminPortal />}
                        navigateto='/login' />}
                />
                <Route path='/home' element={
                    isAdminLogin ?
                        <ProtectedRoute
                            user={isUserLogin}
                            route={<Home />}
                            navigateto='/adminportal' />
                        :
                        <ProtectedRoute
                            user={isUserLogin}
                            route={<Home />}
                            navigateto='/login' />
                }
                />
                <Route path='/login' element={
                    isUserLogin ?
                        <ProtectedRoute
                            user={!isUserLogin}
                            route={<Login />}
                            navigateto='/home' />
                        :
                        <ProtectedRoute
                            user={!isAdminLogin}
                            route={<Login />}
                            navigateto='/adminportal' />}
                />
                <Route path='/signup' element={
                    isUserLogin ?
                        <ProtectedRoute
                            user={!isUserLogin}
                            route={<SignUp />}
                            navigateto='/home' />
                        :
                        <ProtectedRoute
                            user={!isAdminLogin}
                            route={<SignUp />}
                            navigateto='/adminportal' />}
                />
            </>
        )
    )
    return <RouterProvider router={router} />
}

function ProtectedRoute({ user, route, navigateto }) {
    return user ? route : <Navigate to={navigateto} replace={true} />
}
