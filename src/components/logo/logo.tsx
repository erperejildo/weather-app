import { forwardRef } from 'react';
import './logo.scss';

const Logo = forwardRef<HTMLInputElement>(() => {
  return <div className="logo">The Weather</div>;
});
Logo.displayName = 'Logo';

export { Logo };
