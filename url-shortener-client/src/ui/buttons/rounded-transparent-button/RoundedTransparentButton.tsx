import { FC } from 'react';
import './RoundedTransparentButton.scss';

interface IRoundedTransparentButtonProps {
    buttonContent: JSX.Element;
    onClick: () => void;
}

export const RoundedTransparentButton: FC<IRoundedTransparentButtonProps> = (props) => {
    const { buttonContent, onClick } = props;

    return (
        <button className="rounded-transparent-button-wrapper" onClick={onClick}>
            <div className="button-content">{buttonContent}</div>
        </button>
    );
};
