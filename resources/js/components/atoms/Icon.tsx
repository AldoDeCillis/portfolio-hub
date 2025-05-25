import React, { FC, ComponentType, SVGProps } from 'react';
import * as Icons from 'lucide-react';
interface IconProps { name: keyof typeof Icons; className?: string; }
export const Icon: FC<IconProps> = ({ name, className }) => {
  const IconComponent = Icons[name] as ComponentType<SVGProps<SVGSVGElement>>;
  return IconComponent ? <IconComponent className={className} /> : null;
};
