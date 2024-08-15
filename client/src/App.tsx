import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to={"/register/Art-Contest"} />} />
                <Route path="/events" element={<Navigate to={"/register/Art-Contest"} />} />
                <Route path="/register/Art-Contest" element={<RegistrationPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
