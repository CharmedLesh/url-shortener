import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { SvgDisconnected } from '../../assets/svg-icons';
import './ErrorPage.scss';

export const ErrorPage: FC = () => {
    const navigate = useNavigate();

    return (
        <div className="error-page-wrapper">
            <div className="error-page-info-container">
                <div className="error-number">404</div>
                <div className="error-info-header">Page not found</div>
                <div className="error-info">The only option availible is returning back to home page</div>
                <button className="return-to-home-button" onClick={() => navigate('/')}>
                    back to home
                </button>
            </div>
            <div className="error-icon-container">
                <SvgDisconnected />
            </div>
        </div>
    );
};
