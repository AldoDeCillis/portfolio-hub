import { FC } from 'react';
import { Heading } from '../atoms/Heading';
export const Logo: FC = () => (
    <Heading level={1} className="text-cyber-neon-green text-2xl">
        <img src={'./assets/adc_logo.png'} alt="adc_logo" className="h-42" />
    </Heading>
);
