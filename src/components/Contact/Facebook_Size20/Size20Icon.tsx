import { memo, SVGProps } from 'react';

const Size20Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10 0.666667H7.5C6.39493 0.666667 5.33512 1.10565 4.55372 1.88706C3.77232 2.66846 3.33333 3.72826 3.33333 4.83333V7.33333H0.833333V10.6667H3.33333V17.3333H6.66667V10.6667H9.16667L10 7.33333H6.66667V4.83333C6.66667 4.61232 6.75446 4.40036 6.91074 4.24408C7.06702 4.0878 7.27899 4 7.5 4H10V0.666667Z'
      stroke='#1E1E1E'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(Size20Icon);
export { Memo as Size20Icon };
