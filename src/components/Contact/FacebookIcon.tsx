import { memo, SVGProps } from 'react';

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 11 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11 2.38419e-07H8C6.67392 2.38419e-07 5.40215 0.526784 4.46447 1.46447C3.52678 2.40215 3 3.67392 3 5V8H0V12H3V20H7V12H10L11 8H7V5C7 4.73478 7.10536 4.48043 7.29289 4.29289C7.48043 4.10536 7.73478 4 8 4H11V2.38419e-07Z'
      stroke='#F5F5F5'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(FacebookIcon);
export { Memo as FacebookIcon };
