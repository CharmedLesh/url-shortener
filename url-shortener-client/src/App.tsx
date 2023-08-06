import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ErrorPage, ShortenUrlPage } from './pages';
import { Footer } from './modules';
import './App.scss';

function App() {
    return (
        <div className="app-wrapper">
            <div className="content-wrapper">
                <BrowserRouter>
                    <Routes>
                        <Route path="/home" element={<Navigate to="/" />} />
                        <Route path="/" element={<ShortenUrlPage />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </BrowserRouter>
            </div>
            <div className="footer-wrapper">
                <Footer />
            </div>
        </div>
    );
}

export default App;
