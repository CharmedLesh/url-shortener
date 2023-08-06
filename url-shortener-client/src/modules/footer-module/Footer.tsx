import { FC } from 'react';
import { FooterTopContainer } from './components/top-container/FooterTopContainer';
import { FooterBottomContainer } from './components/bottom-container/FooterBottomContainer';
import './Footer.scss';

export const Footer: FC = () => {
    return (
        <div className="footer-module-wrapper">
            <FooterTopContainer />
            <FooterBottomContainer />
        </div>
    );
};
