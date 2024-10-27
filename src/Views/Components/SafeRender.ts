import useMounted from 'Hooks/useMounted'
import React from 'react'

export interface SaferenderProps<T = React.ElementType>
    extends React.HTMLAttributes<T> {
  component?: T;
}

const SafeRender = React.forwardRef<HTMLElement, SaferenderProps>(
  ({ component: Comp = 'div', ...props }, ref) => {
    const mounted = useMounted(); 
    return mounted ? React.createElement(Comp, { ...props, ref }) : null;
  }
);

SafeRender.displayName = 'SafeRender';
export default SafeRender;
