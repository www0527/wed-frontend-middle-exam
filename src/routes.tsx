import type { RouteObject } from 'react-router-dom';
import Home from "./pages/home";
import About from "./pages/about";
import Other from './pages/other';
import DepartmentsOfEachSchool from "./pages/north_departments_of_each_school"
import DepartmentsOfEachSchool2 from './pages/north_departments_of_each_school/page2'
import SouthDepartmentsOfEachSchool from './pages/south_departments_of_each_school';
import SouthDepartmentsOfEachSchool2 from './pages/south_departments_of_each_school/page2';
import MiddleDepartmentsOfEachSchool from './pages/middle_departments_of_each_school';
import MiddleDepartmentsOfEachSchool2 from './pages/middle_departments_of_each_school/page2';
import EastDepartmentsOfEachSchool from './pages/east_departments_of_each_school';
import EastDepartmentsOfEachSchool2 from './pages/east_departments_of_each_school';
import { News,News2,News3,News4,News5 } from './pages/news';
import { SeminarPepper } from './pages/seminar_pepper/seminar_pepper';
import { Pepper } from './pages/pepper';
import LoginPage from './pages/login';
import React from 'react';


const routes: RouteObject[] =[
    {
        path: "/wed-frontend-middle-exam",
        element: <Home />,
        children:[]
    },
    {
        path: "/news",
        element: <News />,
        children:[]
    },
    {
        path: "/news/2",
        element: <News2 />,
        children:[]
    },
    {
        path: "/news/3",
        element: <News3 />,
        children:[]
    },
    {
        path: "/news/4",
        element: <News4 />,
        children:[]
    },
    {
        path: "/news/5",
        element: <News5 />,
        children:[]
    },
    {
        path: "/about",
        element: <About />,
        children:[]
    },
    {
        path:"/DepartmentsOfEachSchool",
        element: <DepartmentsOfEachSchool />,
        children:[]
    },
    {
        path:"/DepartmentsOfEachSchool/2",
        element: <DepartmentsOfEachSchool2 />,
        children:[]
    },
    {
        path:"/DepartmentsOfEachSchool/中區",
        element: <MiddleDepartmentsOfEachSchool />,
        children:[]
    },
    {
        path:"/DepartmentsOfEachSchool/中區/2",
        element: <MiddleDepartmentsOfEachSchool2 />,
        children:[]
    },
    {
        path:"/DepartmentsOfEachSchool/南區",
        element: <SouthDepartmentsOfEachSchool />,
        children:[]
    },
    {
        path:"/DepartmentsOfEachSchool/南區/2",
        element: <SouthDepartmentsOfEachSchool2 />,
        children:[]
    },
    {
        path:"/DepartmentsOfEachSchool/東區",
        element: <EastDepartmentsOfEachSchool />,
        children:[]
    },
    {
        path:"/DepartmentsOfEachSchool/東區/2",
        element: <EastDepartmentsOfEachSchool2 />,
        children:[]
    },
    {
        path:"/SeminarPepper",
        element: <SeminarPepper />,
        children:[]
    },
    {
        path:"/Pepper",
        element: <Pepper />,
        children:[]
    },
    {
        path:"/LoginPage",
        element: <LoginPage />,
        children:[]
    },
    {
        path:"*",
        element: <Other />,
        children:[]
    },
];

export default routes;