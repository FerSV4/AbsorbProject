import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 19 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M2.71429 0.499999L9.5 8.625L16.2857 0.5L19 2.125L9.5 13.5L6.44225e-07 2.125L2.71429 0.499999Z'
      fill='#252B42'
    />
  </svg>
);

const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
