import React, { FC, ReactNode } from 'react';
import { Navbar } from '../organisms/Navbar';
import { Footer } from '../organisms/Footer';
export const MainLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white overflow-x-hidden">
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);
