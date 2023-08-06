import { FC } from 'react';
import { RoundedTransparentButton } from '../../../../ui/buttons/rounded-transparent-button/RoundedTransparentButton';
import { SvgGitHub, SvgLinkedIn, SvgInstagram, SvgYouTube } from '../../../../assets/svg-icons';
import './FooterTopContainer.scss';

export const FooterTopContainer: FC = () => {
    return (
        <div className="footer-top-container">
            <RoundedTransparentButton
                buttonContent={<SvgGitHub width={20} height={20} color="aliceblue" />}
                onClick={() => window.open('https://github.com/CharmedLesh?tab=repositories', '_blank')}
            />
            <RoundedTransparentButton
                buttonContent={<SvgLinkedIn width={20} height={20} color="aliceblue" />}
                onClick={() => window.open('https://linkedin.com/in/viacheslav-matvieiev-87a554272', '_blank')}
            />
            <RoundedTransparentButton
                buttonContent={<SvgInstagram width={20} height={20} color="aliceblue" />}
                onClick={() => window.open('https://www.instagram.com/locked_lesh/', '_blank')}
            />
            <RoundedTransparentButton
                buttonContent={<SvgYouTube width={20} height={20} color="aliceblue" />}
                onClick={() => window.open('https://youtu.be/dQw4w9WgXcQ', '_blank')}
            />
        </div>
    );
};
