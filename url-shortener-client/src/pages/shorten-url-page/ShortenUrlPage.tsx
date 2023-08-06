import { FC } from 'react';
import { InfoModule, InputModule, StatsModule } from '../../modules';
import './ShortenUrlPage.scss';

export const ShortenUrlPage: FC = () => {
    return (
        <div className="shorten-url-page-wrapper">
            <InfoModule />
            <InputModule />
            <StatsModule />
        </div>
    );
};
