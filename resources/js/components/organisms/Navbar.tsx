import React, { FC } from 'react';
import { Logo } from '../molecules/Logo';
import { NavLink } from '../molecules/NavLink';
export const Navbar: FC = () => (
  <nav className="fixed top-0 w-full bg-cyber-dark bg-opacity-80 backdrop-blur p-4 flex items-center justify-between z-50">
    <Logo />
    <div className="flex items-center">
      <NavLink href="#home">Home</NavLink>
      <NavLink href="#cv">CV Wizard</NavLink>
      <NavLink href="#projects">Projects</NavLink>
      <NavLink href="#blog">Blog</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </div>
  </nav>
);
