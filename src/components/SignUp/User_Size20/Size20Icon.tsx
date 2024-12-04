import { memo, SVGProps } from 'react';

const Size20Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M13.6667 15.5V13.8333C13.6667 12.9493 13.3155 12.1014 12.6904 11.4763C12.0652 10.8512 11.2174 10.5 10.3333 10.5H3.66667C2.78261 10.5 1.93477 10.8512 1.30964 11.4763C0.684523 12.1014 0.333333 12.9493 0.333333 13.8333V15.5M10.3333 3.83333C10.3333 5.67428 8.84095 7.16667 7 7.16667C5.15905 7.16667 3.66667 5.67428 3.66667 3.83333C3.66667 1.99238 5.15905 0.5 7 0.5C8.84095 0.5 10.3333 1.99238 10.3333 3.83333Z'
      stroke='#1E1E1E'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(Size20Icon);
export { Memo as Size20Icon };
