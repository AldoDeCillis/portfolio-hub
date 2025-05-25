import React, { FC, ReactNode, ElementType } from 'react';
import clsx from 'clsx';
interface HeadingProps { level?: 1|2|3|4|5|6; className?: string; children: ReactNode; }
export const Heading: FC<HeadingProps> = ({ level=1, className, children }) => {
  const Tag: ElementType = `h${level}`;
  return <Tag className={clsx('font-display', className)}>{children}</Tag>;
};
