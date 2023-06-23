import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "../pages/Login/Login";
import Page404 from "../pages/Page404/Page404";
import Profile from "../pages/profile/Profile";


export const PATH = {
    LOGIN: '/login',
    PAGE404: '/404',
    PROFILE: '/profile/:id',

}

const Pages = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={PATH.LOGIN}/>}/>
            <Route path={PATH.LOGIN} element={<Login />}></Route>
            <Route path={PATH.PROFILE} element={<Profile />}></Route>
            <Route path={PATH.PAGE404} element={<Page404/>}/>
        </Routes>
    );
};

export default Pages;
