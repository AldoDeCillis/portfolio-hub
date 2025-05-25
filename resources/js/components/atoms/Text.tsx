import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';
interface TextProps { className?: string; children: ReactNode; }
export const Text: FC<TextProps> = ({ className, children }) => <p className={clsx('text-base leading-relaxed', className)}>{children}</p>;
