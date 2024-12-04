import { memo, SVGProps } from 'react';

const Size24Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 8C0 8 4 0 11 0C18 0 22 8 22 8C22 8 18 16 11 16C4 16 0 8 0 8Z'
      stroke='#1E1E1E'
      strokeWidth={2.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M11 11C12.6569 11 14 9.65685 14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11Z'
      stroke='#1E1E1E'
      strokeWidth={2.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(Size24Icon);
export { Memo as Size24Icon };
