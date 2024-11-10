import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";
import { NewFood } from "../pages/NewFood";
import { EditFood } from "../pages/EditFood";
import { Details } from "../pages/Details";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<NewFood />} />
            <Route path="/edit/:id" element={<EditFood />} />
            <Route path="/details/:id" element={<Details />} />

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}