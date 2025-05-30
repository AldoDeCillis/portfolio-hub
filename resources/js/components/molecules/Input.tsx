import React, { FC, InputHTMLAttributes } from 'react';
import clsx from 'clsx';
export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => (
  <input className={clsx('w-full p-2 rounded-lg bg-cyber-gray border border-cyber-neon-blue focus:outline-none focus:ring-2 focus:ring-cyber-neon-pink bg-black/50 border-purple-500/30 text-white placeholder-gray-500 focus:border-purple-400 focus:ring-purple-400/20 backdrop-blur-sm', className)} {...props} />
);
