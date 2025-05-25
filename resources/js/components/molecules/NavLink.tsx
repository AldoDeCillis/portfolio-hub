import React, { FC } from 'react'; import clsx from 'clsx';
interface NavLinkProps{ href:string; children:React.ReactNode; }
export const NavLink: FC<NavLinkProps> = ({ href, children }) => (
  <a href={href} className={clsx('mx-2 px-2 py-1 rounded transition-colors', 'text-cyber-neon-pink hover:bg-cyber-neon-blue')}>{children}</a>
);
