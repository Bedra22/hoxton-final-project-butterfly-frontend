import { Route, Routes } from "react-router-dom";
import { LogInPage } from "./LogInPage";
import { SignUpPage } from "./SignUpPage";

export function BothLogSign({ signUp }: any) {
    return (
        <div>
            <Routes>
                <Route index path='/' element={<SignUpPage signUp={signUp} />} />
                <Route path='/login' element={<LogInPage signUp={signUp} />} />
            </Routes>
        </div>
    )
}