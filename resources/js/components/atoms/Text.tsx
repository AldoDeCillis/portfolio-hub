import clsx from 'clsx';
import { FC, ReactNode } from 'react';
interface TextProps {
    className?: string;
    children: ReactNode;
}
export const Text: FC<TextProps> = ({ className, children }) => <p className={clsx('text-base leading-relaxed', className)}>{children}</p>;
