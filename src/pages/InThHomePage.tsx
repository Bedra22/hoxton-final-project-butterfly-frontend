import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";

export function InThHomePage() {
    return (
        <div>
            <Routes>
                <Route path='/home' element={<HomePage />} />
            </Routes>
        </div>
    )
}