import React, { FC } from 'react';
import { Text } from '../atoms/Text';

export const Footer: FC = () => (
  <footer className="bg-cyber-gray p-4 text-center">
    <Text>&copy; {new Date().getFullYear()} PortfolioHub</Text>
  </footer>
);
