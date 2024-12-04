import { memo, SVGProps } from 'react';

const Rectangle1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1440 81' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H1440V81H0V0Z' fill='black' />
  </svg>
);

const Memo = memo(Rectangle1Icon);
export { Memo as Rectangle1Icon };
