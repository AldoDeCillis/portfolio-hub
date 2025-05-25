import React, { FC, TextareaHTMLAttributes } from 'react';
import clsx from 'clsx';
export const TextArea: FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ({ className, ...props }) => (
  <textarea className={clsx('w-full p-2 rounded-lg bg-cyber-gray border border-cyber-neon-blue focus:outline-none focus:ring-2 focus:ring-cyber-neon-pink', className)} {...props} />
);
