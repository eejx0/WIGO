import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/globalStyle.style";
import { OnBoarding } from "./pages/onBoarding";
import { SignUp } from "./pages/signUp";
import { Login } from "./pages/login";
import { Home } from "./pages/home";

const Router = () => {
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Routes>
                <Route path="/onBoarding" element={<OnBoarding />}/>
                <Route path="/" element={<Home />}/>
                <Route path="/signUp" element={<SignUp />}/>
                <Route path="/login" element={<Login />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;